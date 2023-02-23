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


  /**
   * This is a JavaScript code that checks if any of the rows in userSelection array match the machineDrawNumber array, 
   * and logs the matching rows to the console. The code uses the filter() method to create a new array of all the rows that match the 
   * machineDrawNumber. The filter() method takes a callback function that is executed for each element in the array, and returns a new array
   * with only the elements for which the callback function returns true.
   * In this case, the callback function uses the every() method to check if each number in the row matches the machineDrawNumber at the same position.
   * The every() method returns true only if all elements in the array pass the test implemented by the provided function.
   * If there are any rows that match, the code logs a message indicating which rows matched. 
   * The map() method is used to create an array of row numbers that matched, and then the join() method is used to concatenate the row numbers
   * into a string separated by commas.
   * If no rows match, the code logs a message indicating that there were no matches.
   *
   */
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
