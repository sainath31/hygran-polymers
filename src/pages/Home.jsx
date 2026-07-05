import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import heroFactory from '../assets/hero-factory.jpg'
import sustainability from '../assets/sustainability.jpg'
import appCables from '../assets/app-cables.jpg'
import appFootwear from '../assets/app-footwear.jpg'
import appAutomotive from '../assets/app-automotive.jpg'
import appConstruction from '../assets/app-construction.jpg'
import appIndustrial from '../assets/app-industrial.jpg'

const whyChooseUs = [
  {
    icon: '✅',
    title: 'Consistent Quality',
    text: 'Every batch tested against strict quality standards for uniform performance.',
  },
  {
    icon: '🧪',
    title: 'Customized Formulations',
    text: 'Compounds tailored to your hardness, color and application requirements.',
  },
  {
    icon: '💰',
    title: 'Competitive Pricing',
    text: 'Efficient manufacturing that keeps your production costs in control.',
  },
  {
    icon: '🚚',
    title: 'Fast Delivery',
    text: 'Reliable lead times and dispatch that keeps your lines running.',
  },
  {
    icon: '🛠️',
    title: 'Technical Support',
    text: 'Our polymer experts help you select and troubleshoot the right grade.',
  },
  {
    icon: '🌍',
    title: 'Export Ready',
    text: 'Packaging, documentation and logistics support for global shipments.',
  },
]

const stats = [
  { end: 100, suffix: '%', label: 'Batch Quality Testing' },
  { end: 4, suffix: '+', label: 'Product Families' },
  { end: 5, suffix: '+', label: 'Industries Served' },
  { end: 24, suffix: 'h', label: 'Quote Response Time' },
]

const applications = [
  { img: appCables, label: 'Wire & Cable' },
  { img: appFootwear, label: 'Footwear' },
  { img: appAutomotive, label: 'Automotive' },
  { img: appConstruction, label: 'Construction' },
  { img: appIndustrial, label: 'Industrial' },
]

function Home() {
  return (
    <main>
      {/* Hero banner */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroFactory})` }}
      >
        <div className="hero-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-kicker">
              Engineering Advanced PVC Compound Solutions for Tomorrow
            </span>
            <h1>
              Premium PVC Granules Manufacturer for{' '}
              <span className="accent-text">Reliable Performance</span>
            </h1>
            <p>
              Delivering high quality Flexible &amp; Rigid PVC Granules for
              Wire &amp; Cable, Footwear, Automotive, Construction and
              Industrial Applications.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Request a Quote
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Technical Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <h3>
                <CountUp end={s.end} suffix={s.suffix} />
              </h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-title">
              Why Choose Us
              <span className="title-bar" />
            </h2>
            <p className="section-subtitle">
              A trusted partner for PVC compounds — from formulation to
              delivery.
            </p>
          </Reveal>
          <div className="grid grid-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 120}>
                <div className="card">
                  <div className="card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <h2 className="section-title">
              Industries We Serve
              <span className="title-bar" />
            </h2>
            <p className="section-subtitle">
              Our granules power products across a wide range of industries.
            </p>
          </Reveal>
          <div className="grid grid-4">
            {applications.map((a, i) => (
              <Reveal key={a.label} delay={(i % 4) * 100}>
                <div className="photo-card">
                  <img src={a.img} alt={a.label} loading="lazy" />
                  <span>{a.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability teaser */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <img
              src={sustainability}
              alt="Sustainable PVC granules"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={150}>
            <div>
              <h2>Committed to Quality &amp; Sustainability</h2>
              <p>
                At AVISA ORGANISATIONS, sustainability is a core value. We
                continuously improve our processes to reduce waste and deliver
                compounds that support a responsible supply chain.
              </p>
              <p>
                Explore our product range or talk to our technical team to find
                the right PVC compound for your application.
              </p>
              <div className="hero-ctas">
                <Link to="/products" className="btn btn-solid-blue">
                  View Products
                </Link>
                <Link to="/about" className="btn btn-primary">
                  About Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default Home
