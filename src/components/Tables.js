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
    
    return (
            <tr style={ApiData.c==0 ? {color: "green"}:(ApiData.c-props.data.purchasePrice)*props.data.quantity>0 ? {color: "green"}:{color: "red"}}>
                <td>{props.data.ticker}</td>
                <td>{props.data.company}</td>
                <td>{props.data.quantity*props.data.purchasePrice}</td>
                <td>{ApiData.c!==0 ? ApiData.c*props.data.quantity : 'Press Refresh to get Data'}</td>
                <td>{ApiData.c!==0 ? (ApiData.c-props.data.purchasePrice)*props.data.quantity : 'Press Refresh to get Data'}</td>
                <td>{ApiData.c!==0 ? ((ApiData.c-props.data.purchasePrice)/props.data.purchasePrice*100).toFixed(2)+"%" : 'Press Refresh to get Data'}</td>
                <td>
                  <button onClick={() => navigate(`/delete-stock/${props.data.ticker}`)}>Delete</button>
                  <button onClick={() => navigate(`/update-stock/${props.data.ticker}`)}>Update</button>
                  <button onClick={() => navigate(`/view-stock/${props.data.ticker}`)}>View</button>
                  <button onClick={() => getApiData(props.data.ticker)}>Refresh</button>
                </td>
              </tr>
    );
}

export default Tables;