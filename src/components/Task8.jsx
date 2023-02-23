import axios from "axios";
import React, { useEffect, useState } from "react";


function Task8() {
  const [data, setData] = useState([]);

  /**
   * This code defines an asynchronous function fetchData() that uses the axios library to make a 
   * GET request to the URL "https://jsonplaceholder.typicode.com/users"
   * If the request is successful, the function sets the retrieved data (res.data) to the data state variable
   *  using the setData() function. If the request fails, it displays an alert message with the error message.
   */

  const fetchData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((error) => alert(error));
  };

  /**
 *The callback function first calls the fetchData() function, which uses the Axios library to make a GET request to an external API endpoint.
 *The returned data is then set as the component's state using the setData function.
 *Next, the callback function sets up an interval using the setInterval function. 
 *This interval will execute the fetchData function every 60 seconds (or 1 minute). 
 *The setInterval function returns an ID that is stored in the interval constant.
 
 *Finally, the useEffect hook returns a cleanup function that clears the interval using the clearInterval function.
 *This ensures that the interval is stopped when the component is unmounted or when the useEffect hook is re-run due to a change in its dependencies.
 *
 * @return {*} 
 */
  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
