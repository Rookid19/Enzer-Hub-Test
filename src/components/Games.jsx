import React from "react";
import All5Group30 from "../Games/All5Group30";
import { rows } from "../utils/Data";

function Games() {
  const gameDescription = {
    name: "All 5 Group 30",
    rowName: ["One Pair", "One Number"],
    rules:
      "How to play: Select 2 One Pair & 1 One No. form 1bet. Winning No. include One No., One Pair occur 2x, as win. Win Sample：Bet plan: One Pair: 2, 8; One No.: 0; Winning No.: 2, 8, 0, 8, 2, as win.",
  };
  return (
    <div>
      {/* {rows.slice(0, 2).map((row) => ( */}
        <All5Group30  gameDescription={gameDescription} />
    {/* //   ))} */}
    </div>
  );
}

export default Games;
