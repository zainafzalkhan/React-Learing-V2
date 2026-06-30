import { useState } from 'react'
import './TemperatureConverter.css'

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(100)
  const [fahrenheit, setFahrenheit] = useState(212)

  const handleChange = (e) => {
    const value = e.target.value
    if (value === '') {
      setCelsius('')
      setFahrenheit('')
      return
    }
    if (e.target.name === 'celsius') {
      setCelsius(Number(value))
      setFahrenheit(Number((value * 9 / 5) + 32).toFixed(4))
    } else {
      setFahrenheit(Number(value))
      setCelsius(Number((value - 32) * 5 / 9).toFixed(4))
    }
  }

  return (
    <div className="temp-converter">
      <div className="temp-converter__field">
        <label className="temp-converter__label" htmlFor="celsius">
          Celsius
        </label>
        <input
          id="celsius"
          className="temp-converter__input"
          type="number"
          name="celsius"
          value={celsius}
          onChange={handleChange}
        />
      </div>

      <span className="temp-converter__divider" aria-hidden="true">
        ↔
      </span>

      <div className="temp-converter__field">
        <label className="temp-converter__label" htmlFor="fahrenheit">
          Fahrenheit
        </label>
        <input
          id="fahrenheit"
          className="temp-converter__input"
          type="number"
          name="fahrenheit"
          value={fahrenheit}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default TemperatureConverter
