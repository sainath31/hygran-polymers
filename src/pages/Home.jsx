import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import IndustriesShowcase from '../components/IndustriesShowcase'
import HeroSlider from '../components/HeroSlider'
import heroFactory from '../assets/hero-factory.jpg'
import granulesColors from '../assets/granules-colors.jpg'
import productionLine from '../assets/production-line.jpg'
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

const heroSlides = [
  {
    img: heroFactory,
    kicker: 'Engineering Advanced PVC Compound Solutions for Tomorrow',
    titleHead: 'Premium PVC Granules Manufacturer for',
    titleAccent: 'Reliable Performance',
    text: 'Delivering high quality Flexible & Rigid PVC Granules for Wire & Cable, Footwear, Automotive, Construction and Industrial Applications.',
  },
  {
    img: granulesColors,
    kicker: 'Purity That Performs',
    titleHead: '100% Quality-Tested',
    titleAccent: 'Virgin PVC Compound Granules',
    text: 'Produced from virgin resins and tested batch after batch, so your production lines run with consistent, predictable results.',
  },
  {
    img: productionLine,
    kicker: 'Made to Your Specification',
    titleHead: 'Custom Colors & Formulations for',
    titleAccent: 'Every Application',
    text: 'Flexible and rigid grades tailored to your hardness, shade and performance targets — from sample matching to full-scale supply.',
  },
]

const applications = [
  {
    img: appCables,
    label: 'Wire & Cable',
    text: 'Insulation and sheathing compounds engineered for electrical safety and long service life.',
  },
  {
    img: appFootwear,
    label: 'Footwear',
    text: 'Flexible, abrasion-resistant grades that give soles and straps lasting comfort.',
  },
  {
    img: appAutomotive,
    label: 'Automotive',
    text: 'Interior trims and components with consistent finish, feel and durability.',
  },
  {
    img: appConstruction,
    label: 'Construction',
    text: 'Rigid compounds for pipes, profiles and panels that stand the test of time.',
  },
  {
    img: appIndustrial,
    label: 'Industrial',
    text: 'Custom formulations for demanding engineering and manufacturing applications.',
  },
]

function Home() {
  return (
    <main>
      {/* Hero slider */}
      <HeroSlider slides={heroSlides} />

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
      <section className="section section-dark">
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
          <Reveal delay={100}>
            <IndustriesShowcase items={applications} />
          </Reveal>
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
                At Granx Industries, sustainability is a core value. We
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
