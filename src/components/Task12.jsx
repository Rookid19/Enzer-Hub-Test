import React, { useState } from "react";
import useFormula from "../hooks/useFormula";

function Task12() {
  // extracting getNumCombinations fuction from formula hook
  const { getNumCombinations } = useFormula();
  const [answer, setAnswer] = useState("");

  let row1 = [1];
  let row2 = [2, 4, 5];
  let row3 = [1, 3];
  let row4 = [4, 7];
  let row5 = [5, 6, 8, 9];

  // total number of user selection
  const total_user_selection =
    row1.length + row2.length + row3.length + row4.length + row5.length;

  //number to form one bet
  const number_to_form_one_bet = 1;

  return (
    <div>
      <h1>Task 12</h1>
      <button
        onClick={() =>
          console.log(
            getNumCombinations(
              total_user_selection,
              number_to_form_one_bet,
              setAnswer
            )
          )
        }
      >
        console log results
      </button>
      <br />
    </div>
  );
}

export default Task12;
