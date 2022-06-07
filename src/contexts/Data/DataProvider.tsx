import { useState } from "react";
import { DataType } from "../../types/DataTypes";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }: { children: JSX.Element }) => {
  const [dataState, setDataState] = useState({} as DataType);
  return (
    <DataContext.Provider
      value={{
        dataState,
        setDataState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export { DataContextProvider };