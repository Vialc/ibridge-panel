import { Drawler } from './components/Drawler'
import { MainPage } from './pages/MainPage/MainPage'
import { GeneralContextProvider } from './contexts/DataGeneral/GeneralProvider';
import { ClientContextProvider } from './contexts/DataClient/ClientProvider';
import { Route, Routes } from 'react-router-dom';
import { TreePage } from './pages/TreePage/TreePage';

function App() {

  return (
    <div className="App">
      <div className="grid bg-slate-200 h-screen grid-cols-12 grid-rows-2 gap-1">
        <Drawler />
        <GeneralContextProvider>
          <ClientContextProvider>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/tree" element={<TreePage />} />
            </Routes>
          </ClientContextProvider>
        </GeneralContextProvider>
      </div>
    </div>
  )
}

export default App
