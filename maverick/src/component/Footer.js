import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
 <div className="holding">
      <div className="lastbox">
        <h1>Reach Out!</h1>
        <div className="layout">
          <div className="linklayout">  
          <a href="mailto:coursesmaverick@gmail.com?subject=How%20can%20we%20help%20you!">   
            <button className="link1">
              <span>coursesmaverick@gmail.com</span>
              <h3>E-mail</h3>
            </button>
            </a>
            <button className="link1">
              <span>Maverick</span>
              <h3>websites</h3>
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