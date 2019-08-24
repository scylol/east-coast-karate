import React from "react"
import "./layout.css"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div className="app__container">
    <Header />
    <div className="main__container">{children}</div>
    <Footer />
  </div>
)
