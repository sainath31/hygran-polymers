import Reveal from '../components/Reveal'
import productionLine from '../assets/production-line.jpg'
import sustainability from '../assets/sustainability.jpg'

const coreValues = [
  { icon: '01', title: 'Quality', text: 'Uncompromising standards in every granule we produce.' },
  { icon: '02', title: 'Integrity', text: 'Honest, transparent relationships with customers and partners.' },
  { icon: '03', title: 'Innovation', text: 'Continuous improvement in formulations and processes.' },
  { icon: '04', title: 'Sustainability', text: 'Responsible manufacturing for a better tomorrow.' },
  { icon: '05', title: 'Customer Satisfaction', text: 'Your success is the measure of ours.' },
]

function About() {
  return (
    <main>
      <section
        className="page-header"
        style={{ backgroundImage: `url(${productionLine})` }}
      >
        <div className="container">
          <h1>About Us</h1>
          <p>Company profile of Granx Industries Pvt Ltd</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <div>
              <h2>Company Overview</h2>
              <p>
                Granx Industries Pvt Ltd is a leading manufacturer of PVC
                granules and compounds delivering customized polymer solutions
                for diverse industrial applications.
              </p>
              <p>
                With advanced manufacturing capabilities and a customer-focused
                approach, we serve the wire &amp; cable, footwear, automotive,
                construction and industrial sectors with dependable,
                high-quality compounds.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <img src={productionLine} alt="PVC granule production line" />
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-2">
            <Reveal>
              <div className="card">
                <div className="card-icon">🎯</div>
                <h3>Vision</h3>
                <p>
                  To become a globally trusted PVC compound manufacturer known
                  for quality, innovation and reliability.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="card">
                <div className="card-icon">🚀</div>
                <h3>Mission</h3>
                <p>
                  To provide superior PVC compounds through advanced
                  manufacturing, technical expertise and customer-focused
                  service.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-title">
              Core Values
            </h2>
          </Reveal>
          <div className="grid grid-3">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 120}>
                <div className="card">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <Reveal>
            <img
              src={sustainability}
              alt="Sustainable manufacturing"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={150}>
            <div>
              <h2>Sustainable by Design</h2>
              <p>
                We invest in cleaner processes and responsible material
                sourcing to reduce our environmental footprint — because
                quality compounds and a healthy planet go hand in hand.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default About
