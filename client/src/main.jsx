import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SearchContextProvider } from './context/searchContext.jsx'
import { AuthProvider } from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthProvider>
  </React.StrictMode>,
)
