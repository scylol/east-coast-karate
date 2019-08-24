import React from "react"
import "./class-item.css"
function ClassItem(props) {
  return (
    <div className className={`classes__item classes__item--${props.className}`}>
      <img
          className="class__image"
          src={`/images/${props.imageName}.png`}
          alt="karate kick"
        />
      <p className="classes__item__title">{props.title}</p>
      <p className="classes__item__description">{props.description}</p>
    </div>
  )
}
export default ClassItem
