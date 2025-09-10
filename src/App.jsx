import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Messages from './Messages'
import Profile from './Profile'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={< Card />} />
          <Route path="/play" element={<Card />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </>
    </Router>
  )
}

export default App
