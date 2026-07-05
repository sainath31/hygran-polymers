import { Link } from 'react-router-dom'
import products from '../data/products'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>AVISA ORGANISATIONS PVT LTD</h4>
            <p>
              Leading manufacturer of PVC granules and compounds, delivering
              customized polymer solutions for wire &amp; cable, footwear,
              automotive, construction and industrial applications.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              {products.map((p) => (
                <li key={p.id}>
                  <Link to={`/products/${p.id}`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} AVISA ORGANISATIONS PVT LTD. All rights
          reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
