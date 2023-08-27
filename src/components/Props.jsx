import React from "react"

const Props = (props) => {
  return (
    <div className="body">
      <li className="flex">
        <span>
          {props.complete ? (
            <></>
          ) : (
            <input
              on
              type="checkbox"
            />
          )}
        </span>

        <span className="text">{props.text}</span>
      </li>
    </div>
  )
}

export default Props
