import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Contemporary',
    description: 'Modern essentials',
    image:
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900',
  },
  {
    name: 'Traditional',
    description: 'Heritage redefined',
    image:
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=900',
  },
  {
    name: 'Accessories',
    description: 'The finishing touch',
    image:
      'https://images.unsplash.com/photo-1614179689702-355944cd0918?w=900',
  },
]

function FeaturedCategories() {
  return (
    <section className="categories-section" id="collections">
      <div className="section-heading">
        <p className="eyebrow">CURATED FOR YOU</p>
        <h2>Explore Our Collections</h2>
        <p>Pieces that bring together culture, character and contemporary style.</p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <Link to="/shop" className="category-card" key={category.name}>
            <img src={category.image} alt={category.name} />

            <div className="category-card-content">
              <p>{category.description}</p>
              <h3>{category.name}</h3>
              <span>Explore Collection →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default FeaturedCategories