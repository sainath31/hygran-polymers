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
import './App.css'

const titles = {
  '/': 'Granx Industries Pvt Ltd — Premium PVC Granules Manufacturer',
  '/about': 'About Us — Granx Industries Pvt Ltd',
  '/products': 'Our Products — Granx Industries Pvt Ltd',
  '/contact': 'Contact Us — Granx Industries Pvt Ltd',
  '/brochure': 'Request Brochure — Granx Industries Pvt Ltd',
}

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title =
      titles[pathname] || 'Granx Industries Pvt Ltd — PVC Granules'
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
        </Routes>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
