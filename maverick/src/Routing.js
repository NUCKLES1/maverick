import React from 'react'
import { Route,Routes } from 'react-router-dom'
import App from './App'
import Coursehtml from './pages/Coursehtml'
import Coursereact from './pages/Coursereact'
import Dataanal from './pages/Dataanal'
import About from './pages/About'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Htmlcourse" element={<Coursehtml />} />
            <Route path="/Reactcourse" element={<Coursereact />} />
            <Route path="/Dataanal" element={<Dataanal />} />
            <Route path="/About" element={<About />} />
        </Routes>
    </div>
  )
}

export default Routing