import { useRef, useEffect, useState } from 'react'
import './UseRefExample.css'

const FocusInput = () => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <section className="use-ref__demo">
      <h3 className="use-ref__title">Focus Input</h3>
      <p className="use-ref__hint">
        Input auto-focuses on mount. Click the button to focus it again.
      </p>
      <div className="use-ref__actions">
        <input
          className="use-ref__input"
          type="text"
          ref={inputRef}
          placeholder="Type here..."
        />
        <button type="button" onClick={() => inputRef.current.focus()}>
          Focus Input
        </button>
      </div>
    </section>
  )
}

const RenderCount = ({ renderCount }) => {
  return (
    <p className="use-ref__value">Render Count: {renderCount.current}</p>
  )
}

const PrevValueTracker = ({ count }) => {
  const preCount = useRef('')

  useEffect(() => {
    preCount.current = count
  }, [count])

  return (
    <div className="use-ref__stats">
      <p className="use-ref__stat">
        <strong>Previous</strong>
        {preCount.current}
      </p>
      <p className="use-ref__stat">
        <strong>Current</strong>
        {count}
      </p>
    </div>
  )
}

const UseRefExample = () => {
  const [count, setCount] = useState(0)
  const renderCount = useRef(0)
  renderCount.current++
 
  return (
    <div className="use-ref">
      <FocusInput />

      <section className="use-ref__demo">
        <h3 className="use-ref__title">Render Count</h3>
        <p className="use-ref__hint">
          A ref tracks renders without causing re-renders when updated.
        </p>
        <RenderCount renderCount={renderCount} />
        <div className="use-ref__actions">
          <button type="button" onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </div>
      </section>

      <section className="use-ref__demo">
        <h3 className="use-ref__title">Previous Value Tracker</h3>
        <p className="use-ref__hint">
          Stores the previous count in a ref updated after each render.
        </p>
        <PrevValueTracker count={count} />
      </section>
    </div>
  )
}

export default UseRefExample
