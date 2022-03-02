import StockService from "../services/StockService";
import React, { useEffect, useState } from "react";
import axios from "axios";

function WatchList() {
  const [data, setData] = useState([]);
  const [ticker, setTicker] = useState({ ticker: "" });
  useEffect(() => {
    getNewData();
  }, []);
  const getNewData = () => {
    StockService.getTickers().then((res) =>
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
  };
  const handleChange = (event) => {
    setTicker((x) => {
      return { ...x, [event.target.id]: event.target.value };
    });
  };
  const saveTicker = (e) => {
    e.preventDefault();
    let stockTicker = {
      ticker: ticker.ticker,
    };
    StockService.createTicker(stockTicker)
      .then(() => {
        setData([]);
        getNewData();
      })
      .catch((err) => {
        console.log("record not saved.");
      });
  };
  const deleteTicker = (e) => {
    StockService.deleteTicker(e).then(() => {
      setData(data.filter((x) => x.ticker !== e));
    });
  };
  console.log(data);
  return (
    <div>
      <form>
        <div className="searchbar1">
          <label></label>
          <input
            placeholder="Input Ticker Here"
            id="ticker"
            className="form-control"
            value={data.ticker}
            onChange={handleChange}
          />
        <button onClick={saveTicker}> Add Ticker </button>
        </div>
      </form>
      <div className="container1">
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
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr
                key={i}
                style={data.d > 0 ? { color: "green" } : { color: "red" }}
              >
                <td>{data.ticker}</td>
                <td>{data.c}</td>
                <td>{data.d}</td>
                <td>{data.dp}</td>
                <td>{data.h}</td>
                <td>{data.l}</td>
                <td>{data.o}</td>
                <td>{data.pc}</td>
                <td>
                  <button onClick={() => deleteTicker(data.ticker)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchList;
