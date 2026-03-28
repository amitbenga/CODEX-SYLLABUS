document.addEventListener("DOMContentLoaded", () => {
  const catalog = window.unitPagesCatalog;
  const heroEl = document.querySelector("#unitPageHero");
  const navEl = document.querySelector("#unitPageNav");
  const sidebarEl = document.querySelector("#unitPageSidebar");
  const contentEl = document.querySelector("#unitPageContent");
  const topMetaEl = document.querySelector("#unitPageTopMeta");

  if (!catalog || typeof catalog.getUnitPage !== "function") {
    if (contentEl) {
      contentEl.innerHTML = renderFatalState();
    }
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const requestedUnitId = params.get("unit") || "world-map";
  const unitPage = catalog.getUnitPage(requestedUnitId);
  const parts = Array.isArray(unitPage.parts) ? unitPage.parts : [];
  const fallbackPart = parts[0] || null;
  let currentPartId = params.get("page") || (fallbackPart ? fallbackPart.id : "");

  if (!parts.some((part) => part.id === currentPartId) && fallbackPart) {
    currentPartId = fallbackPart.id;
  }

  function renderPage() {
    const currentPart = parts.find((part) => part.id === currentPartId) || fallbackPart;
    const currentIndex = parts.findIndex((part) => part.id === currentPart?.id);
    const prevPart = currentIndex > 0 ? parts[currentIndex - 1] : null;
    const nextPart = currentIndex >= 0 && currentIndex < parts.length - 1 ? parts[currentIndex + 1] : null;

    document.title = `${unitPage.title} | ${currentPart ? currentPart.label : "עמוד יחידה"}`;
    document.body.dataset.accent = unitPage.accent || "teal";

    if (topMetaEl) {
      topMetaEl.textContent = `${unitPage.weekLabel || "יחידה"} · ${unitPage.category || "מסלול"}`;
    }

    if (heroEl) {
      heroEl.innerHTML = renderHero(unitPage, currentPart);
    }

    if (navEl) {
      navEl.innerHTML = parts
        .map((part) => {
          const isActive = part.id === currentPartId;
          return `
            <button type="button" class="unit-nav-button ${isActive ? "active" : ""}" data-part-id="${part.id}">
              ${escapeHtml(part.navShort || part.label)}
            </button>
          `;
        })
        .join("");
    }

    if (sidebarEl) {
      sidebarEl.innerHTML = renderSidebar(unitPage, currentPart, prevPart, nextPart);
    }

    if (contentEl) {
      contentEl.innerHTML = currentPart
        ? renderPart(currentPart, prevPart, nextPart, unitPage.id)
        : renderFatalState();
    }
  }

  function selectPart(partId) {
    currentPartId = partId;
    const nextUrl = catalog.buildUnitPageUrl(unitPage.id, currentPartId);
    window.history.replaceState({}, "", nextUrl);
    renderPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navEl?.addEventListener("click", (event) => {
    const target = event.target.closest("[data-part-id]");
    if (!target) {
      return;
    }

    selectPart(target.dataset.partId);
  });

  renderPage();
  initCompletionBar();
});

function renderHero(unitPage, currentPart) {
  const quickFacts = Array.isArray(unitPage.quickFacts) ? unitPage.quickFacts : [];

  return `
    <div class="unit-hero-grid">
      <div class="unit-hero-copy">
        <span class="unit-hero-eyebrow">${escapeHtml(unitPage.heroEyebrow || unitPage.weekLabel || "יחידה")}</span>
        <h1>${escapeHtml(unitPage.title)}</h1>
        <p>${escapeHtml(unitPage.subtitle || "")}</p>
        <div class="unit-hero-actions">
          <a class="unit-hero-button" href="#unitPageContent">לצלול לחלק הנבחר</a>
          <a class="unit-hero-button-ghost" href="./index.html#navigator">חזרה למפת היחידות</a>
        </div>
      </div>

      <div class="unit-hero-facts">
        ${quickFacts
          .map(
            (fact) => `
              <article class="unit-fact-card">
                <strong class="unit-fact-value">${escapeHtml(String(fact.value))}</strong>
                <span class="unit-fact-label">${escapeHtml(fact.label)}</span>
              </article>
            `
          )
          .join("")}
        ${
          currentPart
            ? `
              <article class="unit-fact-card">
                <strong class="unit-fact-value">${escapeHtml(currentPart.label)}</strong>
                <span class="unit-fact-label">החלק שפתוח עכשיו</span>
              </article>
            `
            : ""
        }
      </div>
    </div>
  `;
}

function renderSidebar(unitPage, currentPart, prevPart, nextPart) {
  return `
    <section class="sidebar-block">
      <span class="sidebar-label">עכשיו עובדים על</span>
      <h3 class="sidebar-title">${escapeHtml(currentPart ? currentPart.label : unitPage.title)}</h3>
      <p class="sidebar-copy">${escapeHtml(currentPart ? currentPart.description : unitPage.subtitle || "")}</p>
    </section>

    <section class="sidebar-block">
      <span class="sidebar-label">מפת היחידה</span>
      <ul class="sidebar-list">
        ${(unitPage.parts || [])
          .map(
            (part) => `
              <li>${escapeHtml(part.label)}${part.id === currentPart?.id ? " · פתוח" : ""}</li>
            `
          )
          .join("")}
      </ul>
    </section>

    <section class="sidebar-block">
      <span class="sidebar-label">למה זה חשוב</span>
      <p class="sidebar-copy">
        המטרה של הדף הזה היא לתת לך רק את החלק הבא שאתה רוצה ללמוד, בלי להעמיס על כל היחידה בבת אחת.
      </p>
    </section>

    <section class="sidebar-pager">
      ${prevPart ? `<a href="${escapeAttribute(buildLocalPartUrl(unitPage.id, prevPart.id))}">לחלק הקודם: ${escapeHtml(prevPart.navShort || prevPart.label)}</a>` : ""}
      ${nextPart ? `<a href="${escapeAttribute(buildLocalPartUrl(unitPage.id, nextPart.id))}">לחלק הבא: ${escapeHtml(nextPart.navShort || nextPart.label)}</a>` : ""}
      <a href="./index.html#lesson-studio">חזרה ל-preview בדף הבית</a>
    </section>
  `;
}

function renderPart(part, prevPart, nextPart, unitId) {
  return `
    <section class="lesson-part-shell">
      <header class="lesson-part-header">
        <span class="lesson-part-kicker">${escapeHtml(part.kicker || "חלק לימוד")}</span>
        <h2>${escapeHtml(part.title || part.label)}</h2>
        <p class="lesson-part-description">${escapeHtml(part.description || "")}</p>
      </header>

      <div class="lesson-blocks">
        ${(part.blocks || []).map(renderBlock).join("")}
      </div>

      <nav class="content-pager" aria-label="מעבר בין חלקי היחידה">
        ${prevPart ? `<a href="${escapeAttribute(buildLocalPartUrl(unitId, prevPart.id))}">הקודם: ${escapeHtml(prevPart.label)}</a>` : ""}
        <a class="primary" href="./index.html#lesson-studio">חזרה ל-launchpad</a>
        ${nextPart ? `<a href="${escapeAttribute(buildLocalPartUrl(unitId, nextPart.id))}">הבא: ${escapeHtml(nextPart.label)}</a>` : ""}
      </nav>
    </section>
  `;
}

function renderBlock(block) {
  switch (block.type) {
    case "lead":
      return `
        <section class="lesson-block">
          ${block.eyebrow ? `<span class="block-eyebrow">${escapeHtml(block.eyebrow)}</span>` : ""}
          <h3 class="block-title">${escapeHtml(block.title || "")}</h3>
          <div class="block-copy">${renderParagraphs(block.text)}</div>
        </section>
      `;

    case "bullet-list":
      return `
        <section class="lesson-block">
          <h3 class="block-title">${escapeHtml(block.title || "")}</h3>
          <ul class="block-list">
            ${(block.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </section>
      `;

    case "callout":
      return `
        <section class="lesson-block callout-card" data-tone="${escapeAttribute(block.tone || "info")}">
          <h3 class="block-title">${escapeHtml(block.title || "")}</h3>
          <div class="block-copy">${renderParagraphs(block.text)}</div>
        </section>
      `;

    case "analogy-grid":
      return `
        <section class="lesson-block">
          <h3 class="block-title">${escapeHtml(block.title || "")}</h3>
          <div class="analogy-grid">
            ${(block.items || [])
              .map(
                (item) => `
                  <article class="analogy-card">
                    <span class="analogy-tag">${escapeHtml(item.tag || "")}</span>
                    <h4>${escapeHtml(item.title || "")}</h4>
                    <p class="analogy-caption">${escapeHtml(item.caption || "")}</p>
                    <p class="block-copy">${escapeHtml(item.body || "")}</p>
                    <p class="analogy-risk">${escapeHtml(item.risk || "")}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;

    case "stack-map":
      return `
        <section class="lesson-block">
          <h3 class="block-title">${escapeHtml(block.title || "")}</h3>
          <div class="stack-map">
            ${(block.layers || [])
              .map(
                (layer) => `
                  <article class="stack-layer">
                    <h4>${escapeHtml(layer.name || "")}</h4>
                    <p>${escapeHtml(layer.note || "")}</p>
                    <div class="stack-chips">
                      ${(layer.chips || [])
                        .map((chip) => `<span class="stack-chip">${escapeHtml(chip)}</span>`)
                        .join("")}
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;

    case "tool-grid":
      return `
        <section class="lesson-block">
          <h3 class="block-title">${escapeHtml(block.title || "")}</h3>
          <div class="tool-grid">
            ${(block.items || [])
              .map(
                (item) => `
                  <article class="tool-card">
                    <h4>${escapeHtml(item.title || "")}</h4>
                    <p>${escapeHtml(item.body || item.description || "")}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;

    case "card-grid":
      return `
        <section class="lesson-block">
          <h3 class="block-title">${escapeHtml(block.title || "")}</h3>
          <div class="card-grid columns-${escapeAttribute(String(block.columns || 3))}">
            ${(block.items || [])
              .map(
                (item) => `
                  <article class="info-card">
                    ${item.eyebrow ? `<span class="info-card-eyebrow">${escapeHtml(item.eyebrow)}</span>` : ""}
                    <h4>${escapeHtml(item.title || "")}</h4>
                    <p>${escapeHtml(item.body || "")}</p>
                    ${item.footnote ? `<span class="info-card-footnote">${escapeHtml(item.footnote)}</span>` : ""}
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;

    case "table":
      return `
        <section class="lesson-block">
          <h3 class="block-title">${escapeHtml(block.title || "")}</h3>
          ${block.note ? `<p class="block-copy">${escapeHtml(block.note)}</p>` : ""}
          <div class="table-shell">
            <table class="rich-table">
              <thead>
                <tr>
                  ${(block.columns || []).map((column) => `<th>${escapeHtml(column)}</th>`).join("")}
                </tr>
              </thead>
              <tbody>
                ${(block.rows || [])
                  .map(
                    (row) => `
                      <tr>
                        ${row.map((cell) => `<td>${renderTableCell(cell)}</td>`).join("")}
                      </tr>
                    `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </section>
      `;

    case "zone-diagram":
      return `
        <section class="lesson-block">
          <h3 class="block-title">${escapeHtml(block.title || "")}</h3>
          ${block.note ? `<p class="block-copy">${escapeHtml(block.note)}</p>` : ""}
          <div class="zone-diagram">
            ${(block.zones || [])
              .map(
                (zone) => `
                  <article class="zone-card">
                    <span class="zone-label">${escapeHtml(zone.label || "")}</span>
                    <div class="zone-items">
                      ${(zone.items || [])
                        .map((item) => `<span class="zone-item">${escapeHtml(item)}</span>`)
                        .join("")}
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;

    case "sequence":
      return `
        <section class="lesson-block">
          <h3 class="block-title">${escapeHtml(block.title || "")}</h3>
          <div class="sequence-grid">
            ${(block.items || [])
              .map(
                (item) => `
                  <article class="sequence-step">
                    <span class="step-number">${escapeHtml(item.step || "")}</span>
                    <h4>${escapeHtml(item.title || "")}</h4>
                    <p>${escapeHtml(item.body || "")}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;

    case "code-block":
      return `
        <section class="lesson-block">
          ${block.eyebrow ? `<span class="block-eyebrow">${escapeHtml(block.eyebrow)}</span>` : ""}
          <h3 class="block-title">${escapeHtml(block.title || "")}</h3>
          ${block.note ? `<p class="block-copy">${escapeHtml(block.note)}</p>` : ""}
          <div class="code-shell">
            <div class="code-header">
              <span>${escapeHtml(block.language || "text")}</span>
            </div>
            <pre class="code-block"><code>${escapeHtml(block.code || "")}</code></pre>
          </div>
        </section>
      `;

    case "scenario-quiz":
      return `
        <section class="lesson-block quiz-card">
          <div class="quiz-scene">
            <span class="quiz-label">${escapeHtml(block.scenarioTitle || "תרחיש")}</span>
            <p>${escapeHtml(block.prompt || "")}</p>
          </div>

          <p class="quiz-question">${escapeHtml(block.question || "")}</p>

          <details class="quiz-answer">
            <summary>${escapeHtml(block.revealLabel || "לחשוף תשובה")}</summary>
            <div class="quiz-answer-body">
              <h4>${escapeHtml(block.answerTitle || "הניתוח")}</h4>
              <ul>
                ${(block.answer || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
              <h4>${escapeHtml(block.correctionTitle || "הניסוח המתוקן")}</h4>
              <p>${escapeHtml(block.correction || "")}</p>
            </div>
          </details>
        </section>
      `;

    default:
      return `
        <section class="lesson-block">
          <div class="block-copy">${renderParagraphs(block.text || block.body || "")}</div>
        </section>
      `;
  }
}

function renderParagraphs(value) {
  const parts = Array.isArray(value) ? value : [value];
  return parts
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}

function renderTableCell(cell) {
  if (Array.isArray(cell)) {
    return `
      <ul class="table-cell-list">
        ${cell.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    `;
  }

  return `<span>${escapeHtml(cell)}</span>`;
}

function renderFatalState() {
  return `
    <section class="lesson-block">
      <h3 class="block-title">לא הצלחנו לטעון את היחידה</h3>
      <p class="block-copy">בדוק שה-unit קיים ושקובץ התוכן של היחידות נטען כמו שצריך.</p>
    </section>
  `;
}

function buildLocalPartUrl(unitId, partId) {
  const params = new URLSearchParams();
  params.set("unit", unitId);
  if (partId) {
    params.set("page", partId);
  }
  return `./unit-page.html?${params.toString()}`;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function initCompletionBar() {
  const params = new URLSearchParams(window.location.search);
  const unitId = params.get("unit") || "";

  if (!unitId) return;

  // The canonical ordered list of unit IDs (same order as in unit-pages-data.js)
  const UNIT_ORDER = [
    "world-map",
    "http-api",
    "data-modeling",
    "business-logic",
    "frontend-architecture",
    "backend-architecture",
    "security",
    "debugging",
    "git-prs",
    "testing",
    "performance",
    "agent-leadership",
    "code-judgment",
    "capstone"
  ];

  const PROGRESS_KEY = "builder-course-unit-progress-v1";

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch {}
  }

  function getNextUnitId(currentId) {
    const idx = UNIT_ORDER.indexOf(currentId);
    if (idx === -1 || idx === UNIT_ORDER.length - 1) return null;
    return UNIT_ORDER[idx + 1];
  }

  const btn = document.getElementById("unitCompleteBtn");
  const label = document.getElementById("unitCompletionLabel");

  if (!btn) return;

  // Check if already completed
  const progress = getProgress();
  if (progress[unitId]) {
    btn.classList.add("is-done");
    btn.textContent = "✓ היחידה הושלמה";
    if (label) {
      const nextId = getNextUnitId(unitId);
      if (nextId) {
        label.textContent = "ממשיכים? לחץ להמשך ליחידה הבאה.";
        btn.textContent = "← ליחידה הבאה";
        btn.addEventListener("click", () => {
          window.location.href = `./unit-page.html?unit=${nextId}&page=overview`;
        });
      } else {
        label.textContent = "כל היחידות הושלמו! עבודה מצוינת.";
        btn.textContent = "✓ הסתיים המסלול";
        btn.disabled = true;
      }
    }
    return;
  }

  // Mark complete on click
  btn.addEventListener("click", () => {
    const prog = getProgress();
    prog[unitId] = true;
    saveProgress(prog);

    btn.classList.add("is-done");
    btn.textContent = "✓ הושלם!";

    const nextId = getNextUnitId(unitId);

    setTimeout(() => {
      if (nextId) {
        window.location.href = `./unit-page.html?unit=${nextId}&page=overview`;
      } else {
        window.location.href = "./index.html";
      }
    }, 800);

    if (label) {
      label.textContent = nextId ? "מעולה! עוברים ליחידה הבאה..." : "כל הכבוד! סיימת את המסלול.";
    }
  });
}
