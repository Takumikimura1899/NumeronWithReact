import React, { useState } from "react";
import "./styles.css";

const answer: string[] = ["4", "5", "6"];

export default function App() {
  const [num, setNum] = useState<string>("");
  const [biteCount, setBiteCount] = useState(0);
  const [eatCount, setEatCount] = useState(0);
  const [result, setResult] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(e.target.value);
  };

  const clickHandler = async () => {
    const numArray = num.split("");

    setBiteCount(0);
    setEatCount(0);

    numArray.forEach((elem, index) => {
      if (answer.includes(elem)) {
        if (answer[index] === elem) {
          setBiteCount((prev) => prev + 1);
        } else {
          setEatCount((prev) => prev + 1);
        }
      }
    });
    setResult(`${biteCount}BITE${eatCount}EAT`);
  };

  return (
    <div className="App">
      <input onChange={changeHandler} type="number" value={num} />
      <button onClick={clickHandler}>判定</button>
      {result && <p>{result}</p>}
    </div>
  );
}
