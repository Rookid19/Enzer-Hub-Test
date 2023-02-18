import React from "react";
import { button_labels } from "../utils/Data";
import "../App.css";
function Task4({ array, setArray, row }) {
  const onSelect = (label) => {
    if (array.includes(label)) {
      const index = array.indexOf(label);
      array.splice(index, 1);
      console.log(array)
      setArray((prev) => [...prev]);
    } else {
      setArray((prev) => [...prev, label]);
    }
  };

  return (
    <div >
      <div className="button_container">
        <span >{row.name}</span>
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

// const styles = {
//   button_container: {
//     display: "flex",
//     justifyContent: "space-around",
//     width: 550,
//   },
//   button: {
//     width: 40,
//   },
// };
