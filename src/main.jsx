import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Playercontextprovider from './context/Playercontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Beginner-Spotify-Clone">
      <Playercontextprovider>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Playercontextprovider>
    </BrowserRouter>
  </StrictMode>
)
