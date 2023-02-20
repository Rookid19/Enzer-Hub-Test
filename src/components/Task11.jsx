import React, { useEffect, useState } from "react";

function Task11() {
  const [totalUserSelection, setTotalUserSelection] = useState("");
  const [formsOneBet, setFormsOneBet] = useState("");
  const [answer, setAnswer] = useState("");

  const getNumCombinations = (n, k) => {
    // calculate the binomial coefficient
    let numerator = 1;
    for (let i = n; i > n - k; i--) {
      numerator *= i;
    }
    let denominator = 1;
    for (let i = 1; i <= k; i++) {
      denominator *= i;
    }
    console.log(numerator / denominator);
    setAnswer(numerator / denominator);
    return numerator / denominator;
  };

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
        onClick={() => getNumCombinations(totalUserSelection, formsOneBet)}
        disabled={totalUserSelection === "" || formsOneBet === ""}
      >
        Show total bet
      </button>
      <h3>The total bet is {answer}</h3>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Task11;
