# Deepak B — Developer Portfolio

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-0969da?style=flat&logo=github)](https://deepak78194.github.io/myportfolio/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-3fb950?style=flat)](./LICENSE)

> Personal portfolio of **Deepak B** — Software Engineer at Cognizant specializing in Java backend systems, microservices architecture, and AI-assisted development.

---

## Live Site

**[deepak78194.github.io/myportfolio](https://deepak78194.github.io/myportfolio/)**

---

## Overview

A single-page developer portfolio built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies. Designed with a GitHub-inspired dark/light theme and deployed via GitHub Pages.

---

## Features

- **Dark / Light theme** — GitHub-palette theming, persisted via `localStorage`, respects `prefers-color-scheme`
- **Smooth scroll navigation** — Fixed glassmorphism navbar with active section highlighting
- **Scroll-reveal animations** — Staggered `IntersectionObserver`-driven entrance animations
- **Typing effect** — Rotating tech keywords in the hero section
- **Fully responsive** — Mobile-first layout with breakpoints at 768px and 480px; full mobile nav overlay
- **Zero dependencies** — Pure vanilla HTML + CSS + JS, no frameworks, no build step
- **Accessible** — Semantic HTML5, `aria-label` attributes, keyboard-navigable

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, role, typing effect, CTA buttons |
| **About** | Professional intro, code block, experience stats |
| **Skills & Tech Stack** | Skill cards by category + AI-assisted development |
| **Work Experience** | Timeline with ownership areas and key impact |
| **Education** | Degree, institution, CGPA |
| **Contact** | Email, LinkedIn, phone |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 — Custom Properties, Grid, Flexbox, `clamp()` |
| Scripting | Vanilla JavaScript (ES5-compatible) |
| Fonts | Google Fonts — Inter + JetBrains Mono |
| Hosting | GitHub Pages (static, root deploy) |
| Animations | `IntersectionObserver` API, CSS keyframes |

---

## Project Structure

```
myportfolio/
├── index.html          # Single-page entry point
├── css/
│   └── styles.css      # All styles — theming, layout, components, responsive
├── js/
│   └── main.js         # Theme toggle, typing effect, scroll animations, nav
├── .gitignore
├── LICENSE
└── README.md
```

---

## Local Development

No build step required. Open directly in a browser:

```bash
# Clone the repository
git clone https://github.com/deepak78194/myportfolio.git

# Navigate into the folder
cd myportfolio

# Open in browser (or use VS Code Live Server)
start index.html
```

For live reloading during development, use the [VS Code Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

---

## Deployment — GitHub Pages

1. Push code to the `main` branch
2. Go to **Settings → Pages** in the repository
3. Set **Source** to `Deploy from a branch` → `main` → `/ (root)`
4. Save — the site will be live at `https://deepak78194.github.io/myportfolio/`

No GitHub Actions or CI pipeline needed.

---

## Contact

| Channel | Details |
|---|---|
| **Email** | [deepak78194@gmail.com](mailto:deepak78194@gmail.com) |
| **LinkedIn** | [linkedin.com/in/deepakbalaraman](https://www.linkedin.com/in/deepakbalaraman) |

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

You are free to use this as a template for your own portfolio. Please do not copy personal content (bio, work experience, education) as your own.

---

<p align="center">Designed & built by <strong>Deepak B</strong> · Hosted on GitHub Pages</p>