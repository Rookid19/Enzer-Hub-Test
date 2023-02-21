import { createContext, useContext, useMemo, useState } from "react";

export const RowsContext = createContext({});

export const RowsProvider = ({ children }) => {
  const [elementMatch, setElementMatch] = useState(0);
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);
  const [fourthArray, setFourthArray] = useState([]);
  const [fifthArray, setFifthArray] = useState([]);

  const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  
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
        if (fourthArray.indexOf(label) === -1) {
          setFourthArray((prev) => [...prev, prev === label ? null : label]);
        }
        if (fifthArray.indexOf(label) === -1) {
          setFifthArray((prev) => [...prev, prev === label ? null : label]);
        }
      }
    });
  };

  const onClear = (label) => {
    const first_index = firstArray.indexOf(label);
    const second_index = secondArray.indexOf(label);
    const third_index = thirdArray.indexOf(label);
    const fourth_index = fourthArray.indexOf(label);
    const fifth_index = fifthArray.indexOf(label);

    if (first_index !== -1) {
      firstArray.splice(first_index, 1);
    }
    if (second_index !== -1) {
      secondArray.splice(second_index, 1);
    }
    if (third_index !== -1) {
      thirdArray.splice(third_index, 1);
    }
    if (fourth_index !== -1) {
      fourthArray.splice(third_index, 1);
    }
    if (fifth_index !== -1) {
      fifthArray.splice(third_index, 1);
    }
    setFirstArray((prev) => [...prev]);
    setSecondArray((prev) => [...prev]);
    setThirdArray((prev) => [...prev]);
    setFourthArray((prev) => [...prev]);
    setFifthArray((prev) => [...prev]);
  };

  // will only recompute the memoized value when one of the dependencies has changed.
  const memo_value = useMemo(
    () => ({
      elementMatch,
      setElementMatch,
      firstArray,
      secondArray,
      thirdArray,
      fourthArray,
      fifthArray,
      setFirstArray,
      setSecondArray,
      setThirdArray,
      setFourthArray,
      setFifthArray,
      onSelectAll,
      onClear,
    }),
    [
      elementMatch,
      setElementMatch,
      firstArray,
      secondArray,
      thirdArray,
      fourthArray,
      fifthArray,
      setFirstArray,
      setSecondArray,
      setThirdArray,
      setFourthArray,
      setFifthArray,
      onSelectAll,
      onClear,
    ]
  );

  return (
    <RowsContext.Provider value={memo_value}>{children}</RowsContext.Provider>
  );
};

export default function useRows() {
  return useContext(RowsContext);
}
