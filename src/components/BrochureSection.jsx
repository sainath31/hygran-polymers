import { useState } from 'react'

const initialForm = { name: '', email: '', phone: '' }
const initialErrors = {}

function BrochureSection() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value })

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) {
      errs.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      errs.email = 'Enter a valid email address'
    }
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required'
    } else if (!/^[+\d][\d\s-]{7,14}$/.test(form.phone.trim())) {
      errs.phone = 'Enter a valid phone number'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <section className="brochure-band" id="brochure">
      <div className="container brochure-grid">
        <div className="brochure-copy">
          <p className="brochure-eyebrow">Product Brochure</p>
          <h2>Get Our Complete Product Guide</h2>
          <p>
            Download our full brochure covering all PVC grade families, technical
            specifications, application data and ordering information. Fill in
            your details and we'll send it straight to you.
          </p>
          <p className="brochure-alt">
            Prefer to talk? Call us at{' '}
            <a href="tel:+919949275566">+91 99492 75566</a>
          </p>
        </div>

        <div className="brochure-form-wrap">
          {submitted ? (
            <div className="form-success brochure-success" role="status">
              Thank you! Our team will send the brochure to your email shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="brochure-form">
              <div className="form-field">
                <label htmlFor="br-name">Your Name *</label>
                <input
                  id="br-name"
                  type="text"
                  placeholder="E.g. Ravi Kumar"
                  value={form.name}
                  onChange={update('name')}
                />
                {errors.name && <div className="field-error">{errors.name}</div>}
              </div>

              <div className="form-field">
                <label htmlFor="br-email">Email Address *</label>
                <input
                  id="br-email"
                  type="email"
                  placeholder="E.g. ravi@company.com"
                  value={form.email}
                  onChange={update('email')}
                />
                {errors.email && <div className="field-error">{errors.email}</div>}
              </div>

              <div className="form-field">
                <label htmlFor="br-phone">Phone Number *</label>
                <input
                  id="br-phone"
                  type="tel"
                  placeholder="E.g. +91 98765 43210"
                  value={form.phone}
                  onChange={update('phone')}
                />
                {errors.phone && <div className="field-error">{errors.phone}</div>}
              </div>

              <button type="submit" className="btn btn-primary brochure-btn">
                Request Brochure
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default BrochureSection
