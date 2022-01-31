import axios from "axios";

export const getData = async dispatch => {

  const requestSPY = await axios.get(`https://finnhub.io/api/v1/quote?symbol=SPY&token=c7o2nliad3idf06mljtg`)
  const requestQQQ = await axios.get(`https://finnhub.io/api/v1/quote?symbol=QQQ&token=c7o2nliad3idf06mljtg`)
  const requestDIA = await axios.get(`https://finnhub.io/api/v1/quote?symbol=DIA&token=c7o2nliad3idf06mljtg`)
  const requestVEA = await axios.get(`https://finnhub.io/api/v1/quote?symbol=VEA&token=c7o2nliad3idf06mljtg`)
  const requestVWO = await axios.get(`https://finnhub.io/api/v1/quote?symbol=VWO&token=c7o2nliad3idf06mljtg`)
  axios.all([requestSPY,requestQQQ,requestDIA,requestVEA,requestVWO])
  .then(res => {
    console.log(res)
      const result = res;
      console.log(result)
      dispatch({
        type: "SET_DATA",
        payload: result
      });
    })
    .catch(error => console.log(error))
};
