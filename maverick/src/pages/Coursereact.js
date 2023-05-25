import React from "react";
import Navbar from "../component/Navbar";
import Payment from "./Payment";
import Footer from "../component/Footer";

const Coursereact = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="block1">
        <img className="background1" src="react.jpg" alt="" />
        <h2>
          Learn to code using React,TypeScript,Node js and other programming
          language.
        </h2>
      </div>
      <Payment />
      <Footer />
    </div>
  );
};

export default Coursereact;
