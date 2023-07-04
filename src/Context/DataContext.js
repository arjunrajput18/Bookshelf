import { createContext, useContext, useReducer } from "react";
import { Data } from "../Data/Data";
import { DataReducer } from "../Reducer/DataReducer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(DataReducer, {
    bookData: Data
  });

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
