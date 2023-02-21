import React from "react";

function Task13() {
  const row1 = [1, 2];
  const row2 = [4, 6];
  const row3 = [7, 3];
  const row4 = [];
  const row5 = [];

  // combining all rows in one array
  const row = [row1, row2, row3, row4, row5];

  const concatenateArrays = () => {
    // map function to transform each inner array into a string of its elements joined by commas,
    //  and then use the join function to concatenate the resulting strings with the delimiter |.
    const result = row.map((innerArr) => innerArr.join(",")).join("|");
    console.log(result); // outputs "1,2|4,6|7,3||"
  };
  return (
    <div>
      <h1>Task 13</h1>
      <button onClick={concatenateArrays}>Test</button>
    </div>
  );
}

export default Task13;
