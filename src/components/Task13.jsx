import React from "react";
import useFormula from "../hooks/useFormula";

function Task13() {
  const row1 = [1, 2];
  const row2 = [4, 6];
  const row3 = [7, 3];
  const row4 = [];
  const row5 = [];

  // extracting concatenateArrays fuction from formula hook
  const { concatenateArrays } = useFormula();

  // combining all rows in one array
  const row = [row1, row2, row3, row4, row5];
  return (
    <div>
      <h1>Task 13</h1>
      <button onClick={() => console.log(concatenateArrays(row))}>Test</button>
    </div>
  );
}

export default Task13;
