import React from "react"
import "./footer.css"

export default () => (
  <div className="footer__container">
    <p className="footer__title">FOLLOW US ON</p>
    <ul className="footer__list">
      <li>
        <a href="https://www.facebook.com/EastCoastKarateAberdeenNJ" target="_blank" className="footer__item">Facebook</a>
      </li>
      <li>
        <a href="https://www.instagram.com/eastcoastbudokan/" target="_blank" className="footer__item">Instagram</a>
      </li>
      <li>
        <a className="footer__item">YouTube</a>
      </li>
    </ul>
  </div>
)
