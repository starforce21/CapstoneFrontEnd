import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StockService from "../services/StockService";

function DeleteStock() {
  const navigate = useNavigate();
  let { ticker } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    StockService.getStockByTicker(ticker).then((res) => setData(res.data[0]));
  }, []);
  const deleteThisStock = (e) => {
    e.preventDefault();
    StockService.deleteStock(ticker).then((res) => {
      navigate("/portfolio");
    });
  };
  return (
    <div className="body3">
      <div className="form">
        <div class="title">Holding</div>
        <div class="subtitle">Let's add new stock to your holding</div>
        <form>
          <div className="input-container ic1">
            <input
              placeholder=" "
              id="ticker"
              className="input"
              value={data.ticker}
              readOnly={true}
            />
            <div class="cut"></div>
            <label className="placeholder">Stock Ticker</label>
          </div>
          <div className="input-container ic2">
            <input
              placeholder=" "
              id="company"
              className="input"
              value={data.company}
              readOnly="true"
            />
            <div class="cut"></div>
            <label className="placeholder">Company Name</label>
          </div>
          <div className="input-container ic2">
            <input
              placeholder=" "
              id="quantity"
              className="input"
              value={data.quantity}
              readOnly="true"
            />
            <div class="cut cut-short"></div>
            <label className="placeholder">Quantity </label>
          </div>
          <div className="input-container ic2">
            <input
              placeholder=" "
              id="purchasePrice"
              className="input"
              value={data.purchasePrice}
              readOnly="true"
            />
            <div class="cut"></div>
            <label className="placeholder">Purchase Price</label>
          </div>
          <button className="submit" onClick={deleteThisStock}>
            {" "}
            Delete{" "}
          </button>
          <button className="submit" onClick={() => navigate("/portfolio")}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteStock;
