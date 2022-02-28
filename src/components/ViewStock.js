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
    console.log(ticker)
    return (
        <div>
            <p>Company Name: {data.company}</p>
            <p>Ticker: {data.ticker}</p>
            <p>Quantity: {data.quantity}</p>
            <p>Purchase Price: {data.purchasePrice}</p>
            <p>Cost Basis: {data.purchasePrice*data.quantity}</p>
            <p>Current Price: {stock.c}</p>
            <p>Current Value: {stock.c*data.quantity}</p>
            <p>Day Change: {stock.d} {stock.dp}</p>
            <p>Total Gain/Loss: {(stock.c-data.purchasePrice)*data.quantity}</p>
        </div>
    );
}

export default ViewStock;