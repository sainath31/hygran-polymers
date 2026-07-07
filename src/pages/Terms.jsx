import Reveal from '../components/Reveal'
import heroFactory from '../assets/hero-factory.jpg'

function Terms() {
  return (
    <main>
      <section
        className="page-header"
        style={{ backgroundImage: `url(${heroFactory})` }}
      >
        <div className="container">
          <h1>Terms of Use</h1>
          <p>The terms that apply when you use this website.</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-wrap">
          <Reveal>
            <p className="legal-updated">Last updated: July 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, operated by Granx
              Industries Pvt Ltd, you agree to these Terms of Use. If you do
              not agree with any part of them, please do not use the site.
            </p>

            <h2>2. Use of the Website</h2>
            <p>
              You may use this site for lawful purposes only. You agree not to
              misuse the site, attempt to gain unauthorised access to it, or
              use it in any way that could damage or impair its operation.
            </p>

            <h2>3. Product Information Disclaimer</h2>
            <p>
              Product descriptions and specification values shown on this site
              (including hardness, density, tensile strength and elongation
              ranges) are indicative and provided for general guidance only.
              Always confirm final specifications against the official grade
              datasheet provided by our team before placing an order. Nothing
              on this site constitutes a binding offer or warranty of fitness
              for a particular application.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos
              and images — belongs to Granx Industries Pvt Ltd or its
              licensors and may not be reproduced without our prior written
              permission.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              This website is provided on an "as is" basis. To the fullest
              extent permitted by law, Granx Industries Pvt Ltd is not liable
              for any loss or damage arising from your use of the site or
              reliance on information published on it.
            </p>

            <h2>6. External Links</h2>
            <p>
              Links to third-party websites and platforms are provided for
              convenience only. We do not control and are not responsible for
              their content or practices.
            </p>

            <h2>7. Changes to These Terms</h2>
            <p>
              We may update these Terms of Use from time to time. The latest
              version will always be available on this page, with the date of
              the last revision shown above.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes are
              subject to the exclusive jurisdiction of the courts of
              Hyderabad, Telangana.
            </p>

            <h2>9. Contact</h2>
            <p>
              Granx Industries Pvt Ltd
              <br />
              SY No 651, Lal Gadi Malakpet, Shamirpet, Medchal Malkajgiri,
              Hyderabad — 500078, Telangana, India
              <br />
              Phone / WhatsApp: +91 99492 75566
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default Terms
