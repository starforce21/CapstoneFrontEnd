import React from "react";
import { MarketState } from "./contexts/MarketState";
import MarketData from "./components/MarketData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import { DataProvider } from "./contexts/DataContext";
import AddStock from "./components/AddStock";
import UpdateStock from "./components/UpdateStock";
import ViewStock from "./components/ViewStock";
import DeleteStock from "./components/DeleteStock";
import "./App.css";
import WatchList from "./components/WatchList";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <div className="App">
          <MarketState>
            <MarketData />
          </MarketState>
          <Nav />
          <Routes>
            <Route path="/Mod2/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/add-stock" element={<AddStock />} />
            <Route path="/update-stock/:ticker" element={<UpdateStock />} />
            <Route path="/view-stock/:ticker" element={<ViewStock />} />
            <Route path="/delete-stock/:ticker" element={<DeleteStock />} />
          </Routes>
        </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
