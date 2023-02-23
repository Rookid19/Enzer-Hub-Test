import React, { useState, useEffect } from "react";

function Task9() {
  const [draws, setDraws] = useState([]);
  const [resetNums, setResetNums] = useState([]);

  /**
   *This code defines a function called drawsInterval that generates a new random draw of three numbers using the getRandomNumber()
   *and adds it to the existing list of draws using the setDraws() function, which is a state updater function passed down as a prop to
   *the current component
   *
   */
  const drawsInterval = () => {
    const newDraw = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
    setDraws((draws) => [...draws, newDraw]);
  };

  useEffect(() => {
    drawsInterval();
    const interval = setInterval(() => {
      drawsInterval();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  
  /**
   *setDraws([]) is called to reset the draws state to an empty array.
   *setResetNums(nums) is called to update the resetNums state with the nums parameter passed to the function.
   *A new array newDraw is created with the first three elements of nums.
   *setDraws([newDraw]) is called to update the draws state with an array containing newDraw.
   *In summary, this function resets the draws state, updates the resetNums state, and sets the draws state with
   *a new array containing the first three elements of the resetNums state.
   *
   * @param {*} nums
   */
  const handleReset = (nums) => {
    setDraws([]);
    setResetNums(nums);
    const newDraw = [nums[0], nums[1], nums[2]];
    setDraws([newDraw]);
  };

 
  /**
   * returns a random integer between 0 and 9.
   *
   * @return {*} 
   */
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  return (
    <div>
      <h1>Draws:</h1>
      <ul>
        {draws.map((draw, index) => (
          <li key={index}>{draw.join(", ")}</li>
        ))}
      </ul>
      <h2>Reset the drawing numbers:</h2>
      <button
        onClick={() =>
          handleReset([getRandomNumber(), getRandomNumber(), getRandomNumber()])
        }
      >
        Reset
      </button>
      {resetNums.length > 0 && <p>Numbers reset to: {resetNums.join(", ")}</p>}
    </div>
  );
}

export default Task9;
