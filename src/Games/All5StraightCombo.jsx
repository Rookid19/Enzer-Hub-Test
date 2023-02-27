import React, { useCallback, useEffect, useState } from "react";
import useFormula from "../hooks/useFormula";
import { button_labels, prices, rows, task5_buttons } from "../utils/Data";

function All5StraightCombo({ gameDescription }) {
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);
  const [fourthArray, setFourthArray] = useState([]);
  const [fifthArray, setFifthArray] = useState([]);
  const [bets, setBets] = useState(null);
  const [totalPrice, setTotalPrice] = useState(1);

  const selectArray = (row) => {
    const array =
      row.id === 1
        ? firstArray
        : row.id === 2
        ? secondArray
        : row.id === 3
        ? thirdArray
        : row.id === 4
        ? fourthArray
        : fifthArray;

    return array;
  };

  const selectSetArray = (row) => {
    const setArray =
      row.id === 1
        ? setFirstArray
        : row.id === 2
        ? setSecondArray
        : row.id === 3
        ? setThirdArray
        : row.id === 4
        ? setFourthArray
        : setFifthArray;

    return setArray;
  };

  /**
   *This code defines a function onSelect that takes in a parameter label.
   *The function modifies an array (array) based on whether the label is
   *already present in the array or not.
   *The first line of the function checks if the array already contains the label by calling the includes method on the array.
   *If the label is already present in the array, the function finds the index of the label in the array using the indexOf method and
   *removes the label from the array using the splice method.
   * @param {*} label
   */
  const onSelect = (label, row) => {
    const array = selectArray(row);
    const setArray = selectSetArray(row);

    if (array.includes(label)) {
      const index = array.indexOf(label);
      array.splice(index, 1);
      setArray((prev) => [...prev]);
    } else {
      setArray((prev) => [...prev, label]);
    }
  };

  const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const even = button_labels.filter((item) => item % 2 === 0);
  const odd = button_labels.filter((item) => item % 2 !== 0);
  const small = button_labels.slice(0, 5);
  const big = button_labels.slice(5, 10);

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

  /**
   *This code defines a function called select that takes a label parameter as input.
   *The select function uses conditional statements (if/else if) to determine what action
   *to take based on the value of the label parameter.
   *eg.
   *If the label parameter is equal to "even", the select function calls the setArray function with the value of the even array as its argument.
   * @param {*} label
   */
  const select = useCallback(
    (label, row) => {
      const setArray = selectSetArray(row);
      if (label === "even") {
        setArray(even);
      } else if (label === "clear") {
        setArray([]);
      } else if (label === "odd") {
        setArray(odd);
      } else if (label === "small") {
        setArray(small);
      } else if (label === "big") {
        setArray(big);
      } else if (label === "all") {
        setArray(labels);
      }
    },
    [big, even, odd, small, labels]
  );

  const results =
    firstArray.length *
    secondArray.length *
    thirdArray.length *
    fourthArray.length *
    fifthArray.length *
    5;

  useEffect(() => {
    setBets(results);
  }, [onSelect]);

  return (
    <div className="container">
      <div className="title_section">
        <p className="title">{gameDescription.name}</p>
        <p className="title">{gameDescription.rules}</p>
      </div>

      {rows.slice(0, 5).map((row) => (
        <div className="row" key={row.id}>
          <div className="row_name_section">
            <span id="row_name">{gameDescription.rowName[row.id - 1]}</span>
          </div>
          <div className="button_container">
            {button_labels.map((label) => (
              <button
                className="button"
                style={{
                  backgroundColor: selectArray(row)?.includes(label)
                    ? "green"
                    : null,
                }}
                key={label}
                onClick={() => onSelect(label, row)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="button_container">
            {task5_buttons.map(({ id, label }) => (
              <button
                className="button2"
                key={id}
                onClick={() => select(label, row)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="all_select2">
        {button_labels.map((label, index) => (
          <button
            key={label}
            className="button2"
            onClick={() => onSelectAll(label, index)}
          >
            All
          </button>
        ))}
      </div>
      <div className="price_section">
        {prices.map((price, index) => (
          <button
            key={index}
            id="price"
            onClick={() => setTotalPrice(price)}
            style={{ backgroundColor: totalPrice === price ? "red" : null }}
          >
            {price}
          </button>
        ))}
      </div>

      <div className="results_section">
        <span>
          {bets} bets. Total {totalPrice * bets}
        </span>
      </div>
    </div>
  );
}

export default All5StraightCombo;
