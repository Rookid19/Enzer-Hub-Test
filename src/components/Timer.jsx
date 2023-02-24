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

  /**
   * The useEffect hook takes a function as its first argument. This function is called when the component mounts,
   * and then again whenever any of the values in the second argument (an array of dependencies) change.
   * In this case, the function creates a new interval using the setInterval function. This interval runs every 1000 milliseconds (1 second)
   * and calls the setTimeRemaining function, passing in a new value calculated by subtracting 1 from the previous value of timeRemaining.
   * The if statement checks if timeRemaining is equal to 0. If it is, it clears the interval using the clearInterval function.
   *  This is important because otherwise the interval would keep running even after the timer has reached 0.
   * @return {*}
   */

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    if (timeRemaining === 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timeRemaining]);

  /**
   * The first line of the function sets the timeRemaining value in localStorage to the current value of timeRemaining.
   * This allows the timer to persist across page refreshes or component unmounts.
   * The if statement checks if timeRemaining is equal to 0. If it is, it means the timer has reached its end, and so the code resets
   * the timeRemaining to 10 seconds and generates a new random number using the generateRandomNumber function.
   * The new random number is also saved in localStorage and set in the component's state using the setRandomNumber function.
   * By default, useEffect only runs after the first render, but by including timeRemaining in the array of dependencies,
   * we can also trigger the function whenever timeRemaining changes.
   *
   * @return {*}
   */

  useEffect(() => {
    localStorage.setItem("timeRemaining", timeRemaining);

    if (timeRemaining === 0) {
      setTimeRemaining(10);
      let random_number = generateRandomNumber();
      localStorage.setItem("randomNumber", random_number);
      setRandomNumber(random_number);
    }
  }, [timeRemaining]);

  /**
   * The function first calculates the number of hours in the input time value by dividing it by 3600 (the number of seconds in an hour)
   * and taking the floor of the result using Math.floor(). The result is then converted to a string and padded with a leading zero using
   * String.prototype.padStart() to ensure that it has two digits.
   * The function then calculates the number of minutes in the remaining time by taking the modulus of time with 3600
   * (to get the number of seconds remaining after subtracting the hours) and dividing by 60 (the number of seconds in a minute).
   * The result is similarly converted to a string and padded with a leading zero.
   * Finally, the function calculates the number of seconds remaining by taking the modulus of time with 60 and converting it to a string
   * padded with a leading zero.
   * All three values are concatenated together into a string in the format "hh:mm:ss" using template literals and returned from the function.
   *
   * @param {*} time
   * @return {*}
   */
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
    <div className="timer">
      <h3 className="time_remaining">{formatTime(timeRemaining)}</h3>
      <h3 className="random_number">{randomNumber}</h3>
    </div>
  );
}

export default Timer;
