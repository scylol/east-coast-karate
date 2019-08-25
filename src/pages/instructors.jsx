import React from "react"
import Layout from "../components/layout"
import TextAndIconSection from "../components/textAndIcon-section"
import "./instructors.css"

export default () => (
  <Layout instructor>
    <div className="instructors__container">
      <h1 className="instructors__title">INSTRUCTORS</h1>
      <div className="instructors__content">
        <TextAndIconSection
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
      ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
      cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
      page="instructors"
      imageRight
      imgSrc="karate-gi"
        />
        <TextAndIconSection
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
      ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
      cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
      page="instructors"
      imageLeft
      imgSrc="karate-gi"
        />
        <TextAndIconSection
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
      ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
      cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
      page="instructors"
      imageRight
      imgSrc="karate-gi"
        />
        <TextAndIconSection
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
      ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
      cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
      page="instructors"
      imageLeft
      imgSrc="karate-gi"
        />
      </div>
    </div>
  </Layout>
)
