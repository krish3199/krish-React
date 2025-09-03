import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Nav.css'
import './Hero.css'
import App from './App.jsx'
import { Nav } from './Nav.jsx'
import { Hero } from './Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Hero/>
  </StrictMode>,
)
