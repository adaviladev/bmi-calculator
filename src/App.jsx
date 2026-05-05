import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const weightValue = Number(weight)
    const heightValue = Number(height)

    if (weightValue <= 0 || heightValue <= 0) {
      setBmi(null)
      return
    }

    const heightInMeters = heightValue / 100
    const calculatedBmi = weightValue / (heightInMeters * heightInMeters)

    setBmi(calculatedBmi.toFixed(1))
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
        {
          bmi && (
            <section>
              <h2>Your BMI is {bmi}</h2>
            </section>  
        )}
      </section>
    </main>
  )
}

export default App
