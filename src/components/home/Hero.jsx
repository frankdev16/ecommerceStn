import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <img
        src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=2000"
        alt="Contemporary fashion collection"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="eyebrow">THE ART OF MODERN DRESSING</p>

        <h1>
          Elegance,
          <br />
          Reimagined.
        </h1>

        <p className="hero-description">
          Discover contemporary African fashion made for
          confident and effortless expression.
        </p>

        <Link to="/shop" className="button button-light">
          Explore Collection <span>→</span>
        </Link>
      </div>
    </section>
  )
}

export default Hero