import React from "react";
// import './NavbarHome.css'
import Styles from './NewNavbarHome.module.css'
import { Link } from "react-router-dom";
const NavbarHome = () => {
    // const [colorChange, setColorchange] = useState(false);
    // const changeNavbarColor = () => {
    //     if (window.scrollY >= 80) {
    //         setColorchange(true);
    //     }
    //     else {
    //         setColorchange(false);
    //     }
    // };
    // window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            {/* <div className="navHome--mj">
                <input type="checkbox" id="navHome--mj-check" />
                <div className="navHome--mj-header">
                    <div className="navHome--mj-title">
                        Axios
                    </div>
                </div>
                <div className="navHome--mj-btn">
                    <label htmlFor="navHome--mj-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="navHome--mj-links">
                    <Link to={'/'} >Home</Link>
                    <Link to={'/alumni_app'} >Alumni Network</Link>
                    <Link to={'/gallery'} >Gallery</Link>
                    <Link to={'/tech_events'}>Tech Events</Link>
                    <Link to={'/contact_us'} className="AboutusHomeNav">Contact Us</Link>
                    <Link to={'/login_signup'} className="FormParentmj"><div className="LoginHomeNav">Login</div></Link>
                    <Link to={'/login_signup'} className="FormParentmj"><div className="SignUpHomeNav">Sign Up</div></Link>
                </div>
                
            </div> */}

            <header className={Styles.header} data-header>
                <div className={Styles.container}>

                    <a href="#" className={Styles.logo}>
                        <h4 className={Styles.pageTitle}>
                            College
                        </h4>
                    </a>

                    <nav className={Styles.navbar} data-navbar>

                        <div className={Styles["navbar-top"]}>
                            {/* <a href="#" className={Styles.logo}>
                                <img src="./assets/images/logo.svg" width="119" height="37" alt="Wren logo" />
                            </a> */}

                            <button className={Styles["nav-close-btn"]} aria-label="close menu" data-nav-toggler>
                                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                            </button>
                        </div>

                        <ul className={Styles["navbar-list"]}>

                            <li>
                                <Link to={'/'} className={`${Styles['navbar-link']} ${Styles['hover-1']}`} data-nav-toggler>Home</Link>
                            </li>

                            <li>
                                <Link to={'/alumni_app'} className={`${Styles['navbar-link']} ${Styles['hover-1']}`} data-nav-toggler>Alumni</Link>
                            </li>

                            <li>
                                <Link to={'/gallery'} className={`${Styles['navbar-link']} ${Styles['hover-1']}`} data-nav-toggler>Gallery</Link>
                            </li>

                            <li>
                                <Link to={'/users'} className={`${Styles['navbar-link']} ${Styles['hover-1']}`} data-nav-toggler>Users</Link>
                            </li>

                            <li>
                                <Link to={'/about_us'} className={`${Styles['navbar-link']} ${Styles['hover-1']}`} data-nav-toggler>About Us</Link>
                            </li>

                            <li>
                                <Link to={'/contact_us'} className={`${Styles['navbar-link']} ${Styles['hover-1']}`} data-nav-toggler>Contact Us</Link>
                            </li>

                            <li>
                                <Link to={'/login_signup'} id="navBtn" className={`${Styles['navbar-link']} ${Styles['hover-1']} ${Styles.navBtn}`} data-nav-toggler>Login/Sign Up</Link>
                            </li>

                        </ul>

                    </nav>

                </div>
            </header>
        </>
    )

} 

export default NavbarHome;