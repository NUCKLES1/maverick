import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navBar">
        <div className="logo">
          <h2>Maverick</h2>
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
            <p>Home</p>
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
