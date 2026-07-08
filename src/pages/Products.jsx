import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import products from '../data/products'
import granulesColors from '../assets/granules-colors.jpg'

// Key specs surfaced as chips on each feature row
const chipKeys = ['Hardness Range', 'Density', 'Tensile Strength']

function Products() {
  return (
    <main>
      <section
        className="page-header"
        style={{
          backgroundImage: `url(${granulesColors})`,
          backgroundPosition: 'center 62%',
        }}
      >
        <div className="container">
          <h1>Our Products</h1>
          <p>
            High quality Flexible, Rigid, Transparent and Colored PVC granules
            for every application.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {products.map((p, i) => (
            <Reveal key={p.id}>
              <article
                className={`product-feature${i % 2 === 1 ? ' reverse' : ''}`}
              >
                <div className="feature-media">
                  <span className="feature-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="feature-body">
                  <h2>{p.name}</h2>
                  <span className="grade-chip">Grade {p.gradeCode}</span>
                  <p>{p.short}</p>
                  <div className="spec-chips">
                    {chipKeys.map((key) => (
                      <span className="spec-chip" key={key}>
                        {key}: <strong>{p.specs[key]}</strong>
                      </span>
                    ))}
                  </div>
                  <div className="feature-ctas">
                    <Link
                      to={`/products/${p.id}`}
                      className="btn btn-solid-blue"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/contact?product=${encodeURIComponent(p.name)}`}
                      className="btn btn-primary"
                    >
                      Send Inquiry
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Products
