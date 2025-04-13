
import { useState } from 'react'
import './App.css'
import { LandingPage1 } from './pages/LandinPage1'

function App() {
  return (
    <div className="grid grid-cols-2">
          <Card/>
          
    </div>
  )
}

export default App


const Card = () => {
  
  return (
    <LandingPage1/>
  )
}