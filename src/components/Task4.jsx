import React from "react";
import { button_labels } from "../utils/Data";
import "../App.css";
import useRows from "../hooks/useRowsData";
function Task4({ row }) {
  const {
    firstArray,
    secondArray,
    thirdArray,
    setFirstArray,
    setSecondArray,
    setThirdArray,
  } = useRows();

  const array =
    row.id === 1 ? firstArray : row.id === 2 ? secondArray : thirdArray;
  const setArray =
    row.id === 1
      ? setFirstArray
      : row.id === 2
      ? setSecondArray
      : setThirdArray;

  const onSelect = (label) => {
    if (array.includes(label)) {
      const index = array.indexOf(label);
      array.splice(index, 1);
      console.log(array);
      setArray((prev) => [...prev]);
    } else {
      setArray((prev) => [...prev, label]);
    }
  };

  return (
    <div>
      <div className="button_container">
        <span>{row.name}</span>
        {button_labels.map((label) => (
          <button
            className="button"
            style={{
              backgroundColor: array.includes(label) ? "green" : null,
            }}
            key={label}
            onClick={() => onSelect(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Task4;
