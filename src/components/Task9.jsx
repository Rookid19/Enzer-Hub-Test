import React, { useState, useEffect } from "react";

function Task9() {
  const [draws, setDraws] = useState([]);
  const [resetNums, setResetNums] = useState([]);

  const drawsInterval = () => {
      const newDraw = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
      console.log(newDraw);
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


  // Reset the drawing numbers to the new set of 3 random numbers passed in as a parameter
  const handleReset = (nums) => {
    setDraws([]);
    setResetNums(nums);
    const newDraw = [nums[0], nums[1], nums[2]];
    setDraws([newDraw]);
  };

  // Helper function to get a random number from 0-9
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
