import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StockService from "../services/StockService";

function AddStock() {
  const navigate = useNavigate();
  let [data, setData] = useState({
    ticker: "",
    company: "",
    quantity: "",
    purchasePrice: "",
  });
  const handleChange = (event) => {
    setData((x) => {
      return { ...x, [event.target.id]: event.target.value };
    });
  };
  const saveStock = (e) => {
    e.preventDefault();
    let stock = {
      ticker: data.ticker,
      company: data.company,
      quantity: data.quantity,
      purchasePrice: data.purchasePrice,
    };
    console.log(stock)
    StockService.createStock(stock)
      .then((res) => {
        navigate("/portfolio");
      })
      .catch((err) => {
        console.log("record not saved.");
      });
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Stock Ticker: </label>
          <input
            placeholder="Ticker"
            id="ticker"
            className="form-control"
            value={data.ticker}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Company Name: </label>
          <input
            placeholder="Company Name"
            id="company"
            className="form-control"
            value={data.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Quantity: </label>
          <input
            placeholder="Quantity"
            id="quantity"
            className="form-control"
            value={data.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Purchase Price: </label>
          <input
            placeholder="Purchase Price"
            id="purchasePrice"
            className="form-control"
            value={data.purchasePrice}
            onChange={handleChange}
          />
        </div>
        <button onClick={saveStock}> Save </button>
        <button onClick={() => navigate("/portfolio")}>Cancel</button>
      </form>
    </div>
  );
}

export default AddStock;
