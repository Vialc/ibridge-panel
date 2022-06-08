import { Drawler } from './components/Drawler'
import { MainPage } from './pages/MainPage/MainPage'

import { useQuery } from "react-query";
import { useState } from "react";
import { useApi } from './hooks/useApi';
import { DataType } from './types/DataTypes';
import { dividerClasses } from '@mui/material';

function App() {

  // const api = useApi();
  // const [dataState, setDataState] = useState({} as DataType);
  // const { data, error, isLoading } = useQuery("data", api.getDataFromApi)

  // if (isLoading) return <div>Loading...</div>

  // if (data) {
  //   setDataState(data)
  //   const dataString = JSON.stringify(data)
  //   localStorage.setItem('recentData', dataString)
  // }

  return (
    <div className="App">
      <div className="grid h-screen grid-cols-12 grid-rows-2 gap-1">
        <Drawler />
        <MainPage />
      </div>
    </div>
  )
}

export default App
