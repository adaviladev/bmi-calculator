import './App.css'

function App() {
  return (
    <main>
      <section>
        <h1>BMI Calculator</h1>
        <p>Calculate your body mass index based on your height and weight.</p>

        <form>
          <label>
            Weight
            <input />
          </label>

          <label>
            Height
            <input />
          </label>

          <button type="submit">Calculate BMI</button>
        </form>
      </section>
    </main>
  )
}

export default App
