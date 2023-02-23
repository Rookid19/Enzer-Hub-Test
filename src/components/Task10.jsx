import React from "react";

function Task10() {

  /**
   * This code initializes an array called array with the values 0 through 9, and then creates a new empty array called new_array. 
   * It then loops through each value in array using a for...of loop, and for each value it pushes a new array containing only that 
   * value into new_array. Finally, there is a results() function that logs the contents of new_array as a JSON string to the console.
   *
   */

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const new_array = [];

  for (let num of array) {
    new_array.push([num]);
  }


  function results() {
    console.log(JSON.stringify(new_array));
  }

  return (
    <div>
      <h1>Task 10</h1>
      <button onClick={results}>View results</button>
    </div>
  );
}

export default Task10;
