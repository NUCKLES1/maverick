import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="block1">
          <h3>Upgrade your skills for a better future</h3>
         <img className='background' src="background.png" alt="" />
         <img className='people' src="art.png" alt="" />
        </div>
        <div className="recomend">
          <div className="recomend-block1">
            <div>
           <h2>Recommendation courses for you</h2>
           <p>Need help finding the right course?</p>
           <button className="press">
            Analysis Personalize
           </button>
           </div>
          </div>
          <div className="recomend-block2">
            <div className="courses">
              <img src="student.jpg" alt="" />
              <p>Learn to code using Html,Css and Javascript programming language.</p>
            </div>
            <div className="courses">
              <img src="react.jpg" alt="" />
              <p>Learn to code using React,TypeScript,Node js and other programming language.</p>
            </div>
            <div className="courses">
              <img src="data.jpg" alt="" />
              <p>Learn Data Analysis using the best system by our experienced tutors.</p>
            </div>
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
