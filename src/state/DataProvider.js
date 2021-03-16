import React, { useReducer } from "react";
import reducer from "./reducers";
import { initialState, Store } from "./store";

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default DataProvider;
