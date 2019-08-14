import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFistRaised, faToriiGate } from '@fortawesome/free-solid-svg-icons';
import "./header.css"

export default () => (
  <div className="header__container">
    <div className="header__icon__container">
      <span className="header__icon--torii">
      <FontAwesomeIcon icon={faToriiGate} size="2x" />
      </span>
      <span className="header__icon--fist">
      <FontAwesomeIcon icon={faFistRaised} />
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
