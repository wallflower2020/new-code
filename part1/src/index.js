import React, { useState } from 'react'
import ReactDOM from "react-dom";

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const [ counter1, setCounter1 ] = useState(0)
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}> 
        zero
      </button>

      <div>{counter1}</div>
      <button onClick={() => setCounter1(counter1 + 1)}>
        plus
      </button>
      <button onClick={() => setCounter1(0)}> 
        zero
      </button>
      <div>{counter + counter1}</div>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

