import Form from "./From";
import React, { useState } from 'react';
import axios from "axios";
import HomeData from "./HomeData";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";


function Home() {
    const data = useContext(DataContext)
    const submitForm=(value)=>{
        let url=`https://finnhub.io/api/v1/quote?symbol=${value.ticker}&token=c7o2nliad3idf06mljtg`
        axios.get(url)
        .then(res=>{
            res.data.ticker=value.ticker
            data.setData(prevState=>[...prevState,res.data])
            console.log(data.data)
        })
    }
    return (
        <div className="homepage">
            <Form submitForm={submitForm}/>
            <div className="flex">
             {data.data.map((data,index)=>{
                return <HomeData data={data} key={index} />
            })}   
            </div>
            
        </div>
    );
}

export default Home;