import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero'
import FeaturedCategories from '../components/home/FeaturedCategories'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

function HomePage() {
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <>
      <Hero />

      <FeaturedCategories />

      <section className="featured-products-section">
        <div className="section-heading">
          <p className="eyebrow">THE MAISON ÉLAN EDIT</p>
          <h2>Selected Pieces</h2>
          <p>Discover pieces designed to make an impression.</p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        <div className="section-action">
          <Link to="/shop" className="button button-dark">
            View All Products
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage