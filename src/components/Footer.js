import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="newsletter d-flex">
              <div className="col-5">
                <div className='d-flex flex-wrap text-white'>
                  <h5>Register Now So You Don't Miss Our Programs</h5>
                </div>
              </div>
              <div className="col-7">
                <div>
                  <div class="input-group mb-0">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your Email"
                      aria-label="Enter your Email"
                      aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2">Subcribe Now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between py-5' style={{ borderBottom: "1px solid #ccd1d2" }}>
              <div className='col-5 menu-link'>
                <div className='d-flex justify-content-between'>
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to='/category'>Category</NavLink>
                  <NavLink to='/about'>About</NavLink>
                  <NavLink to='contact'>Contact</NavLink>
                </div>
              </div>
              <div className="col-3 social-media">
                <div>
                  <div className="d-flex justify-content-between">
                    <img src="images/facebook.png" alt="facebook" />
                    <img src="images/twitter.png" alt="twitter" />
                    <img src="images/instagram.png" alt="instagram" />
                    <img src="images/youtube.png" alt="youtube" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-between copyright">
              <div>
                <p>&copy; {new Date().getFullYear()} Monito. All rights reserved</p>
              </div>
              <div>
                <img src="images/logo.png" alt="logo footer" />
              </div>
              <div>
                <div className="d-flex justify-content-between gap-48">
                  <div>
                    <Link to='/termofservice'>Term of Service</Link>
                  </div>
                  <div>
                    <Link to='/privacypolicy'>Privacy Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer