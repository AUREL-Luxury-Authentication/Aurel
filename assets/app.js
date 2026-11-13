* {
  box-sizing: border-box;
}

:root {
  --bg: #121212;
  --bg-elevated: #181817;
  --panel: rgba(28, 28, 28, 0.95);
  --panel-strong: #1c1b1a;
  --line: rgba(255, 255, 255, 0.08);
  --text: #f4efe9;
  --muted: #c6bbae;
  --gold: #d7b776;
  --gold-soft: #f2d8a0;
  --accent: #c99d58;
  --shadow: rgba(0, 0, 0, 0.26);
  --success: #57d29d;
  --danger: #f4a7a7;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top, rgba(214, 183, 123, 0.14), transparent 28%),
    linear-gradient(180deg, #0d0d0d 0%, #171614 40%, #111111 100%);
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
  background: rgba(255, 255, 255, 0.015);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(18px);
  background: rgba(15, 15, 15, 0.78);
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

.brand-logo {
  width: 2.4rem;
  height: 2.4rem;
  display: block;
  filter: drop-shadow(0 0 18px rgba(214, 183, 123, 0.22));
}

.brand-text {
  font-size: 0.95rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--muted);
  font-size: 0.96rem;
}

.main-nav a {
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible,
.main-nav a.active {
  color: var(--text);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.5rem;
  font-weight: 600;
  border: 1px solid transparent;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--gold), var(--accent));
  color: #1e1a17;
  box-shadow: 0 10px 28px rgba(214, 183, 123, 0.24);
}

.button-secondary {
  background: transparent;
  border-color: var(--line);
  color: var(--text);
}

.hero {
  padding: 5rem 0 3rem;
}

.hero-grid,
.two-column,
.contact-grid,
.footer-wrap {
  display: grid;
  gap: 2rem;
}

.hero-grid {
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
}

.eyebrow {
  margin: 0 0 0.8rem;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--gold-soft);
}

h1,
h2,
h3 {
  margin: 0;
  line-height: 1.08;
  font-weight: 600;
}

h1,
h2 {
  font-family: "Cormorant Garamond", serif;
}

h1 {
  font-size: clamp(3rem, 5vw, 5rem);
  max-width: 700px;
}

h2 {
  font-size: clamp(2.2rem, 3vw, 3.1rem);
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
  padding-left: 1rem;
}

.hero-meta li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--gold-soft);
}

.hero-card {
  background: linear-gradient(180deg, rgba(23, 23, 23, 0.97), rgba(16, 16, 16, 0.98));
  border: 1px solid rgba(214, 183, 123, 0.26);
  border-radius: 28px;
  padding: 1.25rem;
  box-shadow: 0 32px 80px var(--shadow);
}

.card-topline {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--muted);
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.status-dot {
  width: 0.7rem;
  height: 0.7rem;
  display: inline-block;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 12px rgba(87, 210, 157, 0.7);
}

.item-panel {
  background: linear-gradient(135deg, rgba(214, 183, 123, 0.12), rgba(242, 216, 160, 0.04));
  border: 1px solid rgba(214, 183, 123, 0.15);
  border-radius: 18px;
  padding: 1.2rem;
}

.item-tag {
  display: inline-block;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  background: rgba(214, 183, 123, 0.12);
  border: 1px solid rgba(214, 183, 123, 0.24);
  color: var(--gold-soft);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.item-panel h2 {
  margin-top: 0.9rem;
  font-size: clamp(2rem, 2vw, 2.6rem);
}

.item-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.1rem;
}

.label {
  display: block;
  margin-bottom: 0.2rem;
  color: var(--muted);
  font-size: 0.73rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.checklist {
  margin-top: 1rem;
  display: grid;
  gap: 0.75rem;
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
  font-size: 0.94rem;
}

.check-row strong {
  color: var(--text);
}

.trust-bar {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.01);
}

.trust-items {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  padding: 1rem 0;
  text-align: center;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.74rem;
}

.steps-grid,
.category-grid,
.service-grid {
  display: grid;
  gap: 1.4rem;
}

.steps-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.category-grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.service-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.step-card,
.category-card,
.service-card,
.feature-list article,
.info-panel,
.lead-form,
.quote-panel {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 1.45rem;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(214, 183, 123, 0.08);
  border: 1px solid rgba(214, 183, 123, 0.18);
  color: var(--gold-soft);
  font-weight: 700;
  margin-bottom: 1rem;
}

.step-card h3,
.category-card h3,
.service-card h3,
.feature-list h3,
.info-panel h3 {
  margin-bottom: 0.7rem;
  font-size: 1.3rem;
}

.step-card p,
.category-card p,
.service-card p,
.feature-list p,
.info-panel p,
.footer-copy,
.muted-copy {
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

.cta-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 2rem 2.2rem;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(214, 183, 123, 0.12), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(214, 183, 123, 0.18);
}

.page-hero {
  padding-bottom: 2rem;
}

.narrow-layout {
  max-width: 760px;
}

.two-column {
  grid-template-columns: 0.9fr 1.1fr;
  align-items: start;
}

.feature-list {
  display: grid;
  gap: 1rem;
}

.quote-panel {
  max-width: 840px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.15rem;
  line-height: 1.7;
}

.contact-grid {
  grid-template-columns: 1.2fr 0.8fr;
  align-items: start;
}

.lead-form {
  display: grid;
  gap: 1rem;
}

.field-group {
  display: grid;
  gap: 0.45rem;
}

.field-group label {
  font-size: 0.9rem;
  color: var(--muted);
}

.field-group input,
.field-group select,
.field-group textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.9rem 0.95rem;
}

.field-group input::placeholder,
.field-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.38);
}

.field-group textarea {
  min-height: 150px;
  resize: vertical;
}

.form-status {
  min-height: 1.5rem;
  margin: 0;
  color: var(--success);
}

.info-panel ul {
  margin: 0 0 1rem;
  padding-left: 1.2rem;
  color: var(--muted);
  display: grid;
  gap: 0.6rem;
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 1.8rem 0 2.2rem;
}

.footer-wrap {
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: end;
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
  .contact-grid,
  .category-grid,
  .service-grid,
  .steps-grid {
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

  .hero-actions,
  .cta-panel,
  .footer-wrap {
    grid-template-columns: 1fr;
    display: grid;
  }

  .footer-copy {
    text-align: left;
  }

  .trust-items {
    grid-template-columns: 1fr;
  }
}
