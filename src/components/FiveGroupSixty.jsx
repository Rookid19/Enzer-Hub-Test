import React from "react";
import useFormula from "../hooks/useFormula";

function FiveGroupSixty() {
  const { getCombinations1 } = useFormula();

  // const row1 = [2, 3, 4, 5, 6, 7, 8, 9];
  // const row2 = [8, 7, 9, 2, 3, 4, 5];
  const row1 = [0,1,2,3]
  const row2 = [1,2,4,5]
  // const row1Combination = getCombinations1(row1, 1);
  // const row2Combination = getCombinations1(row2, 3);

  const row2Combination = getCombinations1(row1, 2);
  const row1Combination = getCombinations1(row2, 1);

  const a = () => {
    let counter = 0;
    row1Combination.forEach((number) => {
      row2Combination.forEach((value) => {
        if (!value.includes(number[0])) {
          counter++;
        }
      });
    });
    console.log(counter);
  };


  return (
    <div>
      <h3>
        Task 3. In royal 5, grouop 60 game, you need to select at least one
        number from the first row and three numbers from the second row to form
        a bet. If the user selection on the first row = [2,3,4,5,6,7,8,9] and
        the selection on the second row = [8,7,9,2,3,4,5]
      </h3>
      <button onClick={a}>Royal 5 Group 60</button>
    </div>
  );
}

export default FiveGroupSixty;
