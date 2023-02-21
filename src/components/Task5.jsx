import React from "react";
import { button_labels, task5_buttons } from "../utils/Data";
import "../App.css";
import useRows from "../hooks/useRowsData";

function Task5({ row }) {
  const { setFirstArray, setSecondArray, setThirdArray } = useRows();

  const setArray =
    row.id === 1
      ? setFirstArray
      : row.id === 2
      ? setSecondArray
      : setThirdArray;

  const even = button_labels.filter((item) => item % 2 === 0);
  const odd = button_labels.filter((item) => item % 2 !== 0);
  const small = button_labels.slice(0, 5);
  const big = button_labels.slice(5, 10);

  const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const select = (label) => {
    if (label === "even") {
      setArray(even);
    } else if (label === "clear") {
      setArray([]);
    } else if (label === "odd") {
      setArray(odd);
    } else if (label === "small") {
      setArray(small);
    } else if (label === "big") {
      setArray(big);
    } else if (label === "all") {
      setArray(labels);
      console.log(labels);
    }
  };
  return (
    <div>
      <div className="button_container">
        {task5_buttons.map(({ id, label }) => (
          <button className="button" key={id} onClick={() => select(label)}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Task5;

// const styles = {
//   button_container: {
//     // display: "flex",
//     // justifyContent: "space-around",
//     // width: 550,
//   },
//   button: {
//     // width: 40,
//   },
// };
