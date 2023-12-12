import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as B } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <B>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </B>
)
