import { useState } from 'react'
import './CounterApp.css'

const CounterApp = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <p className="counter__value">Count: {count}</p>
      <div className="counter__actions">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setCount((c) => c - 1)}>
          Decrement
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default CounterApp
