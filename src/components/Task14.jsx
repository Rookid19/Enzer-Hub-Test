import React from "react";
import useFormula from "../hooks/useFormula";

function Task14() {
  const { getCombinations } = useFormula()

  const arr = [1, 2, 3, 4, 5];
  const k = 2;

  return (
    <div>
      <h1>Task 14</h1>
      <button onClick={() => console.log(getCombinations(arr, k))}>
        Show results
      </button>
      <br />
      <br />
    </div>
  );
}

export default Task14;
