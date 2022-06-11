import { useState } from "react";
import DataContext from "./DataContext";

import { useData } from "../../hooks/useData";

const DataContextProvider = ({ children }: { children: JSX.Element }) => { 
  
    const localData = JSON.parse(localStorage.getItem('recentData')!)

    const [dataState, setDataState] = useState(localData);
  

  const { data, error, isLoading } = useData()

  if (isLoading) return <div>Loading...</div>

  if (data) {
    const dataString = JSON.stringify(data)
    localStorage.setItem('recentData', dataString)

  }



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