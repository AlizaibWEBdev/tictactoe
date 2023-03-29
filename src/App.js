import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(" "));
  const [trun, changeTrun] = useState("X");
  const changeTurn = () => {
    changeTrun(trun === "X" ? "O" : "X");
  };
  useEffect(() => {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < conditions.length; i++) {
      const [a, b, c] = conditions[i];
      if (
        boxes[a] === boxes[b] &&
        boxes[b] === boxes[c] &&
        boxes[a] !== " " &&
        boxes[a] !== ""
      ) {
        setTimeout(() => {
          alert(boxes[a] + " won!");
          setBoxes(Array(9).fill(" "));
        }, 300);
        break;
      }
    }
  }, [boxes]);
  const handleclick = (index) => {
    if (boxes[index] !== " ") return;
    const newarr = [...boxes];
    newarr[index] = trun;
    changeTurn();
    setBoxes(newarr);
  };
  return (
    <div className="App">
      <div className="grid">
        {boxes.map((box, index) => (
          <div key={index} className="box" onClick={() => handleclick(index)}>
            {box}
          </div>
        ))}
      </div>
    </div>
  );
}
