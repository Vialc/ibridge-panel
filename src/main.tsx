import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClientProvider, QueryClient } from 'react-query'

import './global.css'
import { DataContextProvider } from './contexts/Data/DataProvider'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
