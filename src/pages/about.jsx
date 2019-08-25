import React from "react"
import Layout from "../components/layout"
import TextAndIconSection from "../components/textAndIcon-section"
import "./about.css"

export default () => (
  <Layout>
    <div className="about__container">
      <h1 className="about__title">ABOUT US</h1>
      <div className="about__content">
        <TextAndIconSection
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
      ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
      cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
      page="about"
      imageRight
      imgSrc="karate-gi"
        />
        <TextAndIconSection
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
      ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
      cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
      page="about"
      imageLeft
      imgSrc="karate-gi"
        />
        <TextAndIconSection
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
      ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
      cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
      page="about"
      imageRight
      imgSrc="karate-gi"
        />
      </div>
    </div>
  </Layout>
)
