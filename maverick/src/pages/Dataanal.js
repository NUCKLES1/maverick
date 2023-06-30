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
    <div className="border"></div> 
      <div className="listHolder">
        <div className="dete1">
        <h1>Platinum</h1>
          <p className="coloring">15,000</p>
          <div className="achieve">
            <h5>* Guaranteed Certificate</h5>
            <h5>* Full tutorial</h5>
            <h5>* Immense training with our foreign tutuors</h5>
            <h5>* Team task training</h5>
            <h5>* Intership availability</h5>
            <h5>* Duration 3/6 months</h5>
          </div>
          <a href="https://flutterwave.com/pay/ylg8rm7ha4zb">
            <button className="add_button">Join now</button>
          </a>
        </div>
        <div className="part">
          <img src="rename.jpg" alt="" />
        </div>
      </div>
    <Footer />
  </div>
  )
}

export default Dataanal