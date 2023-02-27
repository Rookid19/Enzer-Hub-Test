import React from "react";
import All5Group120 from "../Games/All5Group120";
import All5Group30 from "../Games/All5Group30";
import All5Group60 from "../Games/All5Group60";
import All5StraightJoint from "../Games/All5StraightJoint";


function Games() {
  const all5Group30GameDescription = {
    name: "All 5 Group 30",
    rowName: ["One Pair", "One Number"],
    rules:
      "How to play: Select 2 One Pair & 1 One No. form 1bet. Winning No. include One No., One Pair occur 2x, as win. Win Sample：Bet plan: One Pair: 2, 8; One No.: 0; Winning No.: 2, 8, 0, 8, 2, as win.",
  };

  const all5Group60GameDescription = {
    name: "All 5 Group 60",
    rowName: ["One Pair", "One Number"],
    rules: "How to play: Select 1 One Pair & 3 One No. form 1bet. Winning No. include One No., One Pair occur 2x, as win. Win Sample：Bet plan: One Pair: 1; One No.: 2, 3, 4; Winning No.: 1, 2, 3, 4, 1, as win."
  }

  
  const all5Group120GameDescription = {
    name: "All 5 Group 120",
    rowName: "",
    rules: "How to play: Pick 5 numbers to form 1 bet, the picked numbers match the winning number (in any order) to win. Win Sample：Bet plan: 0, 2, 3, 8, 9; Winning No.: 9, 8, 0, 2, 3, as win."
  }

  const all5StraightJoint = {
    name: "All 5 Straight(Joint)",
    rowName: ["1st","2nd","3rd","4th","5th"],
    rules:"How to play: Select 1 No. from 1st, 2nd, 3rd, 4th, 5th form 1bet. Selected and winning No. same & in order, as win. Win Sample：Bet plan: 1, 2, 3, 4, 5; Winning No.: 1, 2, 3, 4, 5, as win."
  }
  return (
    <div>
      <All5Group30 gameDescription={all5Group30GameDescription} />
      <All5Group60 gameDescription={all5Group60GameDescription}/>
      <All5Group120 gameDescription={all5Group120GameDescription}/>
      <All5StraightJoint gameDescription={all5StraightJoint}/>
    </div>
  );
}

export default Games;
