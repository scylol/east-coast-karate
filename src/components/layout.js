import React from "react"
import "./layout.css"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
  <div className="app__container">
    <Header />
    <div className="main__container">{children}</div>
    <Footer />
  </div>
)
