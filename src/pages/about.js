import React from "react"
import Layout from "../components/layout"
import "./about.css"

export default () => (
  <Layout>
    <div className="about__container">
      <h1 className="about__title">About Us</h1>
      <div className="about__content">
        <div className="about__section about__section-left">
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
            ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
            cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,
          </p>
          <img
          className="about__image--first"
          src="/images/karate-gi.png"
          alt="gloves"
        />
        </div>
        <div className="about__section about__section-right">
        <img
          className="about__image--second"
          src="/images/karate-gi.png"
          alt="gloves"
        />
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
            ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
            cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,
          </p>
        </div>
        <div className="about__section about__section-left">
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
            ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
            cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,
          </p>
          <img
          className="about__image--third"
          src="/images/karate-gi.png"
          alt="gloves"
        />
        </div>
      </div>
    </div>
  </Layout>
)
