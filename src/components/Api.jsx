import axios from "axios";
import React from "react";

function Api() {
  const host = "http://192.168.2.19:3001";



  const fetch5d = async () => {
    await axios
      .get(`${host}/5d`)
      .then((res) => console.log(res.data))
      .catch((e) => alert(e));
  };

  return (
    <div>
      <button onClick={fetch5d}>5d</button>
    </div>
  );
}

export default Api;
