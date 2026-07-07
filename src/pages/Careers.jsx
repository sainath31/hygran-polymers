import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import heroFactory from '../assets/hero-factory.jpg'

function Careers() {
  return (
    <main>
      <section
        className="page-header"
        style={{ backgroundImage: `url(${heroFactory})` }}
      >
        <div className="container">
          <h1>Careers</h1>
          <p>Grow with us as we build something new.</p>
        </div>
      </section>

      <section className="section">
        <div className="container careers-wrap">
          <Reveal>
            <h2 className="section-title">Join Our Team</h2>
            <p>
              We're always looking for talented people who share our
              commitment to quality, in production, quality control, sales
              and operations.
            </p>
            <p>
              Tell us about yourself and the role you're looking for, and
              we'll be in touch when there's a fit.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Reach Out to Us
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default Careers
