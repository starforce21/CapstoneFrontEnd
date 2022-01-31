import axios from "axios";
import React, { useState, useEffect } from "react";
import Data from "./Data";

function Apple() {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2022-01-02/2022-01-31?adjusted=true&sort=asc&limit=120&apiKey=IbzW4PY8wxkA11GpBtVXPheMvKtGneHK"
      )
      .then((res) => {
        console.log(res); 
        setData(res.data.results);
        
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="stockTabs">
      <h1 className="tableTitle">Daily Performance YTD</h1>
      <table className="stockTable">
        <tbody>
          <tr>
            <th>Trading Day</th>
            <th>Closing Price</th>
            <th>Opening Price</th>
            <th>Day High</th>
            <th>Day Low</th>
            <th>Volume</th>
          </tr>
          {data.map((data, index) => {
            return <Data data={data} key={index} day={index + 1} />;
          })}
        </tbody>
      </table>
    </div>
  );
}


export default Apple;