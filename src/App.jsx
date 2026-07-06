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
  '/': 'Granx Industries Pvt Ltd — Premium PVC Granules Manufacturer',
  '/about': 'About Us — Granx Industries Pvt Ltd',
  '/products': 'Our Products — Granx Industries Pvt Ltd',
  '/contact': 'Contact Us — Granx Industries Pvt Ltd',
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
