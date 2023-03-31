import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="restaurant-error-view-container">
    <img
      src="https://res.cloudinary.com/dc4qrvfpr/image/upload/v1680251696/notfound_vlk3gb.jpg"
      alt="not found"
      className="restaurant-failure-img"
    />
    <h1 className="restaurant-failure-heading-text">Page Not Found</h1>
    <p className="restaurant-failure-description">
      we are sorry, the page you requested could not be found Please go back to
      the homepage
    </p>
    <Link to="/">
      <button className="error-button" type="button">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
