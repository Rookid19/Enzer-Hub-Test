// import React, { useState, useEffect } from 'react';

// function App() {
//   const [draws, setDraws] = useState([]);
//   const [resetNums, setResetNums] = useState([]);

//   // Set up the interval to push 3 random numbers to the array every minute
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newDraw = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
//       setDraws(draws => [...draws, newDraw]);
//     }, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   // Reset the drawing numbers to the new set of 3 random numbers passed in as a parameter
//   const handleReset = (nums) => {
//     setDraws([]);
//     setResetNums(nums);
//     const newDraw = [nums[0], nums[1], nums[2]];
//     setDraws([newDraw]);
//   }

//   // Helper function to get a random number from 0-9
//   const getRandomNumber = () => {
//     return Math.floor(Math.random() * 10);
//   }

//   return (
//     <div>
//       <h1>Draws:</h1>
//       <ul>
//         {draws.map((draw, index) => (
//           <li key={index}>{draw.join(', ')}</li>
//         ))}
//       </ul>
//       <h2>Reset the drawing numbers:</h2>
//       <button onClick={() => handleReset([getRandomNumber(), getRandomNumber(), getRandomNumber()])}>Reset</button>
//       {resetNums.length > 0 && (
//         <p>Numbers reset to: {resetNums.join(', ')}</p>
//       )}
//     </div>
//   );
// }

// export default App;
