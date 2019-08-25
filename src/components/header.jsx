import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFistRaised, faToriiGate } from "@fortawesome/free-solid-svg-icons"
import "./header.css"

export default () => (
  <div className="header__container">
    <div className="header__icon__container">
      <Link
        to="/"
      >
        <span className="header__icon--torii">
          <FontAwesomeIcon icon={faToriiGate} size="2x" />
        </span>
        <span className="header__icon--fist">
          <FontAwesomeIcon icon={faFistRaised} />
        </span>
      </Link>
    </div>
    <ul className="header__navbar">
      <li>
        <Link
          className="navbar__item"
          activeClassName="active active--home"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="navbar__item"
          activeClassName="active active--about"
          to="/about/"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          className="navbar__item"
          activeClassName="active active--classes"
          to="/classes/"
        >
          Classes
        </Link>
      </li>
      <li>
        <Link
          className="navbar__item"
          activeClassName="active active--instructors"
          to="/instructors/"
        >
          Instructors
        </Link>
      </li>
      <li>
        <Link
          className="navbar__item"
          activeClassName="active active--contact"
          to="/contact/"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  </div>
)
