import React from "react"
import Layout from "../components/layout"
import "./classes.css"
import ClassSection from "../components/class-section"
import ClassItem from "../components/class-item"

export default () => (
  <Layout>
    <div className="classes__container">
      <h1 className="classes__title">CLASSES</h1>
      <div className="classes__content">
        <ClassSection>
          <ClassItem
            title="Kid Karate"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
        ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
        cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
            className="kid"
            imageName="karate-high-kick"
          />
          <ClassItem
            title="Kid Karate"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
        ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
        cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
            className="kid"
            imageName="karate-high-kick"
          />
          <ClassItem
            title="Black Belt Club"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
        ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
        cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
            className="kid"
            imageName="belt"
          />
        </ClassSection>
        <ClassSection>
          <ClassItem
            title="Adult Karate"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
        ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
        cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
            className="adult"
            imageName="nunchucks"
          />
          <ClassItem
            title="Haganah"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
        ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
        cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
            className="adult"
            imageName="knife"
          />
          <ClassItem
            title="Ground Survival"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
        ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
        cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
            className="adult"
            imageName="karate-throw"
          />
        </ClassSection>
      </div>
    </div>
  </Layout>
)
