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
  const deleteThisStock=(e)=>{
      e.preventDefault();
      StockService.deleteStock(ticker).then(res=>{navigate('/portfolio')})
  }
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Ticker: </label>
          <input
            placeholder="ticker"
            readOnly="true"
            name="ticker"
            className="form-control"
            value={data.ticker}
          />
        </div>
        <div className="form-group">
          <label>Company Name: </label>
          <input
            placeholder="Name"
            readOnly="true"
            name="name"
            className="form-control"
            value={data.company}
          />
        </div>
        <div className="form-group">
          <label>Quantity: </label>
          <input
            placeholder="quantity"
            readOnly="true"
            name="quantity"
            className="form-control"
            value={data.quantity}
          />
        </div>
        <div className="form-group">
          <label>Purchase Price </label>
          <input
            placeholder="Grade"
            readOnly="true"
            name="grade"
            className="form-control"
            value={data.purchasePrice}
          />
        </div>
        <button onClick={deleteThisStock}>Delete</button>
        <button onClick={() => navigate('/portfolio')}>Cancel</button>
      </form>
    </div>
  );
}

export default DeleteStock;
