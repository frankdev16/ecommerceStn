import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

function Header() {
  const { cartCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  function toggleMenu() {
    setMenuOpen((previousState) => !previousState)
  }

  return (
    <header className="site-header">
      <div className="header-inner">

        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <Link to="/" className="brand-logo" onClick={closeMenu}>
          MAISON <span>ÉLAN</span>
        </Link>

        <nav
          id="main-navigation"
          className={`main-navigation ${menuOpen ? 'menu-open' : ''}`}
        >
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/shop" onClick={closeMenu}>
            Shop
          </NavLink>

          <Link to="/#collections" onClick={closeMenu}>
            Collections
          </Link>
        </nav>

        <div className="header-actions">
          <Link to="/shop" aria-label="Search products">
            Search
          </Link>

          <Link to="/cart" className="cart-link" onClick={closeMenu}>
            Bag ({cartCount})
          </Link>
        </div>

      </div>
    </header>
  )
}

export default Header