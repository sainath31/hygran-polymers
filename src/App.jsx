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
import './App.css'

const SITE_URL = 'https://hygranpolymers.com'

const pageMeta = {
  '/': {
    title: 'Hygran Polymers Pvt Ltd | Premium PVC Granules Manufacturer',
    description: 'Hygran Polymers Pvt Ltd — leading manufacturer of PVC granules and compounds in Hyderabad, India. Flexible, rigid, transparent and coloured PVC for wire & cable, footwear, automotive, construction and medical applications.',
  },
  '/about': {
    title: 'About Us | Hygran Polymers Pvt Ltd',
    description: 'Learn about Hygran Polymers Pvt Ltd, a trusted PVC compound manufacturer based in Hyderabad, Telangana. Our vision, mission, and core values.',
  },
  '/products': {
    title: 'Our Products | Hygran Polymers Pvt Ltd',
    description: 'Explore our full range of PVC compounds — Flexible PVC, Rigid uPVC, Transparent PVC, and Coloured PVC granules — engineered for demanding industrial applications.',
  },
  '/contact': {
    title: 'Contact Us | Hygran Polymers Pvt Ltd',
    description: 'Get in touch with Hygran Polymers Pvt Ltd. Request a quote, ask a technical question, or visit our manufacturing unit in Shamirpet, Hyderabad.',
  },
  '/brochure': {
    title: 'Request Brochure | Hygran Polymers Pvt Ltd',
    description: 'Download or request the Hygran Polymers product brochure for detailed specifications on our PVC granule and compound range.',
  },
  '/careers': {
    title: 'Careers | Hygran Polymers Pvt Ltd',
    description: 'Join the Hygran Polymers team. Explore career opportunities in polymer manufacturing, R&D, sales and operations in Hyderabad, India.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Hygran Polymers Pvt Ltd',
    description: 'Read the Hygran Polymers privacy policy to understand how we collect, use and protect your personal information.',
  },
  '/terms-of-use': {
    title: 'Terms of Use | Hygran Polymers Pvt Ltd',
    description: 'Terms and conditions governing use of the Hygran Polymers website.',
  },
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setOg(property, content) {
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

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    const meta = pageMeta[pathname] || {
      title: 'Hygran Polymers Pvt Ltd | PVC Granules',
      description: 'Hygran Polymers Pvt Ltd — PVC granules and compound manufacturer, Hyderabad, India.',
    }

    document.title = meta.title
    setMeta('description', meta.description)

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
