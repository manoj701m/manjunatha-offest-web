# Manjunatha Offset Printers — Website

Official website for **Manjunatha Offset Printers**, established 1995.
Located in Molakalmuru Town, Chitradurga District, Karnataka.

📞 +91 99804 48755

---

## Project Structure

```
manjunatha-offest-web/
├── index.html          ← Main page (all sections)
├── css/
│   └── styles.css      ← All custom styles, animations, variables
├── js/
│   └── main.js         ← Mobile menu toggle, scroll animations
├── assets/
│   └── images/         ← Drop real shop/product photos here
└── README.md
```

---

## Local Development

No build step needed. Just serve the folder with any static server:

```bash
# Option 1 — Python (zero install)
python3 -m http.server 8080
# Open: http://localhost:8080

# Option 2 — Node
npx serve .
# Open: http://localhost:3000

# Option 3 — VS Code
# Right-click index.html → Open with Live Server
```

---

## Deployment (Vercel — Recommended)

### One-time setup
1. Go to vercel.com → New Project → Import from GitHub
2. Select `manjunatha-offest-web`
3. Framework: **Other** (static HTML)
4. Click Deploy

### Connect subdomain `prints.hridith.com`
In Vercel → Settings → Domains → Add `prints.hridith.com`
Then in your domain registrar add a CNAME: `prints` → `cname.vercel-dns.com`

### Auto-deploy on push
```bash
git add .
git commit -m "update: describe what changed"
git push
# → Live on prints.hridith.com in ~30 seconds
```

---

## Adding Real Photos

Replace SVG illustrations in `index.html` with real images:

```html
<!-- Replace SVG block with: -->
<img src="assets/images/visiting-cards.jpg"
     alt="Visiting cards printed by Manjunatha Offset Printers"
     class="w-full h-full object-cover">
```

---

## Tech Stack
- HTML5, Tailwind CSS (CDN), Vanilla JS
- Google Fonts: DM Sans + DM Serif Display
- Hosted on Vercel (free tier)