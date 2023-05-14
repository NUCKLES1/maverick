import React from "react";
import Navbar from "../component/Navbar";
export const About = () => {
  return (
    <div className="container-div">
      <Navbar />
      <div className="content-about">
        <div className="about-field">
          <p>About us</p>
        </div>
        <div className="continue">
          <h1>Empathy-driven Front-end Developer.</h1>
          <img className="developer" src="code.jpg" alt="" />
          <h2>What exactly is Maverick?</h2>
          <p>
            Maverick code courses is a local area of individuals all over the world who are
            figuring out how to code together.
          </p>
          <h2>
            How will freeCodeCamp help me learn to
            <span className="bmo"> code?</span>
          </h2>
          <p>
            You'll figure out how to code by building many activities bit by bit
            - squarely in your browser, code editor, or versatile application.
            You'll also get a verified certifications along the way.
          </p>
          <img className="movie" src="movies.png" alt="" />
          <h2>Can Maverick code courses help me get a job as a software developer?</h2>
          <p>
          Indeed. Consistently, a great many individuals who join the Maverick 
          code courses group get their most memorable programming designer work. 
          Assuming that you're interested, you can
          </p>
          <h2>How can I support the Maverick code community?</h2>
          <p>
          We are a very donation-efficient charity, and every and any currency you donate will
           help us provide more than 50 hours of learning to
            people around the world.
          </p>
          <h2>How long will it take me to finish each of 
            Maverick code certifications?</h2>
          <p>
          Each certification takes around 300 hours of dedicated learning. Some people may
           take longer. These certifications are completely self-paced, so take as long as you need.
          </p>
          <h2>Is Maverick code courses a replacement for a 4-year degree?</h2>
          <p>
          No. Please don’t drop out of college just to pursue 
          MaverickCode course. You can pursue both concurrently
          . Even though you don’t need a 4-year degree to work
           as a software developer, it still helps a lot.


          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
