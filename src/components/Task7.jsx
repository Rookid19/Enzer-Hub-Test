import React, { useEffect, useState } from "react";

function Task7() {
  const [number, setNumber] = useState(null);
  const [divisibleState, setDivisibleState] = useState({
    threeAndFive: "",
  });

  const divisor = (input) => {
    if (input % 3 === 0 && input % 5 === 0) {
      console.log("FizzBuzz");
      setDivisibleState({ ...divisibleState, threeAndFive: "FizzBuzz" });
    }else{
        setDivisibleState({ ...divisibleState, threeAndFive: null });
    }
  };

  useEffect(() => {
    if (number !== null) {
      divisor(number);
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
        {divisibleState?.threeAndFive}
      </h3>
    </div>
  );
}

export default Task7;
