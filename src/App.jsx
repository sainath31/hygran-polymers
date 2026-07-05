import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import './App.css'

const titles = {
  '/': 'AVISA ORGANISATIONS PVT LTD — Premium PVC Granules Manufacturer',
  '/about': 'About Us — AVISA ORGANISATIONS PVT LTD',
  '/products': 'Our Products — AVISA ORGANISATIONS PVT LTD',
  '/contact': 'Contact Us — AVISA ORGANISATIONS PVT LTD',
}

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title =
      titles[pathname] || 'AVISA ORGANISATIONS PVT LTD — PVC Granules'
  }, [pathname])

  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
