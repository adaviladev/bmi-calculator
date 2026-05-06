import { useState } from "react";
import "./App.css";

function getBmiCategory(bmiValue) {
  if (bmiValue < 18.5) return "Underweight";
  if (bmiValue < 25) return "Normal weight";
  if (bmiValue < 30) return "Overweight";
  return "Obesity";
}

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const weightValue = Number(weight);
    const heightValue = Number(height);

    if (weightValue <= 0 || heightValue <= 0) {
      setBmi(null);
      setCategory("");
      return;
    }

    const heightInMeters = heightValue / 100;
    const calculatedBmi = weightValue / (heightInMeters * heightInMeters);

    setBmi(calculatedBmi.toFixed(1));

    setCategory(getBmiCategory(calculatedBmi));
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  };

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
              required
              min="1"
              step="0.1"
              placeholder="70"
              inputMode="decimal"
            />
          </label>

          <label>
            Height (cm)
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
              min="1"
              step="0.1"
              placeholder="175"
              inputMode="decimal"
            />
          </label>

          <button type="submit">Calculate BMI</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
        {bmi && (
          <section className="result">
            <h2>Your BMI is {bmi}</h2>
            <p>Category: {category}</p>
          </section>
        )}
      </section>
    </main>
  );
}

export default App;
