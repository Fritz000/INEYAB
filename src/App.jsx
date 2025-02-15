import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import OurCharges from './pages/OurCharges'
import Services from './pages/Services'
import {Routes, Route,} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/OurCharges' element={<OurCharges />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      </div>
      
    </div>
  )
}

export default App
