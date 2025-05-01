import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './App.jsx'
import { BodyChat } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <BodyChat />
  </StrictMode>,
)
