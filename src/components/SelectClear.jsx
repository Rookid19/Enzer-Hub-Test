import React, { useState } from "react";
import useFormula from "../hooks/useFormula";
import useRows from "../hooks/useRowsData";
import { button_labels, rows } from "../utils/Data";

function SelectClear() {
  const {
    onSelectAll,
    onClear,
    firstArray,
    secondArray,
    thirdArray,
    fourthArray,
    fifthArray,
  } = useRows();
  const { getNumCombinations } = useFormula();
  const [fiveStandard, setFiveStandard] = useState("");

  // total number of user selection
  const total_user_selection =
    firstArray.length +
    secondArray.length +
    thirdArray.length +
    fourthArray.length +
    fifthArray.length;

  //number to form one bet
  const number_to_form_one_bet = 5;

  const sorted = () => {
    console.log(
      "The total number of bet " +
        getNumCombinations(total_user_selection, number_to_form_one_bet)
    );
    setFiveStandard(
      getNumCombinations(total_user_selection, number_to_form_one_bet)
    );
    console.log([
      firstArray.sort(),
      secondArray.sort(),
      thirdArray.sort(),
      fourthArray.sort(),
      fifthArray.sort(),
    ]);
  };

  const unsorted = () => {
    console.log([firstArray, secondArray, thirdArray, fourthArray, fifthArray]);
  };
  return (
    <div>
      <div className="all_select">
        {button_labels.map((label, index) => (
          <button
            key={label}
            className="button"
            onClick={() => onSelectAll(label, index)}
          >
            All
          </button>
        ))}
      </div>
      <div className="all_clear">
        {button_labels.map((label, index) => (
          <button
            key={label}
            className="button"
            onClick={() => onClear(label, index)}
          >
            Clear
          </button>
        ))}
      </div>
      <div className="submit-section">
        <button id="submit1" onClick={sorted}>
          Sorted
        </button>
        <button id="submit2" onClick={unsorted}>
          Unsorted
        </button>
      </div>
      <h4>ALL five straight standard number of bets is {fiveStandard}</h4>
    </div>
  );
}

export default SelectClear;
