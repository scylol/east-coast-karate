import React from "react"
import "./about-section.css"
function AboutSection(props) {
  return (
    <div className="about__section">
      {props.imageLeft ? (
        <img
          className="about__image"
          src="/images/karate-gi.png"
          alt="karate gi"
        />
      ) : (
        ""
      )}
      <p className="about__description">{props.description}</p>
      {props.imageRight ? (
        <img
          className="about__image"
          src="/images/karate-gi.png"
          alt="karate gi"
        />
      ) : (
        ""
      )}
    </div>
  )
}
export default AboutSection
