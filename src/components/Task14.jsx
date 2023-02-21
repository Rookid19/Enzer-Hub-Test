import React from "react";

function Task14() {
  function getCombinations(arr, k) {
    if (k === 1) {
      return arr.map((e) => [e]);
    }
    const result = [];
    for (let i = 0; i <= arr.length - k; i++) {
      const subCombos = getCombinations(arr.slice(i + 1), k - 1);
      subCombos.forEach((combo) => {
        result.push([arr[i], ...combo]);
      });
    }
    return result;
  }

  const arr = [1, 2, 3, 4, 5];
  const k = 2;
  const combinations = getCombinations(arr, k);

  const showResult = () => {
    console.log(combinations);
  };

  // output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

  return <div>
    <h1>Task 14</h1>
    <button onClick={showResult}>
        Show results
    </button>
    <br />
    <br />
  </div>;
}

export default Task14;
