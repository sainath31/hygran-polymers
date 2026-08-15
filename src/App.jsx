import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import Brochure from './pages/Brochure'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import products from './data/products'
import './App.css'

export const SITE_URL = 'https://hygranpolymers.com'

const pageMeta = {
  '/': {
    title: 'PVC Granules Manufacturer India | Hygran Polymers Pvt Ltd',
    description: 'Hygran Polymers — leading PVC granules & compounds manufacturer in Hyderabad, India. Flexible PVC, Rigid uPVC, Transparent PVC, OCC granules & custom polymer compounds for wire & cable, footwear, automotive, construction and medical industries. Request a quote today.',
    keywords: 'PVC granules manufacturer India, PVC compound supplier Hyderabad, flexible PVC granules, rigid PVC granules, uPVC granules, OCC granules, polymer granules manufacturer, plastic granules Hyderabad, PVC compound manufacturer Telangana, wire cable insulation compound, footwear PVC compound, thermoplastic compound India, PVC granules price India, PVC pellets manufacturer India, PVC granules suppliers list India, virgin PVC granules, PVC raw material supplier India, PVC granules Hyderabad, PVC granules Telangana, PVC compound extrusion grade, PVC granules injection moulding, PVC granules buy online India, PVC resin compound, plastic granules manufacturer India',
  },
  '/about': {
    title: 'About Hygran Polymers | PVC Compound Manufacturer Hyderabad India',
    description: 'Hygran Polymers Pvt Ltd is a trusted PVC granules and polymer compound manufacturer based in Shamirpet, Hyderabad, Telangana. Learn about our manufacturing capabilities, quality standards, vision and mission.',
    keywords: 'Hygran Polymers, PVC manufacturer Hyderabad, polymer company Telangana, PVC granules company India, plastic compound manufacturer Hyderabad, polymer granules supplier, PVC granules factory India, PVC pellets supplier Hyderabad, PVC compound factory Telangana, polymer manufacturer Shamirpet',
  },
  '/products': {
    title: 'PVC Granules & Compounds | Flexible, Rigid, Transparent, OCC | Hygran Polymers',
    description: 'Explore our full range — Flexible PVC granules (AVF-100), Rigid uPVC granules (AVR-200), Transparent PVC (AVT-300), Coloured PVC compounds (AVC-400) and OCC granules. Custom hardness, colour and formulation available.',
    keywords: 'PVC granules types, flexible PVC granules, rigid PVC granules, uPVC granules, transparent PVC granules, coloured PVC compounds, OCC granules, PVC compound grades India, custom PVC formulation, RPVC granules, plasticized PVC, unplasticized PVC, PVC pellets types India, PVC granules catalogue, PVC raw material types, buy PVC granules India, PVC granules price list India, PVC granules wholesale India, PVC granules bulk supplier, virgin PVC pellets India, PVC compound manufacturer catalogue',
  },
  '/contact': {
    title: 'Contact Hygran Polymers | PVC Granules Supplier Hyderabad',
    description: 'Contact Hygran Polymers Pvt Ltd to request a quote or product sample. Manufacturer of PVC granules & compounds in Shamirpet, Hyderabad 500078, Telangana, India. Call or WhatsApp +91 99492 75566.',
    keywords: 'PVC granules supplier contact, polymer manufacturer Hyderabad contact, buy PVC granules India, PVC compound quote, Hygran Polymers contact',
  },
  '/brochure': {
    title: 'Download PVC Granules Product Brochure | Hygran Polymers',
    description: 'Download the Hygran Polymers product brochure with full technical specifications for all PVC granule and compound grades — flexible, rigid, transparent and coloured.',
    keywords: 'PVC granules brochure, PVC compound datasheet, polymer product catalogue India, PVC grades specifications',
  },
  '/careers': {
    title: 'Careers at Hygran Polymers | Polymer Industry Jobs Hyderabad',
    description: 'Join Hygran Polymers Pvt Ltd — a growing PVC polymer manufacturer in Hyderabad. Explore job openings in manufacturing, R&D, quality control, and sales.',
    keywords: 'polymer jobs Hyderabad, PVC manufacturer careers India, plastic industry jobs Telangana, Hygran Polymers jobs',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Hygran Polymers Pvt Ltd',
    description: 'Privacy policy for the Hygran Polymers website — how we collect, use and protect your data.',
    keywords: '',
  },
  '/terms-of-use': {
    title: 'Terms of Use | Hygran Polymers Pvt Ltd',
    description: 'Terms and conditions governing use of the Hygran Polymers Pvt Ltd website.',
    keywords: '',
  },
}

// Build per-product meta from product catalog
const productMeta = {
  'flexible-pvc-granules': {
    title: 'Flexible PVC Granules AVF-100 | Wire Cable Footwear Compound | Hygran Polymers',
    description: 'Buy Flexible PVC Granules (Grade AVF-100) from Hygran Polymers — 55–95 Shore A, ideal for wire & cable insulation, footwear soles, flexible hoses, automotive interiors. Custom colours available. Manufacturer in Hyderabad, India.',
    keywords: 'flexible PVC granules, plasticized PVC granules, PVC compound wire cable, PVC footwear compound, soft PVC granules India, flexible PVC manufacturer Hyderabad, wire insulation compound, cable sheathing compound, footwear sole PVC, Shore A PVC granules, AVF-100, PVC sole compound, PVC chappal compound, PVC slipper compound, PVC footwear pellets, PVC cable insulation pellets, PVC sheathing compound, PVC jacketing compound, PVC garden hose compound, PVC flexible tubing compound, PVC granules for extrusion, PVC soft compound India, flexible PVC pellets supplier, PVC wire covering compound',
  },
  'rigid-pvc-granules': {
    title: 'Rigid PVC Granules uPVC AVR-200 | Pipes Profiles Window | Hygran Polymers',
    description: 'Rigid uPVC Granules (Grade AVR-200) — 78–85 Shore D, engineered for PVC pipes, window profiles, door frames, electrical conduits and construction sheets. High stiffness and impact strength. Supplier in Hyderabad, India.',
    keywords: 'rigid PVC granules, uPVC granules, unplasticized PVC, RPVC granules, PVC pipe compound, window profile PVC, door frame PVC compound, electrical conduit PVC, construction PVC granules, uPVC manufacturer India, rigid PVC supplier Hyderabad, AVR-200, uPVC pipe granules, PVC pipe fitting compound, uPVC profile granules, PVC window frame granules, PVC conduit compound, uPVC pellets India, PVC rigid compound extrusion, rigid PVC pellets supplier, PVC pipe raw material India, uPVC granules price India, RPVC pellets India, PVC granules for injection moulding, uPVC granules Hyderabad',
  },
  'transparent-pvc-granules': {
    title: 'Transparent PVC Granules AVT-300 | Medical Clear PVC | Hygran Polymers',
    description: 'Crystal-clear Transparent PVC Granules (Grade AVT-300) — water-clear optical clarity for medical tubing, IV sets, blister packaging, clear hoses and transparent footwear. Medical-grade PVC compound supplier in India.',
    keywords: 'transparent PVC granules, clear PVC granules, medical grade PVC, PVC medical tubing compound, crystal clear PVC, IV tubing PVC compound, blister packaging PVC, optical clarity PVC granules, transparent PVC supplier India, AVT-300, PVC medical tubing pellets, IV tube PVC compound, clear PVC pellets India, food grade PVC granules, transparent PVC for packaging, clear PVC hose compound, PVC granules for medical devices, water clear PVC compound, transparent flexible PVC pellets, PVC optically clear compound',
  },
  'colored-pvc-granules': {
    title: 'Coloured PVC Granules AVC-400 | Custom Color Matching | Hygran Polymers',
    description: 'Pre-coloured PVC Granules (Grade AVC-400) — Pantone / RAL / sample matched colours for wire jacketing, footwear, consumer goods and OEM parts. OCC granules and custom polymer compound formulations available from Hyderabad, India.',
    keywords: 'coloured PVC granules, colored PVC compound, custom color PVC granules, OCC granules, pre-colored PVC, Pantone matched PVC, RAL color PVC granules, wire jacketing compound, PVC color matching India, OEM PVC compound, AVC-400, coloured PVC pellets, custom colour PVC granules, masterbatch PVC compound, pre-coloured polymer granules, PVC granules custom color India, OCC polymer granules, coloured plastic granules supplier, PVC colour compound manufacturer, coloured uPVC granules, coloured flexible PVC pellets',
  },
}

function setMeta(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setOg(property, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function injectProductSchema(product) {
  const id = 'ld-product'
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.short,
    brand: { '@type': 'Brand', name: 'Hygran Polymers' },
    manufacturer: {
      '@type': 'Organization',
      name: 'Hygran Polymers Pvt Ltd',
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: { '@type': 'Organization', name: 'Hygran Polymers Pvt Ltd' },
    },
  })
}

function removeProductSchema() {
  const el = document.getElementById('ld-product')
  if (el) el.remove()
}

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    // Handle product detail pages
    const productMatch = pathname.match(/^\/products\/(.+)$/)
    if (productMatch) {
      const productId = productMatch[1]
      const product = products.find((p) => p.id === productId)
      const pm = productMeta[productId]
      const title = pm?.title ?? `${product?.name ?? 'Product'} | Hygran Polymers Pvt Ltd`
      const description = pm?.description ?? product?.short ?? ''
      const keywords = pm?.keywords ?? ''

      document.title = title
      setMeta('description', description)
      setMeta('keywords', keywords)
      setMeta('robots', 'index, follow')
      const url = `${SITE_URL}${pathname}`
      setCanonical(url)
      setOg('og:title', title)
      setOg('og:description', description)
      setOg('og:url', url)
      setOg('og:type', 'website')
      setOg('og:site_name', 'Hygran Polymers')
      setOg('og:image', `${SITE_URL}/og-image.jpg`)
      setMeta('twitter:card', 'summary_large_image')
      setMeta('twitter:title', title)
      setMeta('twitter:description', description)
      setMeta('twitter:image', `${SITE_URL}/og-image.jpg`)
      if (product) injectProductSchema(product)
      return
    }

    removeProductSchema()

    const meta = pageMeta[pathname] ?? {
      title: 'Hygran Polymers Pvt Ltd | PVC Granules & Compounds India',
      description: 'Hygran Polymers — PVC granules and compound manufacturer in Hyderabad, India.',
      keywords: 'PVC granules India, polymer manufacturer Hyderabad',
    }

    document.title = meta.title
    setMeta('description', meta.description)
    setMeta('keywords', meta.keywords)
    setMeta('robots', 'index, follow')

    const url = `${SITE_URL}${pathname}`
    setCanonical(url)
    setOg('og:title', meta.title)
    setOg('og:description', meta.description)
    setOg('og:url', url)
    setOg('og:type', 'website')
    setOg('og:site_name', 'Hygran Polymers')
    setOg('og:image', `${SITE_URL}/og-image.jpg`)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)
    setMeta('twitter:image', `${SITE_URL}/og-image.jpg`)
  }, [pathname])

  return (
    <div className="app-shell">
      <Navbar />
      <div key={pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-of-use" element={<Terms />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
