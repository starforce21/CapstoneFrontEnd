import React from 'react';

function HomeData(props) {
    return (
        <div className="DataBox" style={props.data.d>0 ? {color: "green"}:{color: "red"}}>
            <p>Ticker: {props.data.ticker}</p>
            <p>Current Price: {props.data.c}</p>
            <p>Day Change: {props.data.d}</p>
            <p>Day Change Percentage: {props.data.dp}%</p>
            <p>Day High: {props.data.h}</p>
            <p>Day Low: {props.data.l}</p>
            <p>Opening Price: {props.data.o}</p>
            <p>Previous Closing Price: {props.data.pc}</p>  
        </div>
    );
}

export default HomeData;