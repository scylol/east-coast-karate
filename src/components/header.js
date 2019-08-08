import React from "react"
import { Link } from "gatsby"
import "./header.css"

export default () => (
  <ul className="header__navbar">
    <li>
      <Link className="navbar__item" to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="navbar__item" to="/about/">
        About Us
      </Link>
    </li>
    <li>
      <Link className="navbar__item" to="/courses/">
        Classes
      </Link>
    </li>
    <li>
      <Link className="navbar__item" to="/contact/">
        Contact Us
      </Link>
    </li>
  </ul>
)
