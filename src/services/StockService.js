import axios from 'axios';

const Stock_API_BASE_URL= "http://localhost:8081/api";
class StockService{

    getStocks(){
       return axios.get(Stock_API_BASE_URL+"/allstocks");
    }

    createStock(stock){
        return axios.post(Stock_API_BASE_URL+"/addstock",stock);
    }

    getStockByTicker(ticker){
        return axios.get(Stock_API_BASE_URL+"/stock/"+ticker);
    }
    getStockByName(company){
        return axios.get(Stock_API_BASE_URL+"/stock/"+company);
    }

    updateStudent(stock,ticker){
        return axios.put(Stock_API_BASE_URL+"/stock/"+ticker,stock);
    }

    deleteStudent(ticker){
        return axios.delete(Stock_API_BASE_URL+"stock/"+ticker);
    }

}

export default new StockService();