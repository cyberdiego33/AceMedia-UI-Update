import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NavBar, { InputArea, BodyChat } from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <BodyChat />
    <InputArea />
  </StrictMode>
)
