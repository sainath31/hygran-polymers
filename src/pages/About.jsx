import productionLine from '../assets/production-line.jpg'
import sustainability from '../assets/sustainability.jpg'

const coreValues = [
  { icon: '🏅', title: 'Quality', text: 'Uncompromising standards in every granule we produce.' },
  { icon: '🤝', title: 'Integrity', text: 'Honest, transparent relationships with customers and partners.' },
  { icon: '💡', title: 'Innovation', text: 'Continuous improvement in formulations and processes.' },
  { icon: '🌱', title: 'Sustainability', text: 'Responsible manufacturing for a better tomorrow.' },
  { icon: '😊', title: 'Customer Satisfaction', text: 'Your success is the measure of ours.' },
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
          <p>Company profile of AVISA ORGANISATIONS PVT LTD</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Company Overview</h2>
            <p>
              AVISA ORGANISATIONS PVT LTD is a leading manufacturer of PVC
              granules and compounds delivering customized polymer solutions
              for diverse industrial applications.
            </p>
            <p>
              With advanced manufacturing capabilities and a customer-focused
              approach, we serve the wire &amp; cable, footwear, automotive,
              construction and industrial sectors with dependable, high-quality
              compounds.
            </p>
          </div>
          <img src={productionLine} alt="PVC granule production line" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="card">
              <div className="card-icon">🎯</div>
              <h3>Vision</h3>
              <p>
                To become a globally trusted PVC compound manufacturer known
                for quality, innovation and reliability.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🚀</div>
              <h3>Mission</h3>
              <p>
                To provide superior PVC compounds through advanced
                manufacturing, technical expertise and customer-focused
                service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do.</p>
          <div className="grid grid-3">
            {coreValues.map((v) => (
              <div className="card" key={v.title}>
                <div className="card-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <img src={sustainability} alt="Sustainable manufacturing" loading="lazy" />
          <div>
            <h2>Sustainable by Design</h2>
            <p>
              We invest in cleaner processes and responsible material sourcing
              to reduce our environmental footprint — because quality compounds
              and a healthy planet go hand in hand.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
