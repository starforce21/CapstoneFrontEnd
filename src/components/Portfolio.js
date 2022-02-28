import StockService from "../services/StockService";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const [data, setData] = useState([]);
  useEffect(() => {
    StockService.getStocks().then((res) => setData(res.data));
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate("/add-stock")}>Add</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Company</th>
              <th>Basis Total</th>
              <th>Current Value</th>
              <th>Change</th>
              <th>Total Gain/Loss</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr key={data.id}>
                <td>{data.ticker}</td>
                <td>{data.company}</td>
                <td>{data.quantity}</td>
                <td>{data.purchasePrice}</td>
                <td>change</td>
                <td>change</td>
                <td>
                  <button onClick={() => navigate(`/delete-stock/${data.ticker}`)}>Delete</button>
                  <button onClick={() => navigate(`/update-stock/${data.ticker}`)}>Update</button>
                  <button onClick={() => navigate(`/view-stock/${data.ticker}`)}>View</button>
                  <button>refresh</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Portfolio;
