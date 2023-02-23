import axios from "axios";
import React, { useEffect, useState } from "react";

function Task8() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // fetchDataInterval();
  return (
    <div>
      <table>
        <tbody>
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
            <th>phone</th>
            <th>website</th>
            <th>company name</th>
            <th>catch phrase</th>
            <th>bs</th>
          </tr>
          {data.map(
            ({ id, name, username, address, phone, website, company }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{address.street}</td>
                <td>{address.suite}</td>
                <td>{address.city}</td>
                <td>{address.zipcode}</td>
                <td>{address.geo.lat}</td>
                <td>{address.geo.lng}</td>
                <th>{phone}</th>
                <th>
                  <a href={`http://${website}`}>{website}</a>{" "}
                </th>
                <th>{company.name}</th>
                <th>{company.catchPhrase}</th>
                <th>{company.bs}</th>
              </tr>
            )
          )}
        </tbody>
      </table>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Task8;
