import React, { useState } from "react";

function Form(props) {
  let [ticker, setTicker] = useState({
    ticker: "",
  });
  const handleChange = (event) => {
    setTicker(x=>{
        return {...x,[event.target.id]:event.target.value}
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitForm(ticker);
  };

  return (
    <form onSubmit={handleSubmit} className="cf">
      <label htmlFor="ticker">Ticker:</label>
      <input 
        id="ticker" 
        onChange={handleChange} 
        value={ticker.ticker} />
      <button>Submit</button>
    </form>
  );
}

export default Form;
