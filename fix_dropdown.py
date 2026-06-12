import re

with open("/Users/amitbenga/antifravity/CODEX-SYLLABUS/styles.css", "r") as f:
    content = f.read()

# 1. Update the original dropdown styling to use CSS variables
old_css = """
.hero-syllabus-dropdown summary {
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 52px;
  padding: 10px 18px;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  background: rgba(15, 23, 42, 0.04);
  color: #0f172a;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}

.hero-syllabus-dropdown summary::-webkit-details-marker {
  display: none;
}

.hero-syllabus-dropdown summary:hover,
.hero-syllabus-dropdown[open] summary {
  background: rgba(15, 23, 42, 0.08);
  border-color: rgba(15, 23, 42, 0.15);
  transform: translateY(-1px);
}

.hero-syllabus-dropdown summary span {
  font-size: 0.78rem;
  color: rgba(15, 23, 42, 0.68);
  font-weight: 700;
}

.hero-syllabus-dropdown summary strong {
  font-size: 0.92rem;
  color: rgba(15, 23, 42, 0.94);
}

.hero-syllabus-menu {
  position: relative;
  margin-top: 16px;
  width: min(860px, calc(100vw - 32px));
  padding: 14px;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 26px 80px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(24px);
}

.hero-syllabus-case {
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 14px;
  background: rgba(15, 118, 110, 0.08);
  border: 1px solid rgba(15, 118, 110, 0.15);
  text-align: start;
}

.hero-syllabus-case span,
.hero-syllabus-week {
  display: inline-flex;
  font-size: 0.78rem;
  color: rgba(15, 23, 42, 0.62);
  font-weight: 800;
}

.hero-syllabus-case strong {
  display: block;
  margin-top: 4px;
  color: #0f172a;
  font-size: 1rem;
}

.hero-syllabus-case p {
  margin: 6px 0 0;
  color: rgba(15, 23, 42, 0.7);
  line-height: 1.5;
  font-size: 0.88rem;
}
"""

new_css = """
.hero-syllabus-dropdown summary {
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 52px;
  padding: 10px 18px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink);
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}

.hero-syllabus-dropdown summary::-webkit-details-marker {
  display: none;
}

.hero-syllabus-dropdown summary:hover,
.hero-syllabus-dropdown[open] summary {
  background: var(--surface-strong);
  border-color: rgba(15, 118, 110, 0.24);
  transform: translateY(-1px);
}

.hero-syllabus-dropdown summary span {
  font-size: 0.78rem;
  color: var(--muted);
  font-weight: 700;
}

.hero-syllabus-dropdown summary strong {
  font-size: 0.92rem;
  color: var(--ink);
}

.hero-syllabus-menu {
  position: relative;
  margin-top: 16px;
  width: min(860px, calc(100vw - 32px));
  padding: 14px;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: var(--surface-strong);
  box-shadow: var(--shadow);
  backdrop-filter: blur(24px);
}

.hero-syllabus-case {
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 14px;
  background: rgba(15, 118, 110, 0.08);
  border: 1px solid rgba(15, 118, 110, 0.15);
  text-align: start;
}

.hero-syllabus-case span,
.hero-syllabus-week {
  display: inline-flex;
  font-size: 0.78rem;
  color: var(--muted);
  font-weight: 800;
}

.hero-syllabus-case strong {
  display: block;
  margin-top: 4px;
  color: var(--ink);
  font-size: 1rem;
}

.hero-syllabus-case p {
  margin: 6px 0 0;
  color: var(--muted);
  line-height: 1.5;
  font-size: 0.88rem;
}
"""

content = content.replace(old_css.strip(), new_css.strip())

# 2. Remove the "Syllabus dropdown — inline editorial link, no glass" block 
# which starts at line 4719 and ends right before "/* Global progress bar — thin ink line, no gradient */"
start_marker = "/* Syllabus dropdown — inline editorial link, no glass */"
end_marker = "/* Global progress bar — thin ink line, no gradient */"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + content[end_idx:]
else:
    print("Could not find start or end markers for block deletion!")

with open("/Users/amitbenga/antifravity/CODEX-SYLLABUS/styles.css", "w") as f:
    f.write(content)

print("Styles updated successfully.")
