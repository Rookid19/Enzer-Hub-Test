import { createContext, useContext, useMemo } from "react";

// Context lets components pass information deep down without explicitly passing props
export const FormulaContext = createContext({});

//The provider is used to create a context that can be consumed
export const FormulaProvider = ({ children }) => {
  /**
   * The concatenateArrays function takes in an array of arrays, where each inner array contains a row of data.
   * The function then returns a string that concatenates all of the elements in the inner arrays together,
   * separated by commas within each row and separated by vertical bars between rows.
   *
   * eg.[[1,2],[4,6],[7,3],[],[]] should return an answer in this format 1,2|4,6|7,3||
   *
   * @param {*} row
   * @return {*}
   */
  const concatenateArrays = (row) => {
    const result = row.map((innerArr) => innerArr.join(",")).join("|");
    return result;
  };

  /**
   *
   * This is a function named getNumCombinations that calculates the number of combinations
   * of k items that can be chosen from a set of n items.
   * where n is the total number of user selection
   * and k is number to form a bet this function get the number of combinations
   * @param {*} n
   * @param {*} k
   * @return {*}
   */
  const getNumCombinations = (n, k) => {
    // calculate the binomial coefficient
    let numerator = 1;
    for (let i = n; i > n - k; i--) {
      numerator *= i;
    }
    let denominator = 1;
    for (let i = 1; i <= k; i++) {
      denominator *= i;
    }

    return numerator / denominator;
  };

  /**
   * Returns the result array, which contains all possible combinations of
   *
   * @param {*} arr
   * @param {*} k
   * @return {*}
   */
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

  function getCombinations1(array, r) {
    const result = [];

    // Recursive function to generate combinations
    function generateCombos(combination, index) {
      if (combination.length === r) {
        result.push(combination);
        return;
      }

      if (index >= array.length) {
        return;
      }

      const newCombo = [...combination];
      newCombo.push(array[index]);

      generateCombos(newCombo, index + 1);
      generateCombos(combination, index + 1);
    }

    generateCombos([], 0);
    return result;
  }

  /*This code is using the useMemo hook to memoize an object with three functions: concatenateArrays, getNumCombinations, and getCombinations.
  *The useMemo hook is used to avoid unnecessary calculations by caching the result of a function or computation.
  *It takes two arguments: a function that returns a value, and an array of dependencies. If any of the dependencies change,
  * the function is re-evaluated, and the result is cached until the dependencies change agai
  /** @type {*} */
  const memo_value = useMemo(
    () => ({
      concatenateArrays,
      getNumCombinations,
      getCombinations,
      getCombinations1,
    }),
    [concatenateArrays, getNumCombinations, getCombinations, getCombinations1]
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
