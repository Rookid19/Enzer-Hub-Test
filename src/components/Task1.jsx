import React from "react";
import { user_selection, machine_selection } from "../utils/Data";

function Task1({setElementMatch}) {
  
let counter = 0;
  const compare = () => {
    user_selection.forEach((item) => {
      if (JSON.stringify(item) === JSON.stringify(machine_selection)) {
        counter += 1
        return true;
      } else {
        return false;
      }
    });
    setElementMatch(counter)
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
