import React, { useEffect, useState } from "react";


function Task7() {
  const [number, setNumber] = useState(null);
  const [divisibleState, setDivisibleState] = useState({
    threeAndFive: "",
    three: "",
    five: "",
    user_input: "",
    type: "",
  });

  /**
   *This code defines a function called divisor that takes an input parameter 
   *and updates the divisibleState state variable accordingly.
   *
   * eg. The function first checks whether the input is divisible by both 3 and 5 using the % operator. 
   * If so, it sets the threeAndFive property of the divisibleState object to "FizzBuzz". 
   * Otherwise, it sets it to null
   * @param {*} input
   */

  const divisor = (input) => {
    if (input % 3 === 0 && input % 5 === 0) {
      divisibleState.threeAndFive = "FizzBuzz";
    } else {
      divisibleState.threeAndFive = null;
    }

    if (input % 3 === 0) {
      divisibleState.three = "Fizz";
    } else {
      divisibleState.three = null;
    }

    if (input % 5 === 0) {
      divisibleState.five = "Buzz";
    } else {
      divisibleState.five = null;
    }

    // If none of the above conditions are true, return the input
    if (
      !(
        input % 3 === 0 ||
        input % 5 === 5 ||
        input % 3 === 0 ||
        input % 5 === 0
      )
    ) {
      divisibleState.user_input = isNaN(input) ? null : input;
      console.log("input " + input);
    } else {
      divisibleState.user_input = "";
    }

    if (typeof input === "number") {
      divisibleState.type = isNaN(input) ? input : null;
      //   return NaN;
    } 
    // console.log("--> type of " + typeof input);

    setDivisibleState({ ...divisibleState });
  };


  /**
 * This code snippet is a useEffect hook that runs when the number state changes.
 * The useEffect hook takes a function as its first parameter and an array of dependencies as its second parameter. In this case, 
 * the function checks if the number state is not null and then calls the divisor function with the parsed integer value of number
 *
 * @return {*} 
 */
  useEffect(() => {
    if (number !== null) {
      divisor(parseInt(number));
    }
  }, [number]);

  return (
    <div>
      <h4>Enter you number</h4>
      <input
        type="text"
        name="text"
        placeholder="Enter your number here"
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1>Task 7</h1>
      <h3>
        {" "}
        ({number}) is divisible by 3 and 5 {"===>"}
        {divisibleState?.threeAndFive} <br />({number}) is divisible by 3{" "}
        {"===>"}
        {divisibleState?.three} <br />({number}) is divisible by 3 {"===>"}
        {divisibleState?.five} <br />({number}) is not divisible by 3 or 5 or 3
        and 5 {"===>"}
        {divisibleState?.user_input}
        <br />({number}) is not a number or integer {"===>"}
        {divisibleState?.type}
      </h3>
    </div>
  );
}

export default Task7;
