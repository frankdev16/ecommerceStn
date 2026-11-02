import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="empty-state">
      <p className="eyebrow">404 ERROR</p>
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>

      <Link to="/" className="button button-dark">
        Return Home
      </Link>
    </section>
  )
}

export default NotFoundPage