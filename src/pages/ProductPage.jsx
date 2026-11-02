import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'

function ProductPage() {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState('')

  if (!product) {
    return (
      <div className="empty-state">
        <h1>Product not found</h1>
        <Link to="/shop" className="button button-dark">
          Return to Shop
        </Link>
      </div>
    )
  }

  return (
    <section className="product-page">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail-info">
        <p className="eyebrow">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="detail-price">
          ₦{product.price.toLocaleString('en-NG')}
        </p>

        <p className="product-description">{product.description}</p>

        <h3>Select Size</h3>

        <div className="size-options">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={selectedSize === size ? 'size-button selected' : 'size-button'}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          className="button button-dark add-to-cart-button"
          onClick={() => addToCart(product, selectedSize)}
          disabled={!selectedSize}
        >
          Add to Bag
        </button>

        <p className="product-note">
          Select your preferred size before adding this item to your bag.
        </p>
      </div>
    </section>
  )
}

export default ProductPage