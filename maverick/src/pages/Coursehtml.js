import React from "react";
import Navbar from "../component/Navbar";
import Payment from "./Payment";
import Footer from "../component/Footer";

const Coursehtml = () => {
  return (
    <div className="App">
        <Navbar />
      <div className="block1">
        <img className="background1" src="student.jpg" alt="" />
        <h2>
          Learn to code using Html,Css and Javascript programming language.
        </h2>
      </div>
      <Payment />
      <Footer />
    </div>
  );
};

export default Coursehtml;
