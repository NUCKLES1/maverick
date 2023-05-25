import React from 'react'
import Navbar from '../component/Navbar'
import Payment from './Payment'
import Footer from '../component/Footer'

const Dataanal = () => {
  return (
    <div className="App">
    <Navbar />
    <div className="block1">
      <img className="background1" src="data.jpg" alt="" />
      <h2>
      Learn Data Analysis using the best system by our experienced
                tutors.
      </h2>
    </div>
    <Payment />
    <Footer />
  </div>
  )
}

export default Dataanal