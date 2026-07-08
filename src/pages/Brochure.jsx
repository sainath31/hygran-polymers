import { useState } from 'react'
import Reveal from '../components/Reveal'
import granulesBlack from '../assets/granules-black.jpg'

const initialForm = { name: '', email: '', phone: '', message: '' }

function Brochure() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 700))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <main>
      <section
        className="page-header"
        style={{ backgroundImage: `url(${granulesBlack})` }}
      >
        <div className="container">
          <h1>Request Brochure</h1>
          <p>Get our complete product guide delivered to your inbox.</p>
        </div>
      </section>

      <section className="section">
        <div className="container brochure-page-wrap">
          <Reveal>
            <div className="brochure-info-banner">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p>
                Make sure to enter the correct email address. We'll send the
                brochure directly to your inbox. Your details are only used to
                deliver the brochure.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="brochure-divider" />
          </Reveal>

          <Reveal delay={120}>
            <div className="brochure-call-alt">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.25 1.01l-2.2 2.22z" />
              </svg>
              <p>
                Prefer not to fill in the details?{' '}
                <strong>Call us directly:</strong>{' '}
                <a href="tel:+919949275566">+91 99492 75566</a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="brochure-divider" />
          </Reveal>

          <Reveal delay={200}>
            <div className="form-card brochure-form-card">
              {submitted ? (
                <div className="form-success" role="status">
                  Thank you, {form.name.split(' ')[0]}! Our team will send the
                  brochure to <strong>{form.email}</strong> shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="br-name">Your Name *</label>
                      <input
                        id="br-name"
                        type="text"
                        placeholder="E.g. Ravi Kumar"
                        value={form.name}
                        onChange={update('name')}
                      />
                      {errors.name && (
                        <div className="field-error">{errors.name}</div>
                      )}
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
                      {errors.email && (
                        <div className="field-error">{errors.email}</div>
                      )}
                    </div>
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
                    {errors.phone && (
                      <div className="field-error">{errors.phone}</div>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="br-message">Message</label>
                    <textarea
                      id="br-message"
                      rows="3"
                      placeholder="Any specific product or grade you're interested in…"
                      value={form.message}
                      onChange={update('message')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="btn-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      'Request Brochure'
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default Brochure
