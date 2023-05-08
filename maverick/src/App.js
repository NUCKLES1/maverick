import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";

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
              <button className="press">Analysis Personalize</button>
            </div>
          </div>
          <div className="recomend-block2">
            <div className="courses">
              <img src="student.jpg" alt="" />
              <p>
                Learn to code using Html,Css and Javascript programming
                language.
              </p>
            </div>
            <div className="courses">
              <img src="react.jpg" alt="" />
              <p>
                Learn to code using React,TypeScript,Node js and other
                programming language.
              </p>
            </div>
            <div className="courses">
              <img src="data.jpg" alt="" />
              <p>
                Learn Data Analysis using the best system by our experienced
                tutors.
              </p>
            </div>
          </div>
        </div>
        <div className="recomend-block3">
          <h2>Why Maverick?</h2>
          <div className="courses1">
            <div className="case">
              <img src="" alt="" />
              <h3>Learn from home</h3>
              <p>
                Access all courses from the comfort of your home to enhance
                learning independently.
              </p>
              </div>
              <div className="case">
                <img src="" alt="" />
                <h3>Case study</h3>
                <p>
                 Projects that are built on real work and you can make a portfolio.
                </p>
              </div>
              <div className="case">
                <img src="" alt="" />
                <h3>Discussion 24/7</h3>
                <p>
                We are always there for you if have difficulty learning the course.
                </p>
              </div>
          </div>
        </div>
        <div className="recomend-block3">
        <h2>Discover Roadmap</h2>
        <div className="all-buttons">
          <button>User Interface Design</button>
          <button>Digital Marketing</button>
          <button>Data Analysis</button>
          <button>Data Science</button>
          <button>Software Engineering</button>
        </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
