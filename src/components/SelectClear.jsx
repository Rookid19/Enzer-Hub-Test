import React from "react";
import useRows from "../hooks/useRowsData";
import { button_labels } from "../utils/Data";

function SelectClear() {
  const { onSelectAll, onClear } = useRows();
  return (
    <div>
      <div className="all_select">
        {button_labels.map((label, index) => (
          <button
            key={label}
            className="button"
            onClick={() => onSelectAll(label, index)}
          >
            All
          </button>
        ))}
      </div>
      <div className="all_clear">
        {button_labels.map((label, index) => (
          <button
            key={label}
            className="button"
            onClick={() => onClear(label, index)}
          >
            Clear index{index}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectClear;
