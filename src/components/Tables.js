import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Tables(props) {
    const navigate = useNavigate();
    const [ApiData,setApiData]=useState({c:0})
    const getApiData=(e)=>
    {
    axios.get(`https://finnhub.io/api/v1/quote?symbol=${e.toUpperCase()}&token=c7o2nliad3idf06mljtg`)
    .then(res=>
    {
        setApiData(res.data)
        console.log(ApiData)
    })
    }
    const rounding=(number)=>Math.round(number*100)/100
    console.log(props.data.ticker)
    return (
            <tr style={ApiData.c===0 ? {color: "#3700B3"}:(ApiData.c-props.data.purchasePrice)*props.data.quantity>0 ? {color: "green"}:{color: "red"}}>
                <td>{props.data.ticker}</td>
                <td>{props.data.company}</td>
                <td>{rounding(props.data.quantity*props.data.purchasePrice)}</td>
                <td>{ApiData.c!==0 ? rounding(ApiData.c*props.data.quantity) : 'Press Refresh to get Data'}</td>
                <td>{ApiData.c!==0 ? rounding((ApiData.c-props.data.purchasePrice)*props.data.quantity) : 'Press Refresh to get Data'}</td>
                <td>{ApiData.c!==0 ? rounding((ApiData.c-props.data.purchasePrice)/props.data.purchasePrice*100)+"%" : 'Press Refresh to get Data'}</td>
                <td className='actiontd'>
                  <div className='multi-button'>
                  <button onClick={() => navigate(`/delete-stock/${props.data.ticker}`)}>Delete</button>
                  <button onClick={() => navigate(`/update-stock/${props.data.ticker}`)}>Update</button>
                  <button onClick={() => navigate(`/view-stock/${props.data.ticker}`)}>View</button>
                  <button onClick={() => getApiData(props.data.ticker)}>Refresh</button>
                  </div>
                </td>
              </tr>
    );
}

export default Tables;