import React from "react"
import { Link } from "gatsby"
import "./header.css"

export default () => (
  <div className="header__container">
    <div className="header__icon__container">
      <span className="header__icon--torii">
        <i class="fas fa-torii-gate fa-2x"></i>
      </span>
      <span className="header__icon--fist">
        <i class="fas fa-fist-raised"></i>
      </span>
    </div>
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
  </div>
)
