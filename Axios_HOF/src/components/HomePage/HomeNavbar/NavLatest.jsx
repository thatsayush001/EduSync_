import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import '../../AboutUs/AboutUs.css';
import pic from "../../../assets/user.png"


const NavLatest = () => {
    const [isActive, setActive] = useState("true");
    const [isAct, setAct] = useState("true");

    const ToggleClass = () => {
        setActive(!isActive);
        setAct(!isAct);
    };
    let data = localStorage.getItem("loginMode");

  return (
    <div className={isAct ? "nav-active" : ""}>
          <header className="header aboutNav" data-header>
              <div className="container w-10/12">
                <div className='titleAbout'>
                  <a href="#" className="logoAbout">
                      Brute Force
                  </a>
                  <div className='borderBtm'></div>
                </div>

                  <nav className={isActive ? "navbar" : "navbar active" } data-navbar>

                      <div className="navbar-top">
                          <a href="#" className="logo">
                              {/* <img src="./assets/images/logo.svg" width="119" height="37" alt="Wren logo" /> */}
                              <div className='titleAbout'>
                                  <a href="#" className="logoAbout">
                                      Brute Force
                                  </a>
                                  <div className='borderBtm'></div>
                              </div>    
                          </a>

                          <button className="nav-close-btn" aria-label="close menu" onClick={ToggleClass} data-nav-toggler>
                              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                          </button>
                      </div>

                      <ul className="navbar-list" style={{ fontSize: "20px" }}>

                          <li>
                              <Link to={'/'} className="navbar-link hover-1" data-nav-toggler>Home</Link>
                          </li>

                          <li>
                              <Link to={'/alumni_app'} className="navbar-link hover-1" data-nav-toggler>Alumni</Link>
                          </li>

                          <li>
                              <Link to={'/gallery'} className="navbar-link hover-1" data-nav-toggler>Gallery</Link>
                          </li>

                          <li>
                              <Link to={'/users'} className="navbar-link hover-1" data-nav-toggler>Users</Link>
                          </li>

                          <li>
                              <Link to={'/about_us'} className="navbar-link hover-1" data-nav-toggler>About Us</Link>
                          </li>

                          <li>
                              <Link to={'/contact_us'} className="navbar-link hover-1" data-nav-toggler>Contact Us</Link>
                          </li>

                      </ul>

                      <div className="navbar-bottom">

                          <div className="profile-card">
                              <img src={pic} width="48" height="48" alt="Steven" className="profile-banner" />

                              <div>
                                  <p className="card-title">Hello Friend !</p>

                                  <p className="card-subtitle">
                                      This is the Brute Force team
                                  </p>
                              </div>
                          </div>

                          <ul className="link-list">

                              <li>
                                  <a href="#" className="navbar-bottom-link hover-1">Monark</a>
                              </li>

                              <li>
                                  <a href="#" className="navbar-bottom-link hover-1">Akshat</a>
                              </li>

                              <li>
                                  <a href="#" className="navbar-bottom-link hover-1">Aarjav</a>
                              </li>

                              <li>
                                  <a href="#" className="navbar-bottom-link hover-1">Ayush</a>
                              </li>

                              <li>
                                  <a href="#" className="navbar-bottom-link hover-1">Dhurv</a>
                              </li>

                              <li>
                                  <a href="#" className="navbar-bottom-link hover-1">Raghunandan</a>
                              </li>

                          </ul>

                      </div>


                  </nav>

                  <Link to={'/login_signup'} className="btn btn-primary" style={{ fontSize: "17px", display: (data == 1 || data ==2 ) ? "none" : "block" }}>Login / Sign Up</Link>
                  <Link to={'/dashboard'} className="btn btn-primary" style={{ fontSize: "17px", display: (data == 1 || data ==2 ) ? "block" : "none" }}>Dashboard</Link>

                  <button className="nav-open-btn" aria-label="open menu" onClick={ToggleClass} data-nav-toggler>
                      <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
                  </button>

              </div>
          </header>
    </div>
  )
}

export default NavLatest
