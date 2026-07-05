import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import products from '../data/products'
import granulesColors from '../assets/granules-colors.jpg'

function Products() {
  return (
    <main>
      <section
        className="page-header"
        style={{ backgroundImage: `url(${granulesColors})` }}
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
          <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {products.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 130}>
                <div className="product-card">
                  <div className="product-img-wrap">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <div className="product-card-body">
                    <h3>{p.name}</h3>
                    <span className="grade-chip">Grade {p.gradeCode}</span>
                    <p>{p.short}</p>
                    <Link
                      to={`/products/${p.id}`}
                      className="btn btn-solid-blue"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Products
