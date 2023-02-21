import { createContext, useContext, useMemo } from "react";

// Context lets components pass information deep down without explicitly passing props
export const FomulaContext = createContext({});

//The provider is used to create a context that can be consumed
export const FomulaProvider = ({ children }) => {
  // concantenating arrays in this form ----> "1,2|4,6|7,3||"
  const concatenateArrays = (row) => {
    // map function to transform each inner array into a string of its elements joined by commas,
    //  and then use the join function to concatenate the resulting strings with the delimiter |.
    const result = row.map((innerArr) => innerArr.join(",")).join("|");
    return result;
  };


  // will only recompute the memoized value when one of the dependencies has changed.
  const memo_value = useMemo(
    () => ({
      concatenateArrays,
    }),
    [concatenateArrays]
  );
  return (
    <FomulaContext.Provider value={memo_value}>
      {children}
    </FomulaContext.Provider>
  );
};

//Creating a useFomla function to export the formula context globally through the entire app
export default function useFomula() {
  return useContext(FomulaContext);
}
