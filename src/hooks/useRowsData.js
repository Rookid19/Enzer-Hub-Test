import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { rows } from "../utils/Data";

export const RowsContext = createContext({});

export const RowsProvider = ({ children }) => {
  const [elementMatch, setElementMatch] = useState(0);
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);

  const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // whenever there is a change in firstArray, secondArray and third Array the useEffect fucntion fires
  useEffect(() => {
    if (rows[0].name === "1st") {
      console.log("row 1 ---> " + firstArray.sort());
    }
    if (rows[1].name === "2nd") {
      console.log("row 2 ---> " + secondArray.sort());
    }
    if (rows[2].name === "3rd") {
      console.log("row 3 ---> " + thirdArray.sort());
    }
  }, [firstArray, secondArray, thirdArray]);

  const onSelectAll = (label, index) => {
    labels.forEach((value) => {
      if (index === value) {
        if (firstArray.indexOf(label) === -1) {
          setFirstArray((prev) => [...prev, prev === label ? null : label]);
        }
        if (secondArray.indexOf(label) === -1) {
          setSecondArray((prev) => [...prev, prev === label ? null : label]);
        }
        if (thirdArray.indexOf(label) === -1) {
          setThirdArray((prev) => [...prev, prev === label ? null : label]);
        }
      }
    });
  };

  const onClear = (label) => {
    const first_index = firstArray.indexOf(label);
    const second_index = secondArray.indexOf(label);
    const third_index = thirdArray.indexOf(label);

    if (first_index !== -1) {
      firstArray.splice(first_index, 1);
    }
    if (second_index !== -1) {
      secondArray.splice(second_index, 1);
    }
    if (third_index !== -1) {
      thirdArray.splice(third_index, 1);
    }
    setFirstArray((prev) => [...prev]);
    setSecondArray((prev) => [...prev]);
    setThirdArray((prev) => [...prev]);
  };

  // will only recompute the memoized value when one of the dependencies has changed.
  const memo_value = useMemo(
    () => ({
      elementMatch,
      setElementMatch,
      firstArray,
      secondArray,
      thirdArray,
      setFirstArray,
      setSecondArray,
      setThirdArray,
      onSelectAll,
      onClear
    }),
    [
      elementMatch,
      setElementMatch,
      firstArray,
      secondArray,
      thirdArray,
      setFirstArray,
      setSecondArray,
      setThirdArray,
      onSelectAll,
      onClear
    ]
  );

  return (
    <RowsContext.Provider value={memo_value}>{children}</RowsContext.Provider>
  );
};

export default function useRows() {
  return useContext(RowsContext);
}
