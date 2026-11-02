import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand-logo">
            MAISON <span>ÉLAN</span>
          </Link>

          <p>
            Contemporary African fashion, thoughtfully designed for
            those who appreciate timeless style.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/shop">Shop All</Link>
          <Link to="/shop">New Arrivals</Link>
          <Link to="/shop">Collections</Link>
        </div>

        <div className="footer-column">
          <h3>Information</h3>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#shipping">Shipping & Returns</a>
        </div>

        <div className="footer-column">
          <h3>Connect</h3>
          <a href="#instagram">Instagram</a>
          <a href="#facebook">Facebook</a>
          <a href="mailto:hello@maisonelan.com">Email Us</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MAISON ÉLAN. All rights reserved.</p>
        <p>Designed with intention.</p>
      </div>
    </footer>
  )
}

export default Footer