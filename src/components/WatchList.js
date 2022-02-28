import StockService from "../services/StockService";
import React, { useEffect, useState } from "react";
import axios from "axios";

function WatchList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    StockService.getStocks().then((res) =>
      res.data.map((x) => {
        axios
          .get(
            `https://finnhub.io/api/v1/quote?symbol=${x.ticker.toUpperCase()}&token=c7o2nliad3idf06mljtg`
          )
          .then((res) => {
            res.data.ticker = x.ticker;
            setData((prevState) => [...prevState, res.data]);
          });
      })
    );
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Current Price</th>
            <th>Day Change</th>
            <th>Day Change %</th>
            <th>Day High</th>
            <th>Day Low</th>
            <th>Opening Price</th>
            <th>Previous Closing Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => (
            <tr key={i} style={data.d>0 ? {color: "green"}:{color: "red"}}>
              <td>{data.ticker}</td>
              <td>{data.c}</td>
              <td>{data.d}</td>
              <td>{data.dp}</td>
              <td>{data.h}</td>
              <td>{data.l}</td>
              <td>{data.o}</td>
              <td>{data.pc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WatchList;
