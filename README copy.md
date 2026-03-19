# Akshitha Chiluka — Portfolio

Personal portfolio website built with vanilla HTML, CSS, and JavaScript.

🌐 **Live:** https://akshitha-chiluka.github.io/akshitha-portfolio

---

## 📁 Project Structure

```
akshitha-portfolio/
│
├── index.html              ← Main HTML (semantic, accessible)
│
├── css/
│   ├── tokens.css          ← Design tokens (colors, fonts, spacing)
│   ├── base.css            ← Reset, body, shared utilities
│   ├── nav.css             ← Navbar, cursor, progress bar, mobile drawer
│   ├── hero.css            ← Hero section styles
│   └── sections.css        ← About, Skills, Projects, Experience, etc.
│
├── js/
│   ├── data.js             ← All portfolio content (edit this to update)
│   ├── ui.js               ← Cursor, nav, progress bar, back-to-top
│   ├── hero.js             ← Hero entrance animations + avatar parallax
│   ├── background.js       ← Three.js animated background
│   └── scroll.js           ← Scroll reveal, skill bars, contribution grid
│
└── assets/
    └── images/             ← Put your profile photo here
```

---

## ✏️ How to Update Content

All content lives in **`js/data.js`** — open that file and edit:
- Personal info (name, email, links)
- Skills and percentages
- Projects (title, description, tags, links)
- Work experience
- Achievements

---

## 🚀 How to Run Locally

Just open `index.html` in your browser — no build step needed.

For a local server (recommended):
```bash
npx serve .
# or
python -m http.server 8080
```

---

## 📦 Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, Grid, Flexbox (no framework)
- **Vanilla JS** — No dependencies except Three.js
- **Three.js r128** — Animated 3D background (CDN)
- **Google Fonts** — Playfair Display, Inter, JetBrains Mono

---

## 🌐 Deploy to GitHub Pages

1. Push this folder to a GitHub repo named `akshitha-portfolio`
2. Go to **Settings → Pages**
3. Source: **Deploy from branch → main → / (root)**
4. Your site is live at `https://akshitha-chiluka.github.io/akshitha-portfolio`

---

## 📄 License

MIT — feel free to use as a template.
