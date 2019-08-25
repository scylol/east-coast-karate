import React from "react"
import "./textAndIcon-section.css"
function TextAndIconSection(props) {
  return (
    <div className={`${props.page}__section`}>
      {props.imageLeft ? (
        <img
          className={`${props.page}__image`}
          src={`/images/${props.imgSrc}.png`}
          alt={props.imgSrc}
        />
      ) : (
        ""
      )}
      <p className={`${props.page}__description`}>{props.description}</p>
      {props.imageRight ? (
        <img
          className={`${props.page}__image`}
          src={`/images/${props.imgSrc}.png`}
          alt={props.imgSrc}
        />
      ) : (
        ""
      )}
    </div>
  )
}
export default TextAndIconSection
