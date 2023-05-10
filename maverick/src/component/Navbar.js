import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navBar">
        <div className="logo">
          <h2><img className="App-logo" src="verified.png" alt="" /> Maverick</h2>
          <img className="menu" src="menu.png" alt="" />
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
          <div className="navlink">
            <Link to="/"><p>Home</p></Link>          
            <p>Explore</p>
            <p>About</p>
            <p>SIgn in</p>
            <button className="get">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
