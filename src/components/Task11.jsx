import React, { useEffect, useState } from "react";
import useFormula from "../hooks/useFormula";

function Task11() {
  const [totalUserSelection, setTotalUserSelection] = useState("");
  const [formsOneBet, setFormsOneBet] = useState("");
  const [answer, setAnswer] = useState("");

  // extracting getNumCombinations fuction from formula hook
  const { getNumCombinations } = useFormula();

  return (
    <div>
      <h1>Task 11</h1>
      <h3>
        Enter the total user selections out of ten buttons{" "}
        <input
          type="text"
          name="totalUserSelection"
          value={totalUserSelection}
          onChange={(e) => setTotalUserSelection(e.target.value)}
        />
      </h3>
      <h3>
        Enter the number of buttons that forms one bet{" "}
        <input
          type="text"
          name="formsOneBet"
          value={formsOneBet}
          onChange={(e) => setFormsOneBet(e.target.value)}
        />
      </h3>

      <button
        onClick={() =>
          console.log(
            getNumCombinations(totalUserSelection, formsOneBet, setAnswer)
          )
        }
        disabled={totalUserSelection === "" || formsOneBet === ""}
      >
        Show total bet
      </button>
      <h3>The total bet is {answer}</h3>
    </div>
  );
}

export default Task11;
