import React from "react";
import Navbar from "../component/Navbar";
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
          <a href="https://flutterwave.com/pay/lpcbgdnu32yz">
            <button className="add_button">Join now</button>
          </a>
        </div>
        <div className="part">
          <img src="rename.jpg" alt="" />
        </div>
      </div>
      <div className="recomend-block6">
        <div className="blue">
          <img src="girly.png" alt="" />
        </div>
        <div className="leftbar">
          <h2>What will you get?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum
            dui mollis . Suspendisse nulla :
          </p>
          <div className="textdiv">
          <div className="div">
              <h3>1-on-1 lessons in more than 150 languages</h3>
              <p>Learn from certified teachers with proven experience...</p>
            </div>
          </div>
          <div className="textdiv">
          <div className="div">
              <h3>1-on-1 lessons in more than 150 languages</h3>
              <p>Learn from certified teachers with proven experience...</p>
            </div>
          </div>
          <div className="textdiv">
            <div className="div">
              <h3>1-on-1 lessons in more than 150 languages</h3>
              <p>Learn from certified teachers with proven experience...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="recomend-block7">
        <div className="divi">
          <h2>Learn more than just coding 😍</h2>
          <p>Over 100,000 students join us monthly</p>
          <div classname="fle">
          <img src="piple.png" alt=""/>
          <p>and more</p>
          </div>
        </div>
        <button className="bit">Get your lesson now</button>
      </div>
      <Footer />
    </div>
  );
};

export default Coursehtml;
