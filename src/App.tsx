import { Drawler } from './components/Drawler'
import { MainPage } from './pages/MainPage/MainPage'
import { GeneralContextProvider } from './contexts/DataGeneral/GeneralProvider';
import { ClientContextProvider } from './contexts/DataClient/ClientProvider';

function App() {

  return (
    <div className="App">
      <div className="grid h-screen grid-cols-12 grid-rows-2 gap-1">
        <Drawler />
        <GeneralContextProvider>
          <ClientContextProvider>
            <MainPage />
          </ClientContextProvider>
        </GeneralContextProvider>
      </div>
    </div>
  )
}

export default App
