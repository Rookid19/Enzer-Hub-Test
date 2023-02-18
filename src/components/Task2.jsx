import React from "react";
import {  user_selection } from "../utils/Data";

function Task2({ elementMatch }) {

  const result = () => {
    console.log("number of user selection " + user_selection.length);
    console.log("number of element match " +elementMatch);

  };
  return (
    <div>
      <h1>TASK 2</h1>
      <button onClick={result}>Results</button>
      <h3>number of user selection = {user_selection.length}</h3>
      <h3>number of element match = {elementMatch}</h3>
    </div>
  );
}

export default Task2;
