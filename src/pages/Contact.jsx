import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import products from '../data/products'
import heroFactory from '../assets/hero-factory.jpg'

const initialErrors = {}

function Contact() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    mobile: '',
    email: '',
    product: searchParams.get('product') || '',
    quantity: '',
    message: '',
  })
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
  }

  const validate = () => {
    const errs = {}
    if (!form.fullName.trim()) errs.fullName = 'Full name is required'
    if (!form.mobile.trim()) {
      errs.mobile = 'Mobile number is required'
    } else if (!/^[+\d][\d\s-]{7,14}$/.test(form.mobile.trim())) {
      errs.mobile = 'Enter a valid mobile number'
    }
    if (!form.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      errs.email = 'Enter a valid email address'
    }
    if (!form.product) errs.product = 'Select a product requirement'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      // No backend yet — mark as submitted so the user gets feedback.
      setSubmitted(true)
    }
  }

  return (
    <main>
      <section
        className="page-header"
        style={{ backgroundImage: `url(${heroFactory})` }}
      >
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Send us your requirement and our team will get back to you with a
            quote.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
          <div className="form-card">
            <h2 style={{ marginBottom: '1.2rem' }}>Inquiry Form</h2>

            {submitted && (
              <div className="form-success" role="status">
                ✅ Thank you! Your inquiry has been recorded. Our team will
                contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={update('fullName')}
                  />
                  {errors.fullName && (
                    <div className="field-error">{errors.fullName}</div>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    id="companyName"
                    type="text"
                    value={form.companyName}
                    onChange={update('companyName')}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="mobile">Mobile Number *</label>
                  <input
                    id="mobile"
                    type="tel"
                    value={form.mobile}
                    onChange={update('mobile')}
                  />
                  {errors.mobile && (
                    <div className="field-error">{errors.mobile}</div>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                  />
                  {errors.email && (
                    <div className="field-error">{errors.email}</div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="product">Product Requirement *</label>
                  <select
                    id="product"
                    value={form.product}
                    onChange={update('product')}
                  >
                    <option value="">Select a product…</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Other / Custom">Other / Custom</option>
                  </select>
                  {errors.product && (
                    <div className="field-error">{errors.product}</div>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="quantity">Quantity Required</label>
                  <input
                    id="quantity"
                    type="text"
                    placeholder="e.g. 5 MT / month"
                    value={form.quantity}
                    onChange={update('quantity')}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={form.message}
                  onChange={update('message')}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Request a Quote
              </button>
            </form>
          </div>
          </Reveal>

          <Reveal delay={150}>
          <div className="info-card">
            <h3>Company Information</h3>
            <p>
              <strong>Company Name</strong>
              Granx Industries Pvt Ltd
            </p>
            <p>
              <strong>Registered Address</strong>
              [Registered address to be updated]
            </p>
            <p>
              <strong>Manufacturing Unit</strong>
              [Manufacturing unit address to be updated]
            </p>
            <p>
              <strong>📞 Mobile</strong>
              +91 XXXXX XXXXX
            </p>
            <p>
              <strong>☎ Office</strong>
              +91 XXXXX XXXXX
            </p>
            <p>
              <strong>📧 Email</strong>
              sales@yourcompany.com
            </p>
          </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default Contact
