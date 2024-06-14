import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { Link } from "react-router-dom";
const HomeApp = () => {
  return (
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* <Navbar /> */}
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <br /><br />
        <br /><br /> <br /><br />

          <footer className='aboutUsFooter '>
            <div className="container w-8/12">

              <div className="card footer">

                <div className="section footer-top">

                  <div className="footer-brand">

                    <a href="#" className="logo">
                      {/* <img src="./assets/images/logo.svg" width="119" height="37" loading="lazy" alt="Wren logo" /> */}
                      <h3 className="headline headline-2 aside-title">
                        <span className="span" style={{ fontSize: "20px", fontWeight: "bolder" }}>Brute Force</span>
                      </h3>
                    </a>

                    <p className="footer-text" style={{ fontSize: "15px" }}>
                      Empowering students to achieve their highest potential through innovative education and diverse opportunities
                      . Join our inclusive community today and be a part of something big.
                    </p>

                    <p className="footer-list-title" style={{ fontSize: "18px" }}>Address</p>

                    <address className="footer-text address" style={{ fontSize: "15px" }}>
                      IIIT Lucknow <br />
                      CG City, Lucknow, U.P.
                    </address>

                  </div>

                  <div className="footer-list">

                    <p className="footer-list-title" style={{ fontSize: "20px" }}>Categories</p>

                    <ul>

                      <li>
                        <a href="#" className="footer-link hover-2">Comp. Prog.</a>
                      </li>

                      <li>
                        <a href="#" className="footer-link hover-2">Website Dev</a>
                      </li>

                      <li>
                        <a href="#" className="footer-link hover-2">Application Dev</a>
                      </li>

                      <li>
                        <a href="#" className="footer-link hover-2">Blockchain</a>
                      </li>

                      <li>
                        <a href="#" className="footer-link hover-2">Machine Learning</a>
                      </li>

                      <li>
                        <a href="#" className="footer-link hover-2">Foss & Design</a>
                      </li>

                      <li>
                        <a href="#" className="footer-link hover-2">Zephyr</a>
                      </li>

                      <li>
                        <a href="#" className="footer-link hover-2">Estrella</a>
                      </li>

                      <li>
                        <a href="#" className="footer-link hover-2">Crotonia</a>
                      </li>

                      <li>
                        <a href="#" className="footer-link hover-2">Afterdark</a>
                      </li>

                      <li>
                        <a href="#" className="footer-link hover-2">Goonj</a>
                      </li>

                      <li>
                        <a href="#" className="footer-link hover-2">Utkrisht</a>
                      </li>

                    </ul>

                  </div>

                  <div className="footer-list">

                    <p className="footer-list-title" style={{ fontSize: "20px" }}>Contact Us</p>

                    <p className="footer-text">
                      For any queries or assistance, please feel free to reach out to us at [insert contact details]. We'll be happy
                      to help you.

                    </p>

                    <div className="input-wrapper">
                      <input type="text" name="name" placeholder="Your name" required className="input-field about-input" autoComplete="off" style={{ fontSize: "16px" }} />

                      <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                    </div>

                    <div className="input-wrapper">
                      <input type="email" name="email_address" placeholder="Emaill address" required className="input-field about-input"
                        autoComplete="off" style={{ fontSize: "16px" }} />

                      <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                    </div>

                    <a href="#" className="btn btn-primary">
                      <span className="span" style={{ fontSize: "14px" }}><Link to={'/contact_us'}>Send Message</Link></span>

                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </a>

                  </div>

                </div>

                <div className="footer-bottom">

                  <p className="copyright">
                    &copy; Developed by <a href="#" className="copyright-link">bruteforce</a>
                  </p>

                  <ul className="social-list">

                    <li>
                      <a href="#" className="social-link">
                        <ion-icon name="logo-twitter"></ion-icon>

                        <span className="span">Twitter</span>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="social-link">
                        <ion-icon name="logo-linkedin"></ion-icon>

                        <span className="span">LinkedIn</span>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="social-link">
                        <ion-icon name="logo-instagram"></ion-icon>

                        <span className="span">Instagram</span>
                      </a>
                    </li>

                  </ul>

                </div>

              </div>

            </div>
          </footer>
        <br /><br />
        </div>
      </div>
  );
}

export default HomeApp;
