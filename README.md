# Hygran Polymers Pvt Ltd — Company Website

Official website for **Hygran Polymers Pvt Ltd**, a PVC granules and compounds manufacturer based in Hyderabad, India. Built as a React SPA and deployed on GitHub Pages.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Routing | React Router v7 (HashRouter) |
| Styling | Plain CSS with custom properties |
| Linting | Oxlint |
| Deployment | GitHub Actions → GitHub Pages |

> HashRouter is used (not BrowserRouter) because GitHub Pages serves static files and does not support server-side URL rewriting.

---

## Local Development

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

---

## Deployment

Pushes to `master` automatically trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which:

1. Installs dependencies with `npm ci`
2. Builds the site with `npm run build`
3. Uploads the `dist/` folder as a Pages artifact
4. Deploys to GitHub Pages via the Pages API

The workflow includes two retry steps on the deploy job to handle transient GitHub Pages API failures.

**Live URL:** `https://sainath31.github.io/hygran-polymers/`

> The `base` path in `vite.config.js` (`/hygran-polymers/`) must match the GitHub repository name. If the repository is ever renamed, update `base` to the new name or the deployed site's assets will 404.

---

## Brand Identity

| | |
|---|---|
| **Company** | Hygran Polymers Pvt Ltd |
| **Tagline** | Formulated for Excellence. |
| **Business** | PVC granules & compounds manufacturer |
| **Location** | SY No 651, Lal Gadi Malakpet, Shamirpet, Medchal Malkajgiri, Hyderabad — 500078, Telangana, India |
| **WhatsApp** | +91 99492 75566 |

---

## Design System

### Color Palette

All colors are defined as CSS custom properties in `src/index.css`.

| Token | Value | Usage |
|---|---|---|
The brand palette follows **purple + orange**: purple carries the structure (nav, dark bands, headings, primary buttons), orange is the energetic accent (eyebrows, highlights, hover, hero accent word, progress bars).

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#4D148C` | Main brand color, buttons, links |
| `--color-primary-dark` | `#3A0F6B` | Darker purple — headings, hover states |
| `--color-primary-deeper` | `#2A0A4E` | Deepest purple — hero overlays, dark bands |
| `--color-primary-light` | `#6B29B5` | Lighter purple — gradients |
| `--color-accent` | `#FF6600` | Orange — accent text, shimmer, progress bars |
| `--color-accent-dark` | `#E55A00` | Darker orange — secondary accents |
| `--color-ink` | `#26212E` | Purple-grey — body text |
| `--color-muted` | `#6A6475` | Muted purple-grey — secondary text |
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-bg-alt` | `#F7F5FB` | Light purple-tint section background |
| `--color-border` | `#E4DEF0` | Purple-grey borders and dividers |

### Typography

| Token | Stack | Usage |
|---|---|---|
| `--font-display` | `'Sora', 'Segoe UI', system-ui` | Headings (h1–h4) |
| `--font-body` | `'Inter', 'Segoe UI', system-ui` | Body text, UI elements |

Both fonts are loaded from Google Fonts via `index.html`.

### Spacing & Tokens

| Token | Value |
|---|---|
| `--radius` | `14px` — default border radius |
| `--container` | `1140px` — max content width |
| `--shadow` | `0 2px 14px rgba(42, 10, 78, 0.08)` |
| `--shadow-lg` | `0 16px 44px rgba(42, 10, 78, 0.18)` |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |

### Breakpoints

| Breakpoint | Usage |
|---|---|
| `max-width: 900px` | Tablet layout adjustments |
| `max-width: 640px` | Hide navbar search (moved to drawer) |
| `max-width: 560px` | Mobile layout adjustments |

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/Home.jsx` | Hero slider, stats band, Why Choose Us, Industries filmstrip, sustainability teaser |
| `/about` | `src/pages/About.jsx` | Company overview, core values, sustainability section |
| `/products` | `src/pages/Products.jsx` | Product feature rows |
| `/products/:id` | `src/pages/ProductDetail.jsx` | Individual product with full spec table |
| `/contact` | `src/pages/Contact.jsx` | Contact form, address, phone, email |

---

## Components

| Component | File | Description |
|---|---|---|
| `Navbar` | `src/components/Navbar.jsx` | Sticky nav with search, mobile hamburger drawer |
| `Footer` | `src/components/Footer.jsx` | Brand, social links, explore links, contact & address |
| `HeroSlider` | `src/components/HeroSlider.jsx` | Full-bleed crossfading slider with ken-burns, touch swipe, progress bars |
| `IndustriesShowcase` | `src/components/IndustriesShowcase.jsx` | Horizontal scroll filmstrip with drag, auto-advance, arrow controls |
| `WhatsAppFloat` | `src/components/WhatsAppFloat.jsx` | Fixed floating WhatsApp button (bottom-right) |
| `Reveal` | `src/components/Reveal.jsx` | IntersectionObserver scroll-reveal wrapper |
| `CountUp` | `src/components/CountUp.jsx` | Animated number counter triggered on scroll into view |

---

## Product Catalog

Defined in `src/data/products.js`. Four product families:

| Grade Code | Product | Primary Applications |
|---|---|---|
| AVF-100 | Flexible PVC Granules | Wire & cable insulation, footwear, automotive interiors |
| AVR-200 | Rigid PVC Granules (uPVC) | Pipes, window profiles, electrical conduits, construction sheets |
| AVT-300 | Transparent PVC Granules | Medical tubing and devices, clear tubing, blister packaging, transparent footwear components |
| AVC-400 | Colored PVC Granules | Custom-colored wire jacketing, footwear, consumer articles |

> **Note:** Spec values in `products.js` (hardness, density, tensile strength, elongation) are typical-range placeholders. Replace them with actual grade datasheet values before treating the site as a technical reference.

---

## Industries Served

Wire & Cable · Footwear · Automotive · Construction · Medical · Industrial

---

## Content To Update Before Going Live

- [ ] Replace placeholder phone numbers (`+91 XXXXX XXXXX`) in the footer and contact page with real numbers
- [ ] Replace placeholder email (`sales@yourcompany.com`) with the actual sales email
- [ ] Add real LinkedIn, Instagram, Facebook profile URLs in `src/components/Footer.jsx`
- [ ] Verify product spec values in `src/data/products.js` against actual grade datasheets
- [ ] Replace stock imagery in `src/assets/` with real facility and product photos

---

## Repository Structure

```
hygran-polymers/
├── public/
├── src/
│   ├── assets/          # Images (hero, product, application photos)
│   ├── components/      # Shared UI components
│   ├── data/
│   │   └── products.js  # Product catalog
│   ├── pages/           # Route-level page components
│   ├── App.jsx          # Router setup, page title management
│   ├── App.css          # Component-level styles
│   ├── index.css        # Design tokens, global resets, utility classes
│   └── main.jsx         # React entry point (HashRouter)
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions — build and Pages deploy
├── index.html           # HTML shell, Google Fonts imports, meta tags
├── vite.config.js       # Vite config (base path matches GitHub repo name)
└── package.json
```
