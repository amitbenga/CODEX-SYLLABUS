"use client";

import * as React from "react";
import { Layers3, Rocket, Sparkles } from "lucide-react";

type ButtonConfig = {
  text: string;
  onClick?: () => void;
};

type HeroProps = {
  trustBadge?: {
    text: string;
    icons?: React.ReactNode[];
  };
  headline?: {
    line1: string;
    line2: string;
    line3?: string;
  };
  subtitle?: string;
  buttons?: {
    primary?: ButtonConfig;
    secondary?: ButtonConfig;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
};

function mountShader(canvas: HTMLCanvasElement) {
  const host = canvas.parentElement;
  if (!host) {
    return () => {};
  }

  const prefersReducedMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  class WebGLRenderer {
    private canvas: HTMLCanvasElement;
    private gl: WebGL2RenderingContext;
    private program: WebGLProgram | null = null;
    private vertexShader: WebGLShader | null = null;
    private fragmentShader: WebGLShader | null = null;
    private buffer: WebGLBuffer | null = null;
    private uniforms: Record<string, WebGLUniformLocation | null> = {};
    private mouseMove = [0, 0];
    private mouseCoords = [0, 0];
    private pointerCoords = [0, 0];
    private pointerCount = 0;

    constructor(targetCanvas: HTMLCanvasElement) {
      const context = targetCanvas.getContext("webgl2", {
        antialias: true,
        alpha: false,
        powerPreference: "high-performance"
      });

      if (!context) {
        throw new Error("WebGL2 is not available.");
      }

      this.canvas = targetCanvas;
      this.gl = context;
    }

    private compile(type: number, source: string) {
      const shader = this.gl.createShader(type);
      if (!shader) {
        throw new Error("Failed to create shader.");
      }

      this.gl.shaderSource(shader, source);
      this.gl.compileShader(shader);

      if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
        const error = this.gl.getShaderInfoLog(shader);
        this.gl.deleteShader(shader);
        throw new Error(error || "Shader compilation failed.");
      }

      return shader;
    }

    setup(source: string) {
      this.vertexShader = this.compile(
        this.gl.VERTEX_SHADER,
        `#version 300 es
precision highp float;
in vec4 position;
void main() {
  gl_Position = position;
}`
      );

      this.fragmentShader = this.compile(this.gl.FRAGMENT_SHADER, source);
      this.program = this.gl.createProgram();

      if (!this.program) {
        throw new Error("Failed to create shader program.");
      }

      this.gl.attachShader(this.program, this.vertexShader);
      this.gl.attachShader(this.program, this.fragmentShader);
      this.gl.linkProgram(this.program);

      if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
        throw new Error(this.gl.getProgramInfoLog(this.program) || "Program link failed.");
      }

      this.buffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), this.gl.STATIC_DRAW);

      const position = this.gl.getAttribLocation(this.program, "position");
      this.gl.enableVertexAttribArray(position);
      this.gl.vertexAttribPointer(position, 2, this.gl.FLOAT, false, 0, 0);

      this.uniforms = {
        resolution: this.gl.getUniformLocation(this.program, "resolution"),
        time: this.gl.getUniformLocation(this.program, "time"),
        move: this.gl.getUniformLocation(this.program, "move"),
        touch: this.gl.getUniformLocation(this.program, "touch"),
        pointerCount: this.gl.getUniformLocation(this.program, "pointerCount"),
        pointers: this.gl.getUniformLocation(this.program, "pointers")
      };
    }

    updateScale(width: number, height: number) {
      this.gl.viewport(0, 0, width, height);
    }

    updatePointerState(pointerHandler: PointerHandler) {
      this.mouseCoords = pointerHandler.first;
      this.pointerCoords = pointerHandler.coords;
      this.mouseMove = pointerHandler.move;
      this.pointerCount = pointerHandler.count;
    }

    render(now = 0) {
      if (!this.program || !this.buffer) {
        return;
      }

      this.gl.clearColor(0, 0, 0, 1);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
      this.gl.useProgram(this.program);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);

      if (this.uniforms.resolution) {
        this.gl.uniform2f(this.uniforms.resolution, this.canvas.width, this.canvas.height);
      }
      if (this.uniforms.time) {
        this.gl.uniform1f(this.uniforms.time, now * 1e-3);
      }
      if (this.uniforms.move) {
        this.gl.uniform2f(this.uniforms.move, this.mouseMove[0], this.mouseMove[1]);
      }
      if (this.uniforms.touch) {
        this.gl.uniform2f(this.uniforms.touch, this.mouseCoords[0], this.mouseCoords[1]);
      }
      if (this.uniforms.pointerCount) {
        this.gl.uniform1i(this.uniforms.pointerCount, this.pointerCount);
      }
      if (this.uniforms.pointers) {
        this.gl.uniform2fv(this.uniforms.pointers, this.pointerCoords);
      }

      this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
    }

    destroy() {
      if (this.buffer) {
        this.gl.deleteBuffer(this.buffer);
      }
      if (this.program) {
        this.gl.deleteProgram(this.program);
      }
      if (this.vertexShader) {
        this.gl.deleteShader(this.vertexShader);
      }
      if (this.fragmentShader) {
        this.gl.deleteShader(this.fragmentShader);
      }
    }
  }

  class PointerHandler {
    private target: HTMLElement;
    private canvas: HTMLCanvasElement;
    private scale = 1;
    private active = false;
    private pointers = new Map<number, number[]>();
    private lastCoords = [0, 0];
    private moves = [0, 0];
    private listeners: Array<() => void> = [];

    constructor(target: HTMLElement, canvasElement: HTMLCanvasElement) {
      this.target = target;
      this.canvas = canvasElement;
      this.bind();
    }

    private bind() {
      const onPointerDown = (event: PointerEvent) => {
        this.active = true;
        this.pointers.set(event.pointerId, this.mapCoords(event.clientX, event.clientY));
        this.lastCoords = this.mapCoords(event.clientX, event.clientY);
      };

      const onPointerMove = (event: PointerEvent) => {
        if (!this.active) {
          return;
        }

        this.lastCoords = this.mapCoords(event.clientX, event.clientY);
        this.pointers.set(event.pointerId, this.lastCoords);
        this.moves = [this.moves[0] + event.movementX, this.moves[1] + event.movementY];
      };

      const onPointerUp = (event: PointerEvent) => {
        this.pointers.delete(event.pointerId);
        this.active = this.pointers.size > 0;
        if (!this.active) {
          this.moves = [0, 0];
        }
      };

      ["pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel"].forEach((type) => {
        const handler =
          type === "pointerdown"
            ? onPointerDown
            : type === "pointermove"
              ? onPointerMove
              : onPointerUp;

        this.target.addEventListener(type, handler as EventListener, { passive: true });
        this.listeners.push(() => this.target.removeEventListener(type, handler as EventListener));
      });
    }

    private mapCoords(clientX: number, clientY: number) {
      const rect = this.canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      return [x * this.scale, (rect.height - y) * this.scale];
    }

    updateScale(scale: number) {
      this.scale = scale;
    }

    destroy() {
      this.listeners.forEach((unsubscribe) => unsubscribe());
      this.listeners = [];
    }

    get count() {
      return this.pointers.size;
    }

    get move() {
      return this.moves;
    }

    get coords() {
      return this.pointers.size > 0 ? Array.from(this.pointers.values()).flat() : [0, 0];
    }

    get first() {
      return Array.from(this.pointers.values())[0] ?? this.lastCoords;
    }
  }

  const renderer = new WebGLRenderer(canvas);
  renderer.setup(SHADER_SOURCE);

  const pointerHandler = new PointerHandler(host, canvas);

  const resize = () => {
    const rect = host.getBoundingClientRect();
    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 1.5));
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    pointerHandler.updateScale(dpr);
    renderer.updateScale(canvas.width, canvas.height);
    renderer.updatePointerState(pointerHandler);
    renderer.render();
  };

  let frameId = 0;
  const renderFrame = (time: number) => {
    renderer.updatePointerState(pointerHandler);
    renderer.render(time);
    frameId = window.requestAnimationFrame(renderFrame);
  };

  resize();

  window.addEventListener("resize", resize);
  let resizeObserver: ResizeObserver | null = null;
  if ("ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
  }

  if (!prefersReducedMotion) {
    frameId = window.requestAnimationFrame(renderFrame);
  }

  return () => {
    window.removeEventListener("resize", resize);
    if (frameId) {
      window.cancelAnimationFrame(frameId);
    }
    resizeObserver?.disconnect();
    pointerHandler.destroy();
    renderer.destroy();
  };
}

function useShaderBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    return mountShader(canvasRef.current);
  }, []);

  return canvasRef;
}

export default function AnimatedShaderHero({
  trustBadge = {
    text: "מסלול חי לשיפוט, ארכיטקטורה והובלת delivery",
    icons: [
      <Sparkles key="sparkles" className="h-4 w-4" />,
      <Layers3 key="layers" className="h-4 w-4" />,
      <Rocket key="rocket" className="h-4 w-4" />
    ]
  },
  headline = {
    line1: "לומדים לבנות",
    line2: "מוצר טכני",
    line3: "בלי ללכת לאיבוד בקוד"
  },
  subtitle = "מסלול עבודה חי שמציג רק את הצעד הבא: להבין מערכות, לשפוט קוד, לנהל סוכנים ולהוביל לפרודקשן.",
  buttons = {
    primary: { text: "לפתוח את היחידה הבאה" },
    secondary: { text: "לראות את מפת 16 השבועות" }
  },
  stats = [
    { value: "16", label: "שבועות" },
    { value: "14", label: "יחידות" },
    { value: "5", label: "יכולות ליבה" }
  ],
  className = ""
}: HeroProps) {
  const canvasRef = useShaderBackground();

  return (
    <section className={`relative min-h-screen overflow-hidden rounded-[32px] bg-slate-950 text-white ${className}`}>
      <style>{ANIMATION_STYLES}</style>

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(168,85,247,0.18),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0.12),rgba(2,6,23,0.55))]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:px-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-xl">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-100 sm:justify-start">
              <span className="flex items-center gap-1 text-amber-300">{trustBadge.icons}</span>
              <span>{trustBadge.text}</span>
            </div>
          </div>

          <p className="animate-fade-in-up animation-delay-200 mt-6 text-xs font-extrabold uppercase tracking-[0.24em] text-sky-200">
            הכשרה לבנייה, judgment ו-delivery
          </p>

          <h1 className="mt-6 grid gap-2 text-5xl font-black leading-[0.92] sm:text-6xl lg:text-8xl">
            <span className="animate-fade-in-up animation-delay-300">{headline.line1}</span>
            <span className="animate-fade-in-up animation-delay-400 bg-gradient-to-r from-amber-200 via-orange-300 to-violet-300 bg-clip-text text-transparent">
              {headline.line2}
            </span>
            {headline.line3 ? <span className="animate-fade-in-up animation-delay-500">{headline.line3}</span> : null}
          </h1>

          <p className="animate-fade-in-up animation-delay-600 mt-6 max-w-2xl text-lg leading-8 text-slate-200/82 sm:text-xl">
            {subtitle}
          </p>

          <div className="animate-fade-in-up animation-delay-700 mt-8 flex flex-col gap-3 sm:flex-row">
            {buttons.primary ? (
              <button
                type="button"
                onClick={buttons.primary.onClick}
                className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-7 py-4 text-base font-bold text-white shadow-[0_20px_50px_rgba(99,102,241,0.35)] transition duration-300 hover:scale-[1.02]"
              >
                {buttons.primary.text}
              </button>
            ) : null}

            {buttons.secondary ? (
              <button
                type="button"
                onClick={buttons.secondary.onClick}
                className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-base font-semibold text-slate-100 backdrop-blur-xl transition duration-300 hover:scale-[1.02] hover:bg-white/14"
              >
                {buttons.secondary.text}
              </button>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4 animate-fade-in-up animation-delay-800">
          <div className="rounded-[28px] border border-white/12 bg-slate-950/45 p-5 shadow-[0_28px_80px_rgba(2,6,23,0.32)] backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-100/72">Command view</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-100">Next thing only</span>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-white/6 p-5">
              <p className="text-sm font-bold text-sky-200">שבוע 1</p>
              <h2 className="mt-3 text-2xl font-black leading-tight text-white">מפת העולם של אפליקציה מודרנית</h2>
              <p className="mt-3 text-sm leading-7 text-slate-200/74">
                להבין מה רץ בלקוח, מה בשרת, איפה נשמר דאטה, ואיפה נוצרים חורי אבטחה.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[18px] border border-white/8 bg-white/6 px-4 py-3">
                  <strong className="block text-2xl font-black text-white">{stat.value}</strong>
                  <span className="mt-1 block text-sm text-slate-200/68">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ANIMATION_STYLES = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
  }

  .animation-delay-200 { animation-delay: 0.2s; }
  .animation-delay-300 { animation-delay: 0.3s; }
  .animation-delay-400 { animation-delay: 0.4s; }
  .animation-delay-500 { animation-delay: 0.5s; }
  .animation-delay-600 { animation-delay: 0.6s; }
  .animation-delay-700 { animation-delay: 0.7s; }
  .animation-delay-800 { animation-delay: 0.8s; }
`;

const SHADER_SOURCE = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p) {
  p = fract(p * vec2(12.9898, 78.233));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = rnd(i);
  float b = rnd(i + vec2(1.0, 0.0));
  float c = rnd(i + vec2(0.0, 1.0));
  float d = rnd(i + 1.0);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float t = 0.0;
  float a = 1.0;
  mat2 m = mat2(1.0, -0.5, 0.2, 1.2);
  for (int i = 0; i < 5; i++) {
    t += a * noise(p);
    p *= 2.0 * m;
    a *= 0.5;
  }
  return t;
}

float clouds(vec2 p) {
  float d = 1.0;
  float t = 0.0;
  for (float i = 0.0; i < 3.0; i++) {
    float a = d * fbm(i * 10.0 + p.x * 0.2 + 0.2 * (1.0 + i) * p.y + d + i * i + p);
    t = mix(t, d, a);
    d = a;
    p *= 2.0 / (i + 1.0);
  }
  return t;
}

void main(void) {
  vec2 uv = (FC - 0.5 * R) / MN;
  vec2 st = uv * vec2(2.0, 1.0);
  vec3 col = vec3(0.0);
  float bg = clouds(vec2(st.x + T * 0.5, -st.y));
  uv *= 1.0 - 0.3 * (sin(T * 0.2) * 0.5 + 0.5);

  for (float i = 1.0; i < 12.0; i++) {
    uv += 0.1 * cos(i * vec2(0.1 + 0.01 * i, 0.8) + i * i + T * 0.5 + 0.1 * uv.x);
    vec2 p = uv;
    float d = length(p);
    col += 0.00125 / d * (cos(sin(i) * vec3(1.0, 2.0, 3.0)) + 1.0);
    float b = noise(i + p + bg * 1.731);
    col += 0.002 * b / length(max(p, vec2(b * p.x * 0.02, p.y)));
    col = mix(col, vec3(bg * 0.25, bg * 0.137, bg * 0.05), d);
  }

  O = vec4(col, 1.0);
}`;
