# Granx Industries Pvt Ltd — Company Website

Official website for **Granx Industries Pvt Ltd**, a PVC granules and compounds manufacturer based in Hyderabad, India. Built as a React SPA and deployed on GitHub Pages.

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

**Live URL:** `https://sainath31.github.io/granx-industries/`

> The `base` path in `vite.config.js` (`/granx-industries/`) must match the GitHub repository name. If the repository is ever renamed, update `base` to the new name or the deployed site's assets will 404.

---

## Brand Identity

| | |
|---|---|
| **Company** | Granx Industries Pvt Ltd |
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
The brand palette follows FedEx-style **purple + orange**: purple carries the structure (nav, dark bands, headings, primary buttons), orange is the energetic accent (eyebrows, highlights, hover, hero accent word, progress bars).

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#4D148C` | FedEx purple — main brand color, buttons, links |
| `--color-primary-dark` | `#3A0F6B` | Darker purple — headings, hover states |
| `--color-primary-deeper` | `#2A0A4E` | Deepest purple — hero overlays, dark bands |
| `--color-primary-light` | `#6B29B5` | Lighter purple — gradients |
| `--color-accent` | `#FF6600` | FedEx orange — accent text, shimmer, progress bars |
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
| `Navbar` | `src/components/Navbar.jsx` | Sticky glassmorphism nav with search, mobile hamburger |
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

## Key Design Decisions

### Premium-first visual language
The design draws from Tesla's web principles applied to a B2B manufacturing context — restraint over decoration, confident type scale, photography doing the heavy lifting.

- **Hero typography** at `clamp(2.6rem, 5.8vw, 4.8rem)` with `-0.03em` letter-spacing — deliberately large and sparse
- **Section headings** stand alone with no underline decorators or subtitle paragraphs
- **Stats band** uses oversized numbers with uppercase micro-labels — the number is the headline
- **Feature cards** (Why Choose Us, Core Values) show title and text only, no icons

### Hero slider
Three slides, 6.4 s autoplay, ken-burns zoom on the active background image, crossfade transition between slides. Pauses on hover and touch. Progress bars at the bottom indicate slide timing.

**CTAs:** Two ghost buttons per slide — "Request a Quote" (slightly filled white) and "Contact our team" (outlined white). No purple gradient on imagery. On mobile (`≤560px`) both buttons scale to tighter padding and `white-space: nowrap` to stay on one line.

### Color on dark backgrounds
Hero and dark section overlays use `rgba(42,10,78,…)` — derived from `--color-primary-deeper` — so the brand purple saturates the imagery rather than a generic black. The accent orange (`#FF6600`) appears in progress bars and the shimmer animation on the headline accent word.

### Navigation
Sticky with `backdrop-filter: blur(14px)`. Becomes more opaque on scroll. All navigation lives in a slide-in drawer opened from the hamburger, with the Products entry expanding to the four product families. Active links highlight in orange. Brand mark is a 40×40 purple rounded tile with the letter "G".

### WhatsApp integration
Floating button links to `https://wa.me/919949275566` with a pre-filled enquiry message. The footer social icon links to the same number and opens in a new tab.

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
granx-industries/
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
