
import { onAuthStateChanged } from "firebase/auth";
import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Styles from "./LoginForm.module.css";
import sty from'./ForgotPass.module.css';
import { getAuth, signInWithRedirect } from "firebase/auth";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook"
// const auth = getAuth();
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FullScreenDialog from "../FullScreenDialog/FullScreenDialog";
import bcrypt from "bcryptjs-react"
// import { GoogleAuthProvider } from "firebase/auth";


export default function ForgotPass() {









    const [userid, setuserid] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // const token = sessionStorage.getItem("JWT");


    const resetPassWord = async (e) => {
        e.preventDefault();
        if (
            submitStudentName === false ||
            submitStudentFavAnimal === false ||
            submitStudentRepPass === false ||
            submitStudentPass === false
        ) {
            console.log("Wrong Information");
        } else {
            let form = e.currentTarget;
            try {
                let formFields = new FormData(form);
                let formDataObject = Object.fromEntries(formFields.entries());
                console.log(formDataObject)
                const hashedPass = bcrypt.hashSync(formDataObject.password, 10);
                formDataObject.password = hashedPass;

                fetch("http://localhost:8080/put/form", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(formDataObject)
                })
                    .then(() => {
                        console.log("Password Changed")
                        document.getElementById('autoclick').click();
                    })

            }
            catch (error) {
                console.error(`An has occured ${error}`);
            }

        }
    };

    //! Handles the sliding of blue div
    const signUpButton = () => {
        const container = document.getElementById("container");
        container.classList.add(Styles["right-panel-active"]);
        console.log("sign up button clicked");
        console.log(sLogin);
    };
    const signInButton = () => {
        const container = document.getElementById("container");
        container.classList.remove(Styles["right-panel-active"]);
    };

    const divStyle = {
        color: "red",
        fontSize: "14px",
        textAlign: "left",
    };

    //! Handles the checks applied on create new account section

    const [studentMessage, setstudentMessage] = useState("");
    const [submitStudentName, setsubmitStudentName] = useState(false);
    const [submitStudentFavAnimal, setsubmitStudenttFavAnimal] = useState(false);
    const [submitStudentPass, setsubmitStudentPass] = useState(false);
    const [submitStudentRepPass, setsubmitStudentRepPass] = useState(false);

    const valueOfStudentName = (event) => {
        const val = event.target.value;
        setsubmitStudentName(val);
        const regex = /[^a-zA-Z\s]/;
        console.log(val);
        if (val.length > 0 && regex.test(val)) {
            setstudentMessage("* Only alphabets allowed");
            setsubmitStudentName(false);
        } else {
            setstudentMessage("");
            setsubmitStudentName(true);
        }
    };
    const valueOfStudenttFavAnimal = (event) => {
        const val = event.target.value;
        setsubmitStudenttFavAnimal(val);
        const regex = /[^a-zA-Z\s]/;
        console.log(val);
        if (val.length > 0 && regex.test(val)) {
            setstudentMessage("* Only alphabets allowed");
            setsubmitStudenttFavAnimal(false);
        } else {
            setstudentMessage("");
            setsubmitStudenttFavAnimal(true);
        }
    };


    const [sgnUpPass, setSgnUpPass] = useState("")

    const valueOfStudentPassword = (event) => {
        const val = event.target.value;
        setsubmitStudentPass(val);
        setSgnUpPass(val)
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        // console.log(val);
        if (val.length < 8) {
            setstudentMessage("* Password must be of at least 8 characters");
            setsubmitStudentPass(false);
        } else if (val.length > 20) {
            setstudentMessage("* Password must be of at most 20 characters");
            setsubmitStudentPass(false);
        } else {
            if (!regex.test(val)) {
                setstudentMessage("* Password must have 1 Capital & 1 special chars");
                setsubmitStudentPass(false);
            } else {
                setstudentMessage("");
                setsubmitStudentPass(true);
            }
        }
    };

    const valueOfStudentRepPassword = (event) => {
        const val = event.target.value;
        setsubmitStudentRepPass(val);
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        if (val === sgnUpPass) {
            setstudentMessage("")
            if (val.length < 8) {
                setstudentMessage("* Password must be of at least 8 characters");
                setsubmitStudentPass(false);
            } else if (val.length > 20) {
                setstudentMessage("* Password must be of at most 20 characters");
                setsubmitStudentPass(false);
            } else {
                if (!regex.test(val)) {
                    setstudentMessage("* Password must have 1 Capital & 1 special chars");
                    setsubmitStudentPass(false);
                } else {
                    setstudentMessage("");
                    setsubmitStudentPass(true);
                }
            }
        }
        else {
            setstudentMessage("* Password NOT matching")
            setsubmitStudentPass(false);
        }
    };

    const [width, setWidth] = useState(window.innerWidth);

    //! Handles the display of which div is to be displayed at what time
    const [sLogin, setsLogin] = useState("true");
    const [Login, setLogin] = useState("true");

    setInterval(() => {
        setWidth(window.innerWidth);
    }, 900);

 













  return (
      <motion.div
          initial={{ opacity: 0, x: "-1000px", y: "-1000px" }}
          animate={{ opacity: 1, x: "0", y: "-1000px" }}
          exit={{ opacity: 0, x: "1000px", y: "1000px" }}
          transition={{ duration: 0.5 }}
      >
    <div className={sty.bigDiv}>
          <div
              className={`${Styles['form-container']} ${sty['form-container']} ${Styles['sign-in-container']}`}
              style={
                  width < 850
                      ? { display: Login ? "block" : "none" }
                      : { display: Login ? "block" : "block" }
              }
          >
              <div className={`${Styles.Login_cross} ${sty.crossSign}`}>
                  <Link to={'/login_signup'}>&times;</Link>
              </div>

              <form
                  className={`${Styles.Login_form_tag} ${Styles.Login_login} ${sty.form_log}`}
                  id="signinform"
                  onSubmit={(e) => {
                      resetPassWord(e);
                  }}
              >
                  <h1 className={`${Styles.Login_h1} ${sty.Resetpass}`}>Reset Password</h1>
                 
                  <input
                      className={Styles.Login_input_tag}
                      type="text"
                      placeholder="User Name"
                      name="userName"
                      onChange={valueOfStudentName}
                  />
                  <input
                      className={Styles.Login_input_tag}
                      type="text"
                      name="fav_animal"
                      placeholder="Favourite Animal"
                      onChange={valueOfStudenttFavAnimal}
                  />

                  <input
                      className={Styles.Login_input_tag}
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={valueOfStudentPassword}
                  />
                  <input
                      className={Styles.Login_input_tag}
                      type="password"
                      name="password"
                      placeholder="Retype Password"
                      onChange={valueOfStudentRepPassword}
                  />
                
                  <input value="Reset Password" 
                  className={`${Styles.Login_btn_tag} ${Styles.MainButtons} ${sty.ResetBtn}`} 
                  type="submit" 
                  name="submit"
                  form="signinform"/>
                      <div id="sUpStudentAlert" style={divStyle}>
                          {studentMessage}
                          <br />
                      </div>
              </form>
                  <Link to="/login_signup" id="autoclick" style={{ display: 'none' }}>click me</Link>
          </div>
    </div>
    </motion.div>
  )
}
