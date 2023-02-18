import axios from "axios";
import React, { useEffect, useState } from "react";

function Task7() {
  const [number, setNumber] = useState(null);
  const [divisibleState, setDivisibleState] = useState({
    threeAndFive: "",
    three: "",
    five: "",
    user_input: "",
    type:""
  });

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
      divisibleState.user_input = input;
    } else {
      divisibleState.user_input = "";
    }

    if (typeof input !== "number" || !Number.isInteger(input)) {
        divisibleState.type = NaN
    //   return NaN;
    }

    setDivisibleState({ ...divisibleState });
  };

  useEffect(() => {
    if (number !== null) {
      divisor(parseInt(number));
    }
  }, [number]);


  const fetchData = async() =>{
    await axios.get("https://jsonplaceholder.typicode.com/users").then(res=> console.log(res.data))
  }

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

      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default Task7;
