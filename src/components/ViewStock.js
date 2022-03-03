import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StockService from '../services/StockService';

function ViewStock() {
    let {ticker}=useParams()
    const [data,setData]=useState({})
    const [stock,setStock]=useState({})
    useEffect(() => {
        StockService.getStockByTicker(ticker).then(res => setData(res.data[0]))}, []);
    useEffect(()=>{
        axios.get(`https://finnhub.io/api/v1/quote?symbol=${ticker.toUpperCase()}&token=c7o2nliad3idf06mljtg`).then(res=>setStock(res.data))
    },[]);
    return (
        <div className='flexbox'>
            <div>
            <p>Company Name: {data.company}</p>
            <p>Ticker: {data.ticker}</p>
            <p>Quantity: {data.quantity}</p>
            <p>Purchase Price: {data.purchasePrice}</p>
            <p>Cost Basis: {(data.purchasePrice*data.quantity).toFixed(2)}</p>
            <p>Current Price: {stock.c}</p>
            <p>Current Value: {(stock.c*data.quantity).toFixed(2)}</p>
            <p style={stock.d>=0 ? {color: "green"}:{color: "red"}}>Day Change: {stock.d} </p>
            <p style={stock.d>=0 ? {color: "green"}:{color: "red"}}>Day Change %: {stock.dp} %</p>
            <p style={(stock.c-data.purchasePrice)>=0 ? {color: "green"}:{color: "red"}}>Total Gain/Loss: {((stock.c-data.purchasePrice)*data.quantity).toFixed(2)}</p>
            <p style={(stock.c-data.purchasePrice)>=0 ? {color: "green"}:{color: "red"}}>Total Gain/Loss: {((stock.c-data.purchasePrice)/data.purchasePrice*100).toFixed(2)} %</p>
            </div>
        </div>
    );
}

export default ViewStock;