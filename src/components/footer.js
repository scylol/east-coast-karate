import React from "react"
import { Link } from "gatsby"
import "./footer.css"

export default () => (
  <div className="footer__container">
    <p className="footer__title">FOLLOW US ON</p>
    <ul className="footer__list">
      <li>
        <a className="footer__item">Facebook</a>
      </li>
      <li>
        <a className="footer__item">Instagram</a>
      </li>
      <li>
        <a className="footer__item">YouTube</a>
      </li>
    </ul>
  </div>
)
