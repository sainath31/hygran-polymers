import { Link } from 'react-router-dom'

// Social profiles — update hrefs when the company pages are created
const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919949275566',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.48 15.06L2 22l5.08-1.52A9.9 9.9 0 1 0 12.04 2zm5.83 14.13c-.24.68-1.4 1.3-1.94 1.35-.52.05-1.17.24-3.94-.82-3.32-1.31-5.42-4.7-5.58-4.92-.16-.22-1.33-1.77-1.33-3.38 0-1.6.84-2.39 1.14-2.72.3-.33.65-.41.87-.41l.62.01c.2.01.47-.08.73.56.27.65.92 2.25 1 2.41.08.16.14.36.03.58-.11.22-.17.35-.33.54-.16.19-.35.43-.5.58-.16.16-.33.34-.14.66.19.33.85 1.4 1.83 2.27 1.26 1.12 2.32 1.47 2.65 1.63.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.43-.27.73-.16.3.11 1.9.9 2.23 1.06.33.16.54.24.62.38.08.14.08.79-.16 1.47z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.87 5.87 0 0 0-2.13 1.38A5.87 5.87 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.38 2.13a5.87 5.87 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.38 5.87 5.87 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.38-2.13A5.87 5.87 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.15a4 4 0 1 1 0-7.98 4 4 0 0 1 0 7.98zM19.85 5.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
      </svg>
    ),
  },
]

const explore = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Download Brochure', to: '/brochure' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-accent" aria-hidden="true" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-mark">G</span>
              <span>
                Granx Industries
                <small>Formulated for Excellence.</small>
              </span>
            </div>
            <p>
              Leading manufacturer of PVC granules and compounds, delivering
              customized polymer solutions for wire &amp; cable, footwear,
              automotive, construction, medical and industrial applications.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <ul className="footer-explore">
              {explore.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <span className="fc-label">Mobile</span>
                <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
              </li>
              <li>
                <span className="fc-label">Office</span>
                <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
              </li>
              <li>
                <span className="fc-label">Email</span>
                <a href="mailto:sales@yourcompany.com">
                  sales@yourcompany.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Meet Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="fc-label">Manufacturing Unit</span>
                <span>SY No 651, Lal Gadi Malakpet, Shamirpet, Medchal Malkajgiri, Hyderabad — 500078, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <button
            type="button"
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            ↑ Top
          </button>
          <span>
            © {new Date().getFullYear()} Granx Industries Pvt Ltd. All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
