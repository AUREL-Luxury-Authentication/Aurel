* {
  box-sizing: border-box;
}

:root {
  --bg: #121212;
  --bg-elevated: #1a1a1a;
  --panel: rgba(30, 30, 30, 0.9);
  --panel-strong: #1d1d1d;
  --line: rgba(255, 255, 255, 0.08);
  --text: #f4efe9;
  --muted: #bfb7af;
  --gold: #d6b77b;
  --gold-soft: #f2d8a0;
  --accent: #caa15d;
  --shadow: rgba(0, 0, 0, 0.28);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top, rgba(214, 183, 123, 0.16), transparent 30%),
    linear-gradient(180deg, #0f0f10, #171715 38%, #101010);
  color: var(--text);
  font-family: "Inter", sans-serif;
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 5.5rem 0;
}

.muted {
  background: rgba(255, 255, 255, 0.01);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  background: rgba(17, 17, 17, 0.7);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 78px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: 0.12em;
  font-weight: 600;
}

.brand-mark {
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(214, 183, 123, 0.6);
  color: var(--gold-soft);
  background: rgba(214, 183, 123, 0.08);
  font-family: "Cormorant Garamond", serif;
  font-size: 1.7rem;
  font-weight: 700;
}

.brand-text {
  font-size: 0.92rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  color: var(--muted);
  font-size: 0.96rem;
}

.main-nav a {
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  color: var(--text);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.5rem;
  font-weight: 600;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--gold), var(--accent));
  color: #1b1a17;
  box-shadow: 0 8px 24px rgba(214, 183, 123, 0.28);
}

.button-secondary {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--text);
}

.hero {
  padding: 5rem 0 3rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 2.5rem;
}

.eyebrow {
  margin: 0 0 0.8rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--gold-soft);
}

h1,
h2,
h3 {
  margin: 0;
  line-height: 1.1;
  font-weight: 600;
}

h1,
h2 {
  font-family: "Cormorant Garamond", serif;
}

h1 {
  font-size: clamp(3rem, 5vw, 5rem);
  max-width: 640px;
}

h2 {
  font-size: clamp(2.2rem, 3vw, 3.2rem);
}

.lede {
  max-width: 620px;
  margin: 1.2rem 0 0;
  color: var(--muted);
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.hero-meta {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: var(--muted);
  font-size: 0.95rem;
}

.hero-meta li {
  position: relative;
  padding-left: 1.1rem;
}

.hero-meta li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--gold-soft);
}

.hero-card {
  background: linear-gradient(180deg, rgba(23, 23, 23, 0.98), rgba(15, 15, 15, 0.96));
  border: 1px solid rgba(214, 183, 123, 0.26);
  border-radius: 28px;
  padding: 1.25rem;
  box-shadow: 0 28px 80px var(--shadow);
}

.card-topline {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--muted);
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.status-dot {
  width: 0.7rem;
  height: 0.7rem;
  display: inline-block;
  border-radius: 50%;
  background: #48d39d;
  box-shadow: 0 0 12px rgba(72, 211, 157, 0.7);
}

.item-panel {
  background: linear-gradient(135deg, rgba(214, 183, 123, 0.12), rgba(242, 216, 160, 0.04));
  border: 1px solid rgba(214, 183, 123, 0.15);
  padding: 1.2rem;
  border-radius: 18px;
}

.item-tag {
  display: inline-block;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  background: rgba(214, 183, 123, 0.12);
  border: 1px solid rgba(214, 183, 123, 0.28);
  color: var(--gold-soft);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.item-panel h2 {
  margin-top: 0.9rem;
  font-size: clamp(2rem, 2vw, 2.5rem);
}

.item-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.1rem;
}

.label {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.checklist {
  margin-top: 1.1rem;
  display: grid;
  gap: 0.8rem;
}

.check-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.8rem 0.9rem;
  color: var(--muted);
  font-size: 0.95rem;
}

.check-row strong {
  color: var(--text);
  font-weight: 600;
}

.trust-bar {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(0, 0, 0, 0.12);
}

.trust-items {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  padding: 1rem 0;
  text-align: center;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.77rem;
}

.section-header {
  margin-bottom: 2.4rem;
}

.section-header.narrow {
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.steps-grid,
.category-grid {
  display: grid;
  gap: 1.4rem;
}

.steps-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.category-grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.step-card,
.category-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 1.5rem;
  min-height: 100%;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(214, 183, 123, 0.1);
  color: var(--gold-soft);
  border: 1px solid rgba(214, 183, 123, 0.22);
  margin-bottom: 1rem;
  font-weight: 700;
}

.step-card h3,
.category-card h3,
.feature-list h3 {
  margin-bottom: 0.7rem;
  font-size: 1.3rem;
}

.step-card p,
.category-card p,
.feature-list p,
.faq-answer p,
.footer-copy {
  color: var(--muted);
}

.category-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 12px;
  background: rgba(214, 183, 123, 0.09);
  border: 1px solid rgba(214, 183, 123, 0.22);
  font-size: 1.4rem;
  margin-bottom: 0.9rem;
}

.two-column {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 2rem;
  align-items: start;
}

.feature-list {
  display: grid;
  gap: 1.2rem;
}

.feature-list article {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.25rem 1.3rem;
}

.faq-list {
  max-width: 820px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

.faq-item {
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  overflow: hidden;
}

.faq-item button {
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--text);
  padding: 1.1rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  text-align: left;
  cursor: pointer;
  font-weight: 600;
}

.faq-item button::after {
  content: "+";
  color: var(--gold-soft);
  font-size: 1.5rem;
  line-height: 1;
}

.faq-item button[aria-expanded="true"]::after {
  content: "−";
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
}

.faq-answer p {
  margin: 0;
  padding: 0 1.2rem 1.15rem;
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 1.8rem 0 2.3rem;
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
}

.brand-footer {
  margin-bottom: 0.5rem;
}

.footer-copy {
  text-align: right;
}

@media (max-width: 980px) {
  .hero-grid,
  .two-column,
  .steps-grid,
  .category-grid {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }

  .trust-items {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 3.5rem;
  }

  .button {
    width: 100%;
  }

  .hero-actions {
    flex-direction: column;
  }

  .trust-items,
  .footer-wrap {
    grid-template-columns: 1fr;
    display: grid;
    text-align: left;
  }

  .footer-copy {
    text-align: left;
  }
}
