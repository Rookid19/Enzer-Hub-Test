import React, { useState, useEffect } from "react";

function Timer() {
  const [timeRemaining, setTimeRemaining] = useState(
    parseInt(localStorage.getItem("timeRemaining")) || 10
  );
  const [randomNumber, setRandomNumber] = useState(
    localStorage.getItem("randomNumber") || null
  );

  /**
   * In the above code, the generateRandomNumber function generates a random number between 0 and 100000, converts it to a string with a base of 10,
   * and then pads it with leading zeros to ensure it has a length of 5 digits. The function returns the resulting string.
   * You can call the generateRandomNumber function whenever you need to generate a new random 5-digit number.
   *
   * @return {*}
   */
  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100000).toString(10);
    return randomNumber.padStart(5, "0");
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    if (timeRemaining === 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timeRemaining]);

  useEffect(() => {
    localStorage.setItem("timeRemaining", timeRemaining);

    if (timeRemaining === 0) {
      setTimeRemaining(10);
      let random_number = generateRandomNumber()
    localStorage.setItem("randomNumber", random_number);

      setRandomNumber(random_number);
    }
  }, [timeRemaining]);

  // Convert seconds to "00:00:00" format
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      {formatTime(timeRemaining)}
      <h3>{randomNumber}</h3>
    </div>
  );
}

export default Timer;
