import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Nyumbani
        </Link>
      </li>
      <li>
        <Link to="/about" className="page-link">
          Sisi
        </Link>
      </li>
      <li>
        <Link to="/categories" className="page-link">
          Mada
        </Link>
      </li>
      <li>
        <Link to="/contact" className="page-link">
          Wasiliana nasi
        </Link>
      </li>
    </ul>
  )
}

export default Links
