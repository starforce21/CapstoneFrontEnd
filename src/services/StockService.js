import axios from 'axios';

const Stock_API_BASE_URL= "https://perscholas-capstone.herokuapp.com/api";
class StockService{

    getStocks(){
       return axios.get(Stock_API_BASE_URL+"/allstocks");
    }

    getTickers(){
        return axios.get(Stock_API_BASE_URL+"/alltickers");
    }

    getOneTickers(ticker){
        return axios.get(Stock_API_BASE_URL+"/watchlist/"+ticker);
    }

    createStock(stock){
        return axios.post(Stock_API_BASE_URL+"/addstock",stock);
    }

    createTicker(ticker){
        return axios.post(Stock_API_BASE_URL+"/addticker",ticker);
    }

    getStockByTicker(ticker){
        return axios.get(Stock_API_BASE_URL+"/ticker/"+ticker);
    }

    getStockByName(company){
        return axios.get(Stock_API_BASE_URL+"/company/"+company);
    }

    updateStock(stock,ticker){
        return axios.put(Stock_API_BASE_URL+"/stock/"+ticker,stock);
    }

    deleteStock(ticker){
        return axios.delete(Stock_API_BASE_URL+"/stock/"+ticker);
    }

    deleteTicker(ticker){
        return axios.delete(Stock_API_BASE_URL+"/ticker/"+ticker);
    }

}

export default new StockService();