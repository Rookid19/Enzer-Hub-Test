import React from "react";

function Task12() {
  let row1 = [1];
  let row2 = [2, 4, 5];
  let row3 = [1, 3];
  let row4 = [4, 7];
  let row5 = [5, 6, 8, 9];

  const total_user_selection =
    row1.length + row2.length + row3.length + row4.length + row5.length;

  const number_to_form_one_bet = 1;
  const fiveRows = [row1, row2, row3, row4, row5];

  const getNumCombinations = (n, k) => {
    // calculate the binomial coefficient
    let numerator = 1;
    for (let i = n; i > n - k; i--) {
      numerator *= i;
    }
    let denominator = 1;
    for (let i = 1; i <= k; i++) {
      denominator *= i;
    }
    console.log(numerator / denominator);
    return numerator / denominator;
  };

  return (
    <div>
      <h1>Task 12</h1>
      <button
        onClick={() =>
          getNumCombinations(total_user_selection, number_to_form_one_bet)
        }
      >
        console log results
      </button>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Task12;
