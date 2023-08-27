import React, { useState } from "react"

const State = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Counter App</h1>
      <br />
      <p>please click {count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increse
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        Decrese
      </button>
    </div>
  )
}

export default State
