// news-fx.js — "mole digging" reveal trail + newspaper shatter
// Monochrome paper sits on a canvas; the cursor digs healing tunnels that
// reveal a vivid colour layer beneath. Completing a unit shatters the paper.
(function () {
  const PALETTES = {
    spectrum:
      "radial-gradient(circle at 16% 26%, #FF4D2E 0, transparent 42%)," +
      "radial-gradient(circle at 82% 18%, #FFC107 0, transparent 40%)," +
      "radial-gradient(circle at 26% 80%, #00B39A 0, transparent 44%)," +
      "radial-gradient(circle at 86% 78%, #2563EB 0, transparent 44%)," +
      "radial-gradient(circle at 54% 52%, #D726B6 0, transparent 38%)," +
      "#12103A",
    sunrise:
      "radial-gradient(circle at 18% 24%, #FF3D5A 0, transparent 44%)," +
      "radial-gradient(circle at 80% 20%, #FFB020 0, transparent 42%)," +
      "radial-gradient(circle at 30% 82%, #FF6A3D 0, transparent 44%)," +
      "radial-gradient(circle at 84% 80%, #C0267A 0, transparent 42%)," +
      "radial-gradient(circle at 56% 50%, #FFD23F 0, transparent 34%)," +
      "#3A0E2E",
    electric:
      "radial-gradient(circle at 18% 26%, #00E5C0 0, transparent 44%)," +
      "radial-gradient(circle at 82% 20%, #2D7BFF 0, transparent 42%)," +
      "radial-gradient(circle at 28% 80%, #7C4DFF 0, transparent 44%)," +
      "radial-gradient(circle at 86% 78%, #00B0FF 0, transparent 42%)," +
      "radial-gradient(circle at 54% 52%, #19E37D 0, transparent 36%)," +
      "#07103A",
  };

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const state = { dark: false, palette: "spectrum", grain: true, trail: 26 };

  let canvas, ctx, w, h, dpr, paper, raf = 0;
  let pts = [], last = null, colorLayer = null;

  function paperColors() {
    return state.dark
      ? { base: "#1E1B16", dot: "rgba(0,0,0,0.34)", lit: "rgba(255,248,232,0.030)", rim: "rgba(0,0,0,0.30)", vig: "rgba(0,0,0,0.40)" }
      : { base: "#E9E1CF", dot: "rgba(38,28,12,0.11)", lit: "rgba(255,255,255,0.55)", rim: "rgba(58,40,16,0.20)", vig: "rgba(70,50,20,0.12)" };
  }

  function buildPaper() {
    paper = document.createElement("canvas");
    paper.width = Math.max(1, Math.floor(w * dpr));
    paper.height = Math.max(1, Math.floor(h * dpr));
    const c = paper.getContext("2d");
    c.scale(dpr, dpr);
    const col = paperColors();
    c.fillStyle = col.base;
    c.fillRect(0, 0, w, h);
    if (state.grain) {
      const n = Math.floor((w * h) / 850);
      for (let i = 0; i < n; i++) {
        const x = Math.random() * w, y = Math.random() * h, r = Math.random() * 0.9 + 0.25;
        c.fillStyle = Math.random() < 0.5 ? col.dot : col.lit;
        c.globalAlpha = Math.random() * 0.5 + 0.2;
        c.beginPath(); c.arc(x, y, r, 0, 7); c.fill();
      }
      c.globalAlpha = 1;
    }
    const g = c.createRadialGradient(w / 2, h * 0.4, Math.min(w, h) * 0.18, w / 2, h / 2, Math.max(w, h) * 0.78);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(1, col.vig);
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
  }

  function drawStatic() {
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(paper, 0, 0, w, h);
  }

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function spawn(x, y) {
    const j = () => (Math.random() - 0.5);
    pts.push({
      x: x + j() * 7, y: y + j() * 7,
      r: state.trail * (0.7 + Math.random() * 0.55),
      life: 1, decay: 0.011 + Math.random() * 0.009,
    });
    if (pts.length > 600) pts.splice(0, pts.length - 600);
  }

  function move(cx, cy) {
    if (reduce) return;
    if (last) {
      const dx = cx - last.x, dy = cy - last.y, d = Math.hypot(dx, dy);
      const step = Math.max(4, state.trail * 0.38);
      const n = Math.min(48, Math.floor(d / step));
      for (let i = 1; i <= n; i++) spawn(last.x + (dx * i) / n, last.y + (dy * i) / n);
    }
    spawn(cx, cy);
    last = { x: cx, y: cy };
    if (!raf) loop();
  }

  function loop() {
    const col = paperColors();
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(paper, 0, 0, w, h);

    // dig holes
    ctx.globalCompositeOperation = "destination-out";
    for (const p of pts) {
      const t = p.life;
      const r = p.r * easeOut(t);
      if (r > 0.5) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        g.addColorStop(0, "rgba(0,0,0," + 0.96 * Math.min(1, t * 1.35) + ")");
        g.addColorStop(0.68, "rgba(0,0,0," + 0.55 * t + ")");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 7); ctx.fill();
      }
      p.life -= p.decay;
    }

    // turned-earth rim on fresh holes
    ctx.globalCompositeOperation = "source-over";
    for (const p of pts) {
      if (p.life > 0.8) {
        ctx.strokeStyle = col.rim;
        ctx.globalAlpha = ((p.life - 0.8) / 0.2) * 0.5;
        ctx.lineWidth = 1.3;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * easeOut(p.life) * 0.94, 0, 7); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;

    pts = pts.filter((p) => p.life > 0);
    raf = pts.length ? requestAnimationFrame(loop) : 0;
    if (!raf) drawStatic();
  }

  // ── Shatter ──────────────────────────────────────────────
  function shatter(ox, oy, opts) {
    opts = opts || {};
    const burst = document.createElement("div");
    burst.className = "fx-burst";
    burst.style.background = PALETTES[state.palette];
    if (opts.label) {
      const card = document.createElement("div");
      card.className = "fx-burst__card";
      card.innerHTML =
        '<div class="fx-burst__check">\u2713</div>' +
        '<div class="fx-burst__num">' + String(opts.label.num).padStart(2, "0") + "</div>" +
        '<div class="fx-burst__title">' + opts.label.title + "</div>" +
        '<div class="fx-burst__tag">\u05d4\u05d5\u05e9\u05dc\u05dd \u00b7 UNIT COMPLETE</div>';
      burst.appendChild(card);
    }
    document.body.appendChild(burst);

    if (reduce) {
      requestAnimationFrame(() => burst.classList.add("on"));
      setTimeout(() => opts.onPeak && opts.onPeak(), 220);
      setTimeout(() => {
        burst.classList.remove("on");
        setTimeout(() => burst.remove(), 500);
        opts.onEnd && opts.onEnd();
      }, 1500);
      return;
    }

    const layer = document.createElement("div");
    layer.className = "fx-shards";
    document.body.appendChild(layer);
    const cols = 8, rows = 6, cw = w / cols, ch = h / rows;
    const col = paperColors();
    const shards = [];
    for (let r = 0; r < rows; r++) {
      for (let cI = 0; cI < cols; cI++) {
        for (let tri = 0; tri < 2; tri++) {
          const sh = document.createElement("div");
          sh.className = "fx-shard";
          sh.style.left = cI * cw + "px";
          sh.style.top = r * ch + "px";
          sh.style.width = cw + "px";
          sh.style.height = ch + "px";
          sh.style.background = col.base;
          sh.style.clipPath = tri === 0
            ? "polygon(0 0,100% 0,0 100%)"
            : "polygon(100% 0,100% 100%,0 100%)";
          const ccx = cI * cw + cw / 2, ccy = r * ch + ch / 2;
          const ang = Math.atan2(ccy - oy, ccx - ox);
          const dist = Math.hypot(ccx - ox, ccy - oy);
          const push = 140 + Math.random() * 300;
          const tx = Math.cos(ang) * push;
          const ty = Math.sin(ang) * push + 90;
          const rot = (Math.random() - 0.5) * 140;
          const delay = Math.min(0.34, (dist / Math.max(w, h)) * 0.5) + Math.random() * 0.05;
          sh.style.transition =
            "transform 0.95s cubic-bezier(.2,.62,.2,1) " + delay + "s, opacity 0.9s ease " + (delay + 0.12) + "s";
          layer.appendChild(sh);
          shards.push([sh, tx, ty, rot]);
        }
      }
    }
    requestAnimationFrame(() => burst.classList.add("on"));
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        for (const [sh, tx, ty, rot] of shards) {
          sh.style.transform = "translate(" + tx + "px," + ty + "px) rotate(" + rot + "deg) scale(.55)";
          sh.style.opacity = "0";
        }
      })
    );
    setTimeout(() => opts.onPeak && opts.onPeak(), 680);
    setTimeout(() => {
      burst.classList.remove("on");
      layer.remove();
      setTimeout(() => { burst.remove(); opts.onEnd && opts.onEnd(); }, 650);
    }, 1750);
  }

  // ── Setup ────────────────────────────────────────────────
  function resize() {
    w = window.innerWidth; h = window.innerHeight;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildPaper();
    drawStatic();
    last = null;
  }

  const NewsFX = {
    init(opts) {
      opts = opts || {};
      state.dark = !!opts.dark;
      colorLayer = document.getElementById("color-layer");
      canvas = document.getElementById("dig-canvas");
      ctx = canvas.getContext("2d");
      this.setPalette(state.palette);
      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("pointermove", (e) => move(e.clientX, e.clientY), { passive: true });
      window.addEventListener("touchmove", (e) => {
        const t = e.touches[0]; if (t) move(t.clientX, t.clientY);
      }, { passive: true });
    },
    setTheme(dark) { state.dark = !!dark; buildPaper(); if (!raf) drawStatic(); },
    setPalette(p) { state.palette = p; if (colorLayer) colorLayer.style.background = PALETTES[p]; },
    setGrain(on) { state.grain = !!on; buildPaper(); if (!raf) drawStatic(); },
    setTrail(px) { state.trail = px; },
    shatter,
    reduce,
  };
  window.NewsFX = NewsFX;
})();
