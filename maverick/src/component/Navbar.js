import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react"
import "../App.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [show, setShow] = useState(false);
  

  return (
    <div className="container">
      <div className="navBar">
        <div className="logo">
          <h2><img className="App-logo" src="verified.png" alt="" /> Maverick</h2>
        </div>
        <div className="naviBar">
          <div className="form">
            <img className="search-button" src="/search.png" alt="" />
            <form id="searchinput">
              <input
                className="search"
                type="text"
                placeholder="Search Courses"
              />
            </form>
          </div>
          <nav className="navli">
            <Link to="/"><p className="home">Home</p></Link>          
            <Link to="/About"><p className="home">About</p></Link>
            <Link to="/About"><p className="home">Courses</p></Link>
            <a href="https://flutterwave.com/donate/6hnuefdfqraj"><button className="get">Donate</button></a>
          </nav> 
          {show ?
          <nav className="navlink">
            <Link to="/"><p className="home">Home</p></Link>          
            <Link to="/About"><p className="home">About</p></Link>          
            <Link to="/Courses"><p className="home">Courses</p></Link>

            <button className="cancel"><FaTimes className="x" onClick={() => setShow(false)}/></button>
          </nav> : null}
          <button className="nav-btn">
              <FaBars className="FaBars" onClick={() => setShow(true)}/>
                     
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
