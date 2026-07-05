import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import products from '../data/products'

function Navbar() {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

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
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">A</span>
          <span className="brand-text">
            AVISA ORGANISATIONS
            <small>PVT LTD &middot; PVC GRANULES</small>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          ☰
        </button>

        <nav>
          <ul
            className={`nav-links${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>

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
                    onClick={(e) => {
                      e.preventDefault()
                      goTo(p.id)
                    }}
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
      </div>
    </header>
  )
}

export default Navbar
