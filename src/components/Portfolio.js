import StockService from "../services/StockService";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tables from "./Tables";
import {FaSort} from 'react-icons/fa';

function Portfolio() {
  const [sortState, setSortState]=useState(true)
  const [data, setData] = useState([]);
  useEffect(() => {
    StockService.getStocks().then((res) => setData(res.data));
  }, []);
  const navigate = useNavigate();
  const sortArray=()=>{
    let newArr=[...data]
    if(sortState){
      newArr.sort((a,b)=>(a.ticker>b.ticker)? 1:-1)
      setSortState(false)
    }
    else{
      newArr.sort((a,b)=>(a.ticker>b.ticker)? -1:1)
      setSortState(true)
    }
    setData(newArr)
  }
  return (
    <div className="body2">
      <div className="container2">
        <table className="table2">
          <thead>
            <tr>
              <th onClick={sortArray}>Ticker<FaSort/></th>
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
