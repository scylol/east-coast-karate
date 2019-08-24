import React from "react"
import "./class-section.css"
function ClassSection(props) {
  return (
    <div className="classes__section">
      <div className="classes__item__container">
        {props.children}
      </div>
    </div>
  )
}
export default ClassSection
