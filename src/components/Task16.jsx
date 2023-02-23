import React from "react";
import useFormula from "../hooks/useFormula";

const user_selection = [
  [1, 4, 2, 3, 6],
  [1, 6, 4, 3, 5],
  [1, 5, 8, 7, 9],
  [1, 3, 7, 5, 6],
  [2, 3, 6, 7, 4],
];

const machine_draw = [2, 1, 3, 5, 4];

// finding the sam of the first and last element of the machine draw
const machineDrawSum = machine_draw[0] + machine_draw[machine_draw.length - 1];

const sumFirstAndLastSelection = () => {
  let won = 0;

  user_selection.forEach((row) => {
    // finding the sam of the first and last element of the user selection draw
    const userDrawSelection = row[0] + row[user_selection.length - 1];

    if (machineDrawSum === userDrawSelection) {
      won += 1;
    }
  });

  if (won) {
    console.log("The total number of user selection that won is " + won);
    console.log(
      "The total number of user selection is " + user_selection.length
    );
  }
  const user_selection_that_lost = user_selection.length - won;
  console.log(
    "The total number of user selection that lost is " +
      user_selection_that_lost
  );
};

// Task 2. With reference to Task 1, if the user selection was in rows as represented
// in the array  as row1, row2 .... respectively

const numberOfBetsFromTheUserSelection = () => {
  const answer =
    user_selection[0].length *
    user_selection[1].length *
    user_selection[2].length *
    user_selection[3].length *
    user_selection[4].length;

  console.log("Number of bets from user selection " + answer + " bets");
  return answer;
};

const numberOfBetsFromTheUserSelectionCombo5 = () => {
  console.log(numberOfBetsFromTheUserSelection() * 5);
};

function Task16() {
  const { concatenateArrays } = useFormula();
  return (
    <div>
      <h1>Task16</h1>
      <button onClick={sumFirstAndLastSelection}>Results</button>
      <h2>
        Task 2. With reference to Task 1, if the user selection was in rows as
        represented in the array as row1, row2 .... respect
      </h2>
      <h2> Calculate the number of bets from the user selection</h2>
      <button onClick={numberOfBetsFromTheUserSelection}>Answer</button>
      <h2>
        b. Assumming row1 is a royal 5 , 120 game. how will the data be
        submitted. show that in the console
      </h2>
      <button onClick={() => console.log(user_selection[0].join(","))}>
        View Results
      </button>
      <h3>
        Task 3. Looking at the royal 5 game, with combo selection. if a user
        makes this selection [ [1,4,2,3,1], [1,6,4,3,5], [1,5,8,7,9],
        [1,3,7,5,6], [2,3,3,7,4] ] a. How will you submit the data b. Calculate
        the number of bets for the user: know that the combo 5 selection per
        5bets.
      </h3>
      <h3>
        a .{" "}
        <button onClick={() => console.log(concatenateArrays(user_selection))}>
          Console log data
        </button>
      </h3>
      <h3>
        b. <button onClick={() => numberOfBetsFromTheUserSelectionCombo5()}>numberOfBetsFromTheUserSelectionCombo5</button>
      </h3>
    </div>
  );
}

export default Task16;
