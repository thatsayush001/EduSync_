import React from "react";
import Styles from "./Footer.module.css";
import { Fb, Tt, insta, ytube, Lkdin, phone, maiL, Locat } from "../../../assets/index";
function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles["footer-container"]}>
                <div className={Styles["left-col"]}>
                    <div className={Styles.logo}></div>
                    <div className={`${Styles["social-media"]} ${Styles.flex}`}>
                        {/* <a href="#">
                            <img src={Fb} />
                        </a>
                        <a href="#">
                            <img src={insta} />
                        </a>
                        <a href="#">
                            <img src={Tt} />
                        </a>
                        <a href="#">
                            <img src={ytube} />
                        </a>
                        <a href="#">
                            <img src={Lkdin} />
                        </a> */}
                    </div>
                    <br />
                    <br />

                    <br />
                    <p>
                        <img src={Locat} /> Indian Institute Of
                        Information Technology , Lucknow
                        <br />
                        Ahmamau,Lucknow - 226002
                    </p>
                    <br />
                    <p>
                        <img src={phone} /> +91-8112295450
                        <br /><br />
                        <img src={maiL} /> AXios@iiitl.ac.in
                    </p>
                </div>
                <div className={Styles["right-col"]}>
                    <h1 style={{ color: "#fff" }}>Write To Us At</h1>
                    <div className={Styles.border}></div>
                    <br />
                    <p>Enter Your Email to get our News and updates.</p>
                    <form className={Styles["newsletter-form"]}>
                        <input
                            className={Styles.textb}
                            type="email"
                            placeholder="Enter Your Email"
                        />
                    </form>
                        <input className={Styles.btn} type="submit" value="Submit" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;