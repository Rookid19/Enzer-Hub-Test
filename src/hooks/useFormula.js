import { createContext, useContext, useMemo } from "react";

// Context lets components pass information deep down without explicitly passing props
export const FormulaContext = createContext({});

//The provider is used to create a context that can be consumed
export const FormulaProvider = ({ children }) => {
  // concantenating arrays in this form ----> "1,2|4,6|7,3||"
  const concatenateArrays = (row) => {
    // map function to transform each inner array into a string of its elements joined by commas,
    //  and then use the join function to concatenate the resulting strings with the delimiter |.
    const result = row.map((innerArr) => innerArr.join(",")).join("|");
    return result;
  };

  // where n is the total number of user selection
  // and k is number to form a bet
  // this function get the number of combinations

  const getNumCombinations = (n, k, setAnswer) => {
    // calculate the binomial coefficient
    let numerator = 1;
    for (let i = n; i > n - k; i--) {
      numerator *= i;
    }
    let denominator = 1;
    for (let i = 1; i <= k; i++) {
      denominator *= i;
    }
    setAnswer(numerator / denominator);
    return numerator / denominator;
  };

  //This function get combination of numbers in pairs
  // output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
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

  // will only recompute the memoized value when one of the dependencies has changed.
  const memo_value = useMemo(
    () => ({
      concatenateArrays,
      getNumCombinations,
      getCombinations,
    }),
    [concatenateArrays, getNumCombinations, getCombinations]
  );
  return (
    <FormulaContext.Provider value={memo_value}>
      {children}
    </FormulaContext.Provider>
  );
};

//Creating a useFomla function to export the formula context globally through the entire app
export default function useFormula() {
  return useContext(FormulaContext);
}
