import React from "react";
import useRows from "../hooks/useRowsData";
import { user_selection, machine_selection } from "../utils/Data";

function Task1() {
  const { setElementMatch } = useRows();

  // initializing counter to zero (0)
  let counter = 0;

  /**
   *This code defines a function compare that compares the user_selection and machine_selection arrays and counts the number of matching elements.
   *The function initializes a counter variable to zero at the beginning. It then loops through the user_selection array using the forEach method 
   *and checks each element to see if it matches the machine_selection array using the JSON.stringify method to compare the elements.
   * If the two elements match, the counter variable is incremented by 1.
   *
   */
  const compare = () => {
    user_selection.forEach((item) => {
      // we loop through the user selection and if it matches machine selection we increase the counter by 1
      if (JSON.stringify(item) === JSON.stringify(machine_selection)) {
        counter += 1;
        return true;
      } else {
        return false;
      }
    });
    setElementMatch(counter);

    // initializing the counter back to zero
    counter = 0;
  };

  return (
    <div>
      <h1>TASK 1</h1>
      <button onClick={compare}>Compare</button>
    </div>
  );
}

export default Task1;
