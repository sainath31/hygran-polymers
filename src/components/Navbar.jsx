import { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import products from '../data/products'
import logoLight from '../assets/hygran-logo.svg'

function Navbar() {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    setProductsOpen(false)
  }

  const matches = query.trim()
    ? products.filter((p) =>
        (p.name + ' ' + p.gradeCode + ' ' + p.short)
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      )
    : []

  const goTo = (id) => {
    setQuery('')
    navigate(`/products/${id}`)
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">

        {/* Logo — always left */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logoLight} alt="Hygran Polymers" className="brand-logo" />
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <nav className="nav-desktop" aria-label="Main navigation">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <div className="nav-dropdown-wrap">
            <NavLink to="/products" className="nav-link">Products ▾</NavLink>
            <div className="nav-dropdown">
              {products.map((p) => (
                <NavLink key={p.id} to={`/products/${p.id}`} className="nav-dropdown-item">
                  {p.name}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/careers" className="nav-link">Careers</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>

          {/* Desktop search */}
          <div className="nav-search">
            <input
              type="search"
              placeholder="Search products…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search products"
            />
            {query.trim() && (
              <div className="search-results">
                {matches.length > 0 ? (
                  matches.map((p) => (
                    <a
                      key={p.id}
                      href={`/products/${p.id}`}
                      onClick={(e) => { e.preventDefault(); goTo(p.id) }}
                    >
                      {p.name} <small>({p.gradeCode})</small>
                    </a>
                  ))
                ) : (
                  <div className="no-match">No matching products</div>
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="nav-backdrop" onClick={closeMenu} aria-hidden="true" />
      )}

      <aside className={`nav-drawer${menuOpen ? ' open' : ''}`}>
        <div className="nav-drawer-head">
          <img src={logoLight} alt="Hygran Polymers" className="brand-logo" style={{ height: '36px' }} />
          <button
            type="button"
            className="nav-drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="nav-drawer-search">
          <input
            type="search"
            placeholder="Search products…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search products"
          />
          {query.trim() && (
            <div className="search-results">
              {matches.length > 0 ? (
                matches.map((p) => (
                  <a
                    key={p.id}
                    href={`/products/${p.id}`}
                    onClick={(e) => { e.preventDefault(); goTo(p.id); closeMenu() }}
                  >
                    {p.name} <small>({p.gradeCode})</small>
                  </a>
                ))
              ) : (
                <div className="no-match">No matching products</div>
              )}
            </div>
          )}
        </div>

        <ul className="nav-drawer-links" onClick={closeMenu}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li className={`nav-sub-parent${productsOpen ? ' sub-open' : ''}`}>
            <div className="nav-sub-row">
              <NavLink to="/products">Products</NavLink>
              <button
                type="button"
                className="nav-sub-toggle"
                aria-expanded={productsOpen}
                aria-label="Toggle products submenu"
                onClick={(e) => { e.stopPropagation(); setProductsOpen((o) => !o) }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
            <ul className="nav-sub">
              {products.map((p) => (
                <li key={p.id}>
                  <NavLink to={`/products/${p.id}`}>{p.name}</NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li><NavLink to="/careers">Careers</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><NavLink to="/brochure">Download Brochure</NavLink></li>
        </ul>
      </aside>
    </header>
  )
}

export default Navbar
