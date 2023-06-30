import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
export const About = () => {
  return (
    <div className="container-div">
      <Navbar />
      <div className="content-about">
        <div className="about-field">
          <p>About us</p>
        </div>
        <div className="continue">
          <h1>Maverick</h1>
          <img className="developer" src="learn.jpg" alt="" />
          <h2>What exactly is Maverick?</h2>
          <p>
            Maverick code courses is a local area of individuals all over the world who are
            figuring out how to code together.
          </p>
          <h2>
            How will Maverick help me learn to
            <span className="bmo"> code?</span>
          </h2>
          <p>
            You'll figure out how to code by building many activities bit by bit
            - squarely in your browser, code editor, or versatile application.
            You'll also get a verified certifications along the way.
          </p>
          <img className="movie" src="just.jpg" alt="" />
          <h2>Can Maverick code courses help me get a job as a software developer?</h2>
          <p>
          Indeed. Consistently, a great many individuals who join the Maverick 
          code courses group get their most memorable programming designer work. 
          Assuming that you're interested, you can
          </p>
          <h2>How can I support the Maverick code community?</h2>
          <p>
          We are a very donation-efficient charity, and every and any currency you donate will
           help us provide more than 50 hours of learning to help
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
          <h2>Why is Maverick not available for free?</h2>
          <p>
          Maverick is simply not free because we only employ
           top developer which will give their very best as your tutor instead of having 
           people who will do it for free,and also don,t 
           want them so feel like they are doing a favour
            which might make them feel reluctant toward teaching.
          <br />But currently we are trying to make it free which is why we allow our student pay just 10% of the innitial cost of learning with high and top Developers.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
