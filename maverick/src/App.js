import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { Link } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="block1">
          <h3>Upgrade your skills for a better future</h3>
          <img className="background" src="background.png" alt="" />
          <img className="people" src="art.png" alt="" />
        </div>
        <div className="recomend">
          <div className="recomend-block1">
            <div>
              <h2>Recommendation courses for you</h2>
              <p>Need help finding the right course?</p>
              <button className="press">Our courses</button>
            </div>
          </div>
          <div className="recomend-block2">
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
        <div className="recomend-block3">
          <h2>Why Maverick?</h2>
          <div className="courses1">
            <div className="case">
              <img src="homes.png" alt="" />
              <h3>Learn from home</h3>
              <p>
                Access all courses from the comfort of your home to enhance
                learning independently.
              </p>
            </div>
            <div className="case">
              <img src="case.png" alt="" />
              <h3>Case study</h3>
              <p>
                Projects that are built on real work and you can make a
                portfolio.
              </p>
            </div>
            <div className="case">
              <img src="chat (2).png" alt="" />
              <h3>Discussion 24/7</h3>
              <p>
                We are always there for you if have difficulty learning the
                course.
              </p>
            </div>
          </div>
        </div>
        <div className="recomend-block4">
          <h2>Discover Roadmap</h2>
          <div className="all">
            <button>Html 5</button>
            <button>Next Js</button>

            <button>Tailwind Css</button>
            <button>Fanilla JavaScript</button>

            <button>User Interface Design</button>
            <button>User Interface Design</button>

            <button>Digital Marketing</button>
            <button>Data Analysis</button>

            <button>Data Science</button>
            <button>Software Engineering</button>
          </div>
        </div>
        <div className="recomend-block5">
          <h2>
            Acquire Certificate <img src="medal.png" alt="" />
          </h2>
          <div className="vid-section">
            <div className="vid-holder">
              <img src="" alt="" />
            </div>
            <p>
              Certificate will be given at the end of your trainning based on
              your performance and also get an internship offer of your
              choosing, to help boost your experience and give you a higher
              advantage towards getting a job.
            </p>

            <span>Learn More</span>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
