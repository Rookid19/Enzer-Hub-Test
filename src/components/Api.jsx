import axios from "axios";
import React from "react";

function Api() {
  const host = "http://192.168.2.19:3001";



  const fetchData = async (id) => {
    await axios
      .get(`${host}/${id}`)
      .then((res) => console.log(res.data))
      .catch((e) => alert(e));
  };

  return (
    <div>
      <button onClick={() => fetchData("5d")}>5d</button>
      <button onClick={() => fetchData("3d")}>3d</button>
      <button onClick={() => fetchData("fast4")}>5d</button>
      <button onClick={() => fetchData("double")}>5d</button>

    </div>
  );
}

export default Api;
