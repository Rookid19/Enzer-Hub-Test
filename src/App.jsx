import React, { useEffect, useState } from "react";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";
import "./App.css";
import { button_labels, rows } from "./utils/Data";
import Task6 from "./components/Task6";
import Task7 from "./components/Task7";
import Task8 from "./components/Task8";
import Task10 from "./components/Task10";
import Task9 from "./components/Task9";
import Task11 from "./components/Task11";
import Task12 from "./components/Task12";
import Task13 from "./components/Task13";
import Task14 from "./components/Task14";

export default function App() {
  // task 1 



  

  return (
    <div>
      <Task1  />
      <Task2  />
      {/* <h1>TASK 4 and 5</h1>
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
      <Task8 />
      <Task9 />
      <Task10 />
      <Task11 />
      <Task12 />
      <Task13 />
      <Task14 /> */}
    </div>
  );
}
