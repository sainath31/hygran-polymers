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
            <h2 className="section-title">We're Just Getting Started</h2>
            <p>
              Granx Industries is a young company building its founding team.
              We don't have formal openings posted yet, but we're always keen
              to hear from people who are passionate about polymers,
              manufacturing and quality.
            </p>
            <p>
              If that sounds like you, we'd love to know more about you and
              what you'd bring to the team.
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
