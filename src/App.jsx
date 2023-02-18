import React, { useEffect, useState } from "react";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";
import "./App.css";
import { button_labels, rows } from "./utils/Data";
import Task6 from "./components/Task6";
import Task7 from "./components/Task7";

export default function App() {
  const [elementMatch, setElementMatch] = useState(0);

  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);

  const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    if (rows[0].name === "1st") {
      console.log("row 1 ---> " + firstArray.sort());
    }
    if (rows[1].name === "2nd") {
      console.log("row 2 ---> " + secondArray.sort());
    }
    if (rows[2].name === "3rd") {
      console.log("row 3 ---> " + thirdArray.sort());
    }
  }, [firstArray, secondArray, thirdArray]);

  const onSelectAll = (label, index) => {
    labels.forEach((value) => {
      if (index === value) {
        if (firstArray.indexOf(label) === -1) {
          setFirstArray((prev) => [...prev, prev === label ? null : label]);
        }
        if (secondArray.indexOf(label) === -1) {
          setSecondArray((prev) => [...prev, prev === label ? null : label]);
        }
        if (thirdArray.indexOf(label) === -1) {
          setThirdArray((prev) => [...prev, prev === label ? null : label]);
        }
      }
    });
  };

  const onClear = (label) => {
    const first_index = firstArray.indexOf(label);
    const second_index = secondArray.indexOf(label);
    const third_index = thirdArray.indexOf(label);

    if (first_index !== -1) {
      firstArray.splice(first_index, 1);
    }
    if (second_index !== -1) {
      secondArray.splice(second_index, 1);
    }
    if (third_index !== -1) {
      thirdArray.splice(third_index, 1);
    }
    setFirstArray((prev) => [...prev]);
    setSecondArray((prev) => [...prev]);
    setThirdArray((prev) => [...prev]);
  };

  return (
    <div>
      <Task1 setElementMatch={setElementMatch} />
      <Task2 elementMatch={elementMatch} />
      <h1>TASK 4 and 5</h1>
      {rows.map((row) => (
        <div className="first_row" key={row.id}>
          <Task4
            row={row}
            array={
              row.id === 1
                ? firstArray
                : row.id === 2
                ? secondArray
                : thirdArray
            }
            setArray={
              row.id === 1
                ? setFirstArray
                : row.id === 2
                ? setSecondArray
                : setThirdArray
            }
          />
          <Task5
            setArray={
              row.id === 1
                ? setFirstArray
                : row.id === 2
                ? setSecondArray
                : setThirdArray
            }
          />
        </div>
      ))}
      <div className="all_select">
        {button_labels.map((label, index) => (
          <button
            key={label}
            className="button"
            onClick={() => onSelectAll(label, index)}
          >
            All
          </button>
        ))}
      </div>
      <div className="all_clear">
        {button_labels.map((label, index) => (
          <button
            key={label}
            className="button"
            onClick={() => onClear(label, index)}
          >
            Clear index{index}
          </button>
        ))}
      </div>
      <Task6 />
      <Task7 />
    </div>
  );
}
