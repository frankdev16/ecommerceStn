import { Link } from 'react-router-dom'

function formatPrice(price) {
  return `₦${price.toLocaleString('en-NG')}`
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="product-card-info">
        <div>
          <p className="product-category">{product.category}</p>
          <Link to={`/product/${product.id}`} className="product-name">
            {product.name}
          </Link>
        </div>

        <p className="product-price">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}

export default ProductCard