import React from "react";

function Task10() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const new_array = [];


  for (let num of array) {
    new_array.push([num]);
  }
  console.log(JSON.stringify(new_array))
  return <div>Task10</div>;
}

export default Task10;