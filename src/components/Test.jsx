import React, { useState } from "react";

function Test() {
  const [array,setArray]  = useState([1, 2, 3, 4, 5, 6])
  const ab = () => {
    // Get the index of the element to be removed
    const index = array.indexOf(5);

    // Remove the element using the splice() method
    if (index > -1) {
      array.splice(index, 1);
    }

    console.log(array); // [1,
  };
  return (
    <div>
      Test
      <button onClick={ab}>Test</button>
    </div>
  );
}

export default Test;
