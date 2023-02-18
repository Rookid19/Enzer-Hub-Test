import axios from "axios";
import React from "react";

function Task8() {
  const fetchData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>street</th>
          <th>suite</th>
          <th>city</th>
          <th>zip code</th>
          <th>lat</th>
          <th>lng</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </table>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Task8;
