import React, { useContext, useReducer } from "react";
import { MarketContext } from "./MarketContext";
import DataReducer from "./DataReducer";

export const useData = () => {
  const { state, dispatch } = useContext(MarketContext);
  return [state, dispatch];
};

export const MarketState = ({ children }) => {
  const initialState = {
    data: [{data:''},{data:''},{data:''},{data:''},{data:''}],
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  return (
    <MarketContext.Provider
      value={{
        state: state,
        dispatch: dispatch
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};
