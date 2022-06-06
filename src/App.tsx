import { useState } from 'react'
import { Drawler } from './components/Drawler'
import { MainPage } from './pages/MainPage/MainPage'

function App() {
  const [count, setCount] = useState(0)

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
