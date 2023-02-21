import React from "react";

function Task15() {
  const userSelection = [
    [2, 1, 5, 6, 7],
    [1, 7, 3, 4, 5],
    [6, 2, 4, 5, 1],
    [1, 5, 4, 2, 6],
    [1, 5, 2, 7, 6]
  ];
  const machineDrawNumber = [1, 5, 2, 7, 6];

  const match = () => {
    // We use the every() method to check if each number in the
    //  row matches the machine draw number at the same position.
    const matchedRows = userSelection.filter((row) => {
      return row.every((number, j) => number === machineDrawNumber[j]);
    });

    console.log(matchedRows);
    if (matchedRows.length > 0) {
      console.log(
        `The following rows have all numbers matching the machine draw numbers: ${matchedRows
          .map((row, i) => i + 1)
          .join(", ")}`
      );
    } else {
      console.log("No row has all numbers matching the machine draw numbers.");
    }
  };

  return (
    <div>
      <h1>Task15</h1>
      <button id="submit1" onClick={match}>
        Show match
      </button>
    </div>
  );
}

export default Task15;
