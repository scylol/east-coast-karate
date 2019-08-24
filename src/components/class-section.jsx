import React from "react"
import "./class-section.css"
function ClassSection(props) {
  return (
    <div className="classes__section">
      <h2 className="classes__section__title">{props.title}</h2>
      <div className="classes__item__container">
        {props.children}
      </div>
    </div>
  )
}
export default ClassSection
