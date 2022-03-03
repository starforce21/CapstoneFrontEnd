import StockService from "../services/StockService";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tables from "./Tables";

function Portfolio() {
  const [data, setData] = useState([]);
  useEffect(() => {
    StockService.getStocks().then((res) => setData(res.data));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="body2">
      <div className="container2">
        <table className="table2">
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
        </table>
        <div className="container3">
          <table className="table2">
            <tbody>
              {data.map((data) => (
                <Tables data={data} key={data.id} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="addDiv">
        <button className="bn29" onClick={() => navigate("/add-stock")}>Add To Holding</button>
      </div>
      </div>
    </div>
  );
}

export default Portfolio;
