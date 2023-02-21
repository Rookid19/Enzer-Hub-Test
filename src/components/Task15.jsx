import React from "react";

function Task15() {
  const userSelection = [
    [2, 1, 5, 6, 7],
    [1, 7, 3, 45],
    [6, 2, 4, 5, 6],
  ];
  const machineDrawNumber = [1, 5, 2, 7, 6];


const match = () =>{

    userSelection.forEach((row, i) => {
        row.forEach((number, j) => {
          if (number === machineDrawNumber[j]) {
            console.log(`User has a match at position ${j+1} in row ${i+1}`);
          } else {
            // console.log(`User does not have a match at position ${j+1} in row ${i+1}`);
          }
        });
      });
}

  return (
    <div>
      <h1>Task15</h1>
      <button id="submit1" onClick={match}>Show match</button>
    </div>
  );
}

export default Task15;
