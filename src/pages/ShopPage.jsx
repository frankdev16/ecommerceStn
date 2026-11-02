import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(products.map((product) => product.category))]

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <section className="shop-page">
      <div className="page-heading">
        <p className="eyebrow">THE COLLECTION</p>
        <h1>Shop All</h1>
        <p>Explore the MAISON ÉLAN collection.</p>
      </div>

      <div className="shop-toolbar">
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? 'filter-button active' : 'filter-button'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <p>{filteredProducts.length} Products</p>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}

export default ShopPage