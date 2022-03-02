import React, { useState } from "react";

function Form(props) {
  let [ticker, setTicker] = useState({
    ticker: "",
  });
  const handleChange = (event) => {
    setTicker(x=>{
        return {...x,[event.target.id]:event.target.value.toUpperCase()}
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitForm(ticker);
  };

  return (
    <div className="searchbar1">
    <form onSubmit={handleSubmit} className="cf">
      <label htmlFor="ticker"></label>
      <input 
        placeholder="Search by tickers"
        id="ticker" 
        onChange={handleChange} 
        value={ticker.ticker} 
        className="quickInput"/>
      <button className="quickButton">Search</button>
    </form>
    </div>
  );
}

export default Form;
