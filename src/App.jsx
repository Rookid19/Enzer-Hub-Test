import React, { useEffect, useState } from "react";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";
import "./App.css";
import { rows } from "./utils/Data";
import Task6 from "./components/Task6";
import Task7 from "./components/Task7";
import Task8 from "./components/Task8";
import Task10 from "./components/Task10";
import Task9 from "./components/Task9";
import Task11 from "./components/Task11";
import Task12 from "./components/Task12";
import Task13 from "./components/Task13";
import Task14 from "./components/Task14";
import SelectClear from "./components/SelectClear";
import Task15 from "./components/Task15";
import Task16 from "./components/Task16";
import Timer from "./components/Timer";
import Api from "./components/Api";
import FiveGroupSixty from "./components/FiveGroupSixty";
import Games from "./components/Games";

export default function App() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div className="page_section">
        <button className="page_button" onClick={() => setPage(1)}>
          Tasks
        </button>
        <button className="games" onClick={() => setPage(2)}>
          Games
        </button>
      </div>
      {page === 1 ? (
        <>
          <Timer />
          <Api />
          <FiveGroupSixty />
          <Task1 />
          <Task2 />
          <h1>TASK 4 and 5</h1>
          {rows.map((row) => (
            <div className="first_row" key={row.id}>
              <Task4 row={row} />
              <Task5 row={row} />
            </div>
          ))}
          <SelectClear />
          <Task6 />
          <Task7 />
          <Task8 />
          <Task9 />
          <Task10 />
          <Task11 />
          <Task12 />
          <Task13 />
          <Task14 />
          <Task15 />
          <Task16 />
        </>
      ) : (
        <Games />
      )}

      <br />
      <br />
      <br />
    </div>
  );
}
