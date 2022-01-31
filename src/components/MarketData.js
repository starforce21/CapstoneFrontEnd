import React, { useEffect } from "react";
import { useData } from "../contexts/MarketState";
import { getData} from "../contexts/DataAction";


const MarketData = () => {
  const [ state, stateDispatch] = useData();
  const { data } = state;
  
  const getInfoHandler =async() => {
    await getData(stateDispatch);
  };

  useEffect(() => {
    getInfoHandler();
  },[]);

  return (
    <div className="header">
      <div className="marketdata">
        <div>
          SPY(S&P): {data[0].data.c}
        </div>
        <div>
        <p style={data[0].data.d>0 ? {color: "green"}:{color: "red"}}>{Math.round(data[0].data.dp*100)/100}%({data[0].data.d})</p>
        </div>
      </div>
      <div className="marketdata">
        <div>
          QQQ(Nasdaq 100): {data[1].data.c}
        </div>
        <div>
        <p style={data[1].data.d>0 ? {color: "green"}:{color: "red"}}>{Math.round(data[1].data.dp*100)/100}%({data[1].data.d})</p>
        </div>
      </div>
      <div className="marketdata">
        <div>
          DIA(DJI Average): {data[2].data.c}
        </div>
        <div>
        <p style={data[2].data.d>0 ? {color: "green"}:{color: "red"}}>{Math.round(data[2].data.dp*100)/100}%({data[2].data.d})</p>
        </div>
      </div>
      <div className="marketdata">
        <div>
          VEA(Developed Markets): {data[3].data.c}
        </div>
        <div>
        <p style={data[3].data.d>0 ? {color: "green"}:{color: "red"}}>{Math.round(data[3].data.dp*100)/100}%({data[3].data.d})</p>
        </div>
      </div>
      <div className="marketdata">
        <div>
          VWO(Emerging Markets): {data[4].data.c}
        </div>
        <div >
          <p style={data[4].data.d>0 ? {color: "green"}:{color: "red"}}>{Math.round(data[4].data.dp*100)/100}%({data[4].data.d})</p>
        </div>
      </div>
    </div>
  );
};

export default MarketData;
