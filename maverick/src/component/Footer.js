import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
 <div className="holding">
      <div className="lastbox">
        <h1>Reach Out!</h1>
        <div className="layout">
          <div className="linklayout">
            <button className="link1">
              <span>danyxcharge@gmail.com</span>
              <h3>E-mail</h3>
            </button>
            <button className="link1">
              <span>Nuckles Daan</span>
              <h3>Linkedin</h3>
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="name">
          <span>Maverick</span>
        </div>
        <div className="footer-content">
          <div className="line"></div>
          <div className="about">
            <h5>About</h5>
            <h5>Github</h5>
          </div>
          <div className="line"></div>
        </div>
        <div className="copyright">
          <div className="social">
          <h5>@ 2023 Daniel Derin</h5>
          </div>
          <div className="socials">
            <img className="media" src="twitter.png" alt="" />
            <img className="media" src="linkedin.png" alt="" />
            <img className="media" src="gmail.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer