import "./styles.css";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(e) {
    // hanya boleh angka (no huruf, no desimal)
    const value = e.target.value.replace(/\D/g, "");
    setNumber(value);
  }

  function handleSubmit() {
    if (number === "") return;

    const originalNum = parseInt(number, 10);
    const reversedNum = parseInt(number.split("").reverse().join(""), 10);
    const difference = Math.abs(originalNum - reversedNum);

    setResult(difference);
  }

  return (
    <div className="App">
      <div>
        Number: <input value={number} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
