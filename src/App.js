import React from "react";
import { MarketState } from "./contexts/MarketState";
import MarketData from "./components/MarketData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amazon from "./components/Amazon";
import Apple from "./components/Apple";
import Facebook from "./components/Facebook";
import Google from "./components/Google";
import Microsoft from "./components/Microsoft";
import Tesla from "./components/Tesla";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./App.css";
import { DataProvider } from "./contexts/DataContext";

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
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="/amazon" element={<Amazon />} />
            <Route path="/apple" element={<Apple />} />
            <Route path="/facebook" element={<Facebook />} />
            <Route path="/google" element={<Google />} />
            <Route path="/microsoft" element={<Microsoft />} />
            <Route path="/tesla" element={<Tesla />} />
          </Routes>
        </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
