import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Calculate BMI logic here
  }

  return (
    <main>
      <section>
        <h1>BMI Calculator</h1>
        <p>Calculate your body mass index based on your height and weight.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Weight (kg)
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>

          <label>
            Height (cm)
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>

          <button type="submit">Calculate BMI</button>
        </form>
      </section>
    </main>
  )
}

export default App
