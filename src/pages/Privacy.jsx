import Reveal from '../components/Reveal'
import heroFactory from '../assets/hero-factory.jpg'

function Privacy() {
  return (
    <main>
      <section
        className="page-header"
        style={{
          backgroundImage: `url(${heroFactory})`,
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>How we handle the information you share with us.</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-wrap">
          <Reveal>
            <p className="legal-updated">Last updated: July 2026</p>

            <h2>1. Introduction</h2>
            <p>
              Hygran Polymers Pvt Ltd ("we", "us", "our") operates this
              website from Hyderabad, Telangana, India. This policy explains
              what information we collect through the site, why we collect it,
              and how we handle it.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect information only when you choose to share it with us:</p>
            <ul>
              <li>
                <strong>Brochure request form:</strong> your name, email
                address, phone number and an optional message.
              </li>
              <li>
                <strong>Contact / quote form:</strong> your name, company name,
                email address, phone number, product requirement, quantity and
                message.
              </li>
            </ul>
            <p>
              We do not collect any personal information automatically, and we
              do not use tracking cookies or analytics that identify you.
            </p>

            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To send you our product brochure when you request it</li>
              <li>To respond to your enquiries and prepare quotations</li>
              <li>To follow up on business discussions you initiate with us</li>
            </ul>
            <p>
              We will not send you marketing communications unless you have
              asked for them.
            </p>

            <h2>4. Sharing of Information</h2>
            <p>
              We never sell your personal information. It is shared only with
              service providers we use to operate the website and deliver
              emails (for example, an email delivery service used to send the
              brochure), and only to the extent needed for that purpose.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We keep the information you submit only as long as needed to
              handle your enquiry and any resulting business relationship,
              after which it is deleted.
            </p>

            <h2>6. Cookies</h2>
            <p>
              This website does not use tracking or advertising cookies.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              The site contains links to third-party platforms such as
              WhatsApp and social media networks. Those platforms have their
              own privacy policies, and we are not responsible for their
              practices.
            </p>

            <h2>8. Your Rights</h2>
            <p>
              You can ask us at any time to show you the personal information
              we hold about you, correct it, or delete it. Contact us using
              the details below and we will act on your request promptly.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              Hygran Polymers Pvt Ltd
              <br />
              SY No 651, Lal Gadi Malakpet, Shamirpet, Medchal Malkajgiri,
              Hyderabad 500078, Telangana, India
              <br />
              Phone / WhatsApp: +91 99492 75566
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default Privacy
