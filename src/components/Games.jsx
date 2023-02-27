import React from "react";
import All5Group30 from "../Games/All5Group30";
import All5Group60 from "../Games/All5Group60";
import { rows } from "../utils/Data";

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
  return (
    <div>
      <All5Group30 gameDescription={all5Group30GameDescription} />
      <All5Group60 gameDescription={all5Group60GameDescription}/>
    </div>
  );
}

export default Games;
