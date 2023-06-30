import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Courses = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <h2>Select a course</h2>

          <div className="recomend-block22">
            <div className="courses">
              <Link to="/Htmlcourse">
                <img src="student.jpg" alt="" />
                <p>
                  Learn to code using Html,Css and Javascript programming
                  language.
                </p>
              </Link>
            </div>
            <div className="courses">
              <Link to="/Reactcourse">
                <img src="react.jpg" alt="" />
                <p>
                  Learn to code using React,TypeScript,Node js and other
                  programming languages.
                </p>
              </Link>
            </div>
            <div className="courses">
              <Link to="/Dataanal">
                <img src="data.jpg" alt="" />
                <p>
                  Learn Data Analysis using the best system by our experienced
                  tutors.
                </p>
              </Link>
            </div>
          </div>  
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
