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
            time1={"Mon & Wed 5:30-6:15 PM (Ages 4-7) White-Yellow"}
            time2={"Tues & Thur 5:30-6:15 PM (Ages 8-10) White-Orange"}
            time3={"Tues & Thur 6:20-7:10 PM (Ages 8-12) Sr Orange-Brown"}
            className="kid"
            imageName="karate-high-kick"
          />
          <ClassItem
            title="Cardio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
        ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
        cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
            time1={"Wed 7:15-8:00 PM (Adults)"}
            className="kid"
            imageName="karate-bag"
          />
          <ClassItem
            title="Black Belt Club"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
        ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
        cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
            time1={"Wed 6:20-7:10 PM (All Ages)"}
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
            time1={"Tues & Thur 7:15-8:15 PM (Adults)"}
            className="adult"
            imageName="nunchucks"
          />
          <ClassItem
            title="Haganah"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
        ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
        cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
            time1={"Mon 7:15-8:15 PM (Adults)"}
            time2={"Mon 8:20-9:20 PM (Adults)"}
            className="adult"
            imageName="knife"
          />
          <ClassItem
            title="Ground Survival"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vehicula velit ut faucibus rhoncus. Quisque nibh orci, consequat in
        ipsum vitae, venenatis pretium eros. Nullam ultrices tellus nunc, eu
        cursus leo dignissim quis. Sed feugiat, lacus sed euismod accumsan,"
            time1={"Sat 9:00-10:30 PM (Adults)"}
            className="adult"
            imageName="karate-throw"
          />
        </ClassSection>
      </div>
    </div>
  </Layout>
)
