import React from "react"
import "./class-item.css"
function ClassItem(props) {
  return (
    <div className className="classes__item">
      <p className="classes__item__title">{props.title}</p>
      <p className="classes__item__description">{props.description}</p>
    </div>
  )
}
export default ClassItem
