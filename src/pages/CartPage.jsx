import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartPage() {
  const {
    cartItems,
    cartTotal,
    removeFromCart,
    updateQuantity,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <section className="empty-state">
        <p className="eyebrow">YOUR SHOPPING BAG</p>
        <h1>Your bag is currently empty.</h1>
        <p>Discover something special from our collection.</p>

        <Link to="/shop" className="button button-dark">
          Continue Shopping
        </Link>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <div className="page-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping Bag</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={`${item.id}-${item.size}`}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>
                <p>₦{item.price.toLocaleString('en-NG')}</p>

                <div className="quantity-control">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.size, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.size, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-item"
                  onClick={() => removeFromCart(item.id, item.size)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₦{cartTotal.toLocaleString('en-NG')}</strong>
          </div>

          <p>Shipping will be calculated at checkout.</p>

          <button className="button button-dark checkout-button" disabled>
            Checkout Coming Soon
          </button>
        </aside>
      </div>
    </section>
  )
}

export default CartPage