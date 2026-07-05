import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import products from '../data/products'

function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <main className="section">
        <div className="container">
          <h1>Product not found</h1>
          <p>
            The product you are looking for does not exist.{' '}
            <Link to="/products">Browse all products</Link>
          </p>
        </div>
      </main>
    )
  }

  const handleDatasheet = () => {
    // Placeholder until real datasheets (PDF) are available
    alert(
      `Technical datasheet for ${product.name} (${product.gradeCode}) will be available soon. Please contact our team for specifications.`
    )
  }

  return (
    <main>
      <section
        className="page-header"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="container">
          <h1>{product.name}</h1>
          <p>Grade Code: {product.gradeCode}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
          <div>
            <h2>Product Overview</h2>
            <p style={{ color: 'var(--color-muted)' }}>{product.short}</p>

            <h3 style={{ marginTop: '1.5rem' }}>Applications</h3>
            <ul className="app-list">
              {product.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>

            <div className="detail-actions">
              <button
                type="button"
                className="btn btn-solid-blue"
                onClick={handleDatasheet}
              >
                Download Technical Datasheet
              </button>
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="btn btn-primary"
              >
                Send Inquiry
              </Link>
            </div>
          </div>
          </Reveal>

          <Reveal delay={150}>
          <div>
            <img src={product.image} alt={product.name} />
            <table className="spec-table">
              <tbody>
                <tr>
                  <th>Grade Code</th>
                  <td>{product.gradeCode}</td>
                </tr>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
