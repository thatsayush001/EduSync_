import { onAuthStateChanged } from "firebase/auth";
import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Styles from "./LoginForm.module.css";
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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

let checkerMj = 0;
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function LoginForm({checker , increment}) {
    const [userid, setuserid] = useState("");
    const [snackOpen, setSnackOpen] = React.useState(false);
    const handleSnackClose = (event, reason) => {
        

        setSnackOpen(false);
    };
    const token = sessionStorage.getItem("JWT");

    const google_login = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token);
                // The signed-in user info.
                const user = result.user;
                // userid=result.user;
                setuserid(result.user)
                localStorage.setItem("uid", result.user)
                // IdP data available using getAdditionalUserInfo(result)
                console.log(user);
                // ...
                // window.location.href = '/dashboard';
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                const email = error.customData.email;
                console.log(email);
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential);
                //
            });
        setTimeout(() => { }, 3000);
    };
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");



    const submitform = async (e) => {
        e.preventDefault();
        if (
            submitStudentName === false ||
            submitStudentEmail === false ||
            submitStudentPass === false
            ) {
            console.log("Invalid Info");
        } else {
            let form = e.currentTarget;

            try {
                let formFields = new FormData(form);
                let formDataObject = Object.fromEntries(formFields.entries());

                const hashedPass = bcrypt.hashSync(formDataObject.userPassword, 10);
                // console.log(hashedPass)
                formDataObject.userPassword= hashedPass;
                let ak = "4etw";
                console.log(formDataObject);
                
                fetch("http://localhost:8080/post/form",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(formDataObject)
                })
                .then(()=>{
                    console.log("New Student Added")
                })
                setSnackOpen(true);
                setTimeout(() => {
                    window.location.reload();
                }, 500);

            } 
            catch (error) {
                console.error(`An has occured ${error}`);
            }
    
        }
    };
    const submitAdminform = async (e) => {
        e.preventDefault()
            let adform = e.currentTarget;

            let url = adform.action;

            try {
                let adformFields = new FormData(adform);
                let adformDataObject = Object.fromEntries(adformFields.entries());
                // console.log(adformDataObject)
                let name = adformDataObject.adminName;
                let mail = adformDataObject.adminEmail;
                let pas = adformDataObject.adminPassword;
                let aid = adformDataObject.adminID;
                let r1 = /[^a-zA-Z\s]/;
                let r2 = /^[a-zA-Z0-9]+@iiitl\.ac\.in$/;
                let r3 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}$/;
                let r4 = /^[a-zA-Z]+@iiitl$/;
                if (r1.test(name)){
                    alert("Invalid Name");
                    return;
                }
                else if (!r2.test(mail)){
                    alert("Please Enter through College Mail Id");
                    return;
                }
                else if (!r4.test(aid)){
                    alert("Invalid College ID");
                    return;
                }
                else if(!(pas.length >= 8 && pas.length <=16)){
                    alert("password must be of length less than 16 and more than 8 chars");
                    return;
                }
                else if(!r3.test(pas)){
                    alert("Password must contain a special charactor and a capital letter.");
                    return;
                }
                else{
                    // console.log("object")
                    const hashedPass = bcrypt.hashSync(adformDataObject.adminPassword, 10);
                    adformDataObject.adminPassword = hashedPass;
                    fetch("http://localhost:8080/post/formadmin",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify(adformDataObject)
                    })
                    .then(()=>{
                        console.log("New Admin Added")
                    })
                    setSnackOpen(true);
                setTimeout(() => {
                    window.location.reload();
                }, 500);
                }


            } 
            catch (error) {
                e.preventDefault();
                console.error(`An Admin Level Error has occured : ${error}`);
            }
        
    };

    const loginner = async (e) => {
        e.preventDefault();
        let form = e.currentTarget;
    
        let formFields = new FormData(form);
        let formDataObject = Object.fromEntries(formFields.entries());

        let userName = formDataObject.loggerName;
        let userPassword = formDataObject.loggerPass;

        let adminName = formDataObject.loggerName;
        let adminPassword = formDataObject.loggerPass;
        // console.log(userName);
        // console.log(password);

        const obj = {
            userName,
            userPassword
        }
        console.log(obj);

        fetch(`http://localhost:8080/authenticate`,{
            mode:"cors",
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(obj)
        })
        .then((res)=>{
            console.log(res);
            return res.json();
        })
        .then((data)=>{
            console.log(data)
            if(data.user!=null){
                const userData={
                    dashboardName: userName
    
                }
                sessionStorage.setItem("JWT",data.jwtToken)
                console.log(checkerMj);
                localStorage.setItem("userData", JSON.stringify(userData));
                localStorage.setItem("loginMode", 1);
                checkerMj++;
                increment();
                console.log(checkerMj);
                document.getElementById('autoclick').click();   
            }
            else {
                console.log("Checking for Admin");
                // alert("User Do Not Exist");
                fetch(`http://localhost:8080/authenticateadmin`, {
                    mode: "cors",
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(obj)
                })
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((adData)=>{
                        console.log(adData);
                        if(adData.user!=null){
                            const adminData = {
                                dashboardName: adminName
                            }
                            console.log("Krishna sexy")
                            sessionStorage.setItem("JWT", adData.jwtToken)
                            localStorage.setItem("userData", JSON.stringify(adminData));
                            document.getElementById('jugaad2').click();   
                            localStorage.setItem("loginMode", 2);

                        }
                        else{
                            alert("User do not exist");
                        }

                    })
            }
        })
    };

    //! Handles the sliding of blue div
    const signUpButton = () => {
        const container = document.getElementById("container");
        container.classList.add(Styles["right-panel-active"]);
        // console.log("sign up button clicked");
        // console.log(sLogin);
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
    const [submitStudentFavAnimal, setsubmitStudentFavAnimal] = useState(false);
    const [submitStudentEmail, setsubmitStudentEmail] = useState(false);
    const [submitStudentPass, setsubmitStudentPass] = useState(false);
    const [submitStudentRepPass, setsubmitStudentRepPass] = useState(false);

    const valueOfStudentName = (event) => {
        const val = event.target.value;
        setsubmitStudentName(val);
        const regex = /[^a-zA-Z\s]/;
        if (val.length > 0 && regex.test(val)) {
            setstudentMessage("* Only alphabets allowed");
            setsubmitStudentName(false);
        } else {
            setstudentMessage("");
            setsubmitStudentName(true);
        }
    };
    const valueOfFavouriteAnimal = (event) => {
        const val = event.target.value;
        setsubmitStudentFavAnimal(val);
        const regex = /[^a-zA-Z\s]/;
        if (val.length > 0 && regex.test(val)) {
            setstudentMessage("* Only alphabets allowed");
            setsubmitStudentName(false);
        } else {
            setstudentMessage("");
            setsubmitStudentName(true);
        }
    };

    const valueOfStudentEmail = (event) => {
        const val = event.target.value;
        setsubmitStudentEmail(val);
        // const regex=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        const regex = /^[a-zA-Z]{3}20\d{2}\d{3}@iiitl\.ac\.in$/;
        if (val.length > 0 && !regex.test(val)) {
            setstudentMessage("* Please Enter throughyour College Mail Id");
            setsubmitStudentEmail(false);
        } else {
            setstudentMessage("");
            setsubmitStudentEmail(true);
        }
    };
    const [sgnUpPass,setSgnUpPass] = useState("")
    const valueOfStudentPassword = (event) => {
        const val = event.target.value;
        setsubmitStudentPass(val);
        setSgnUpPass(val);
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
        // console.log(val);
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        if (val === sgnUpPass){
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
        else{
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

    //! Handles the closing of login form
    const closeForm = () => {
        const close = document.getElementById("container");

    };


    const horizontal = "center";
    const vertical = "bottom";
    return (
        <motion.div
            initial={{ opacity: 0, x: "1000px", y: "-470px" }}
            animate={{ opacity: 1, x: "0", y: "-470px" }}
            exit={{ opacity: 1, x: "100px", y: "-1000px" }}
            transition={{ duration: 0.5 }}
        >

            <div className={Styles.container} id="container">
                <div
                    className={`${Styles['form-container']} ${Styles['sign-up-container']}`}
                    style={
                        width < 850
                            ? { display: sLogin ? "none" : "block" }
                            : { display: sLogin ? "block" : "none" }
                    }
                >
                    <div className={`${Styles.Login_cross2} ${Styles.crossSign}`} onClick={closeForm}>
                        <Link to={'/'}>&times;</Link>
                    </div>
                    <div className={Styles.form}>
                        <h1 className={Styles.Login_h1}>Create Account</h1>
                        <div className={Styles.createAccount}>
                            <div className={Styles.accountType}>
                                
                                    <div className={Styles.NewSignUp}>
                                        <input
                                            className={Styles.Login_input_tag}
                                            type="radio"
                                            id="memberSignUp"
                                            name="tabby-tabs"
                                        />
                                        <label htmlFor="memberSignUp" className={Styles.signUp_Tabs}>
                                            Admin
                                        </label>
                                        <div className={`${Styles.member} ${Styles.content}`}>
                                            <form
                                                className={`${Styles.memberForm} ${Styles.Login_form_tag}`}
                                                id="formdata"
                                                onSubmit={(e) => {
                                                    submitAdminform(e);
                                                }}
                                            >
                                                <div className={Styles["social-container"]}>
                                                    <FacebookIcon
                                                        className={Styles.coloradd}
                                                        onClick={google_login}
                                                    />
                                                    <GoogleIcon
                                                        className={Styles.coloradd}
                                                        onClick={google_login}
                                                    />
                                                    <GitHubIcon
                                                        className={Styles.coloradd}
                                                        onClick={google_login}
                                                    />
                                                </div>
                                                <span className={Styles.Login_span_tag}>
                                                    or use your email for registration
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Username"
                                                    id="adname"
                                                    className={`${Styles.sUpUserName} ${Styles.Login_input_tag}`}
                                                    name="adminName"
                                                    required
                                                />
                                               
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    id="Email"
                                                    className={`${Styles.sUpUserEmail} ${Styles.Login_input_tag}`}
                                                    name="adminEmail"
                                                    required
                                                />
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    id="Password"
                                                    name="adminPassword"
                                                    className={`${Styles.sUpUserPassword} ${Styles.Login_input_tag}`}
                                                    required
                                                />
                                                <input
                                                    type="password"
                                                    placeholder="Retype Password"
                                                    id="repPassword"
                                                    name="adminPassword"
                                                    className={`${Styles.sUpUserPassword} ${Styles.Login_input_tag}`}
                                                    required
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Admin ID"
                                                    id="name"
                                                    className={`${Styles.sUpUserName} ${Styles.Login_input_tag}`}
                                                    name="adminID"
                                                    required
                                                />
                                                <div id="sUpMemberAlert" style={divStyle}>
                                                    <br />
                                                </div>
                                                <input
                                                    type="submit"
                                                    className={`${Styles.button} ${Styles.MainButtons}`}
                                                    value="Sign Up"
                                                    form="formdata"
                                                    name="submit"
                                                />
                                                    
                                            </form>
                                        </div>
                                    </div>
                                

                                <div className={Styles.NewSignUp}>
                                    <input
                                        className={Styles.Login_input_tag}
                                        type="radio"
                                        id="studentSignUp"
                                        name="tabby-tabs"
                                        checked
                                        readOnly
                                    />
                                    <label htmlFor="studentSignUp" className={Styles.signUp_Tabs}>
                                        Student
                                    </label>

                                    <div className={`${Styles.student} ${Styles.content}`}>
                                        <form
                                            className={`${Styles.studentForm} ${Styles.Login_form_tag}`}
                                            onSubmit={(e) => submitform(e)}
                                            id="my-form-signup2"
                                        >
                                            <div className={Styles["social-container"]}>
                                                <FacebookIcon
                                                    className={Styles.coloradd}
                                                    onClick={google_login}
                                                />
                                                <GoogleIcon
                                                    className={Styles.coloradd}
                                                    onClick={google_login}
                                                />
                                                <GitHubIcon
                                                    className={Styles.coloradd}
                                                    onClick={google_login}
                                                />
                                            </div>
                                            <span className={Styles.Login_span_tag}>
                                                or use your email for registration
                                            </span>
                                            <input
                                                type="text"
                                                onChange={valueOfStudentName}
                                                placeholder="Username"
                                                id="studentName"
                                                name="userName"
                                                className={`${Styles.sUpUserName} ${Styles.Login_input_tag}`}
                                                required
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                onChange={valueOfStudentEmail}
                                                id="studentEmail"
                                                name="emailId"
                                                className={`${Styles.sUpUserEmail} ${Styles.Login_input_tag}`}
                                                required
                                            />
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                onChange={valueOfStudentPassword}
                                                id="studentPassword"
                                                name="userPassword"
                                                className={`${Styles.sUpUserPassword} ${Styles.Login_input_tag}`}
                                                required
                                            />
                                            <input
                                                type="password"
                                                placeholder="Retype Password"
                                                onChange={valueOfStudentRepPassword}
                                                id="studentrepPassword"
                                                name="password"
                                                className={`${Styles.sUpUserPassword} ${Styles.Login_input_tag}`}
                                                required
                                            />
                                            <input
                                                type="text"
                                                placeholder="Favourite Animal"
                                                onChange={valueOfFavouriteAnimal}
                                                id="fav_Animal"
                                                name="fav_animal"
                                                className={`${Styles.sUpfav_animal} ${Styles.Login_input_tag}`}
                                                required
                                            />
                                            <input
                                                className={Styles.Login_input_tag}
                                                style={{ display: "none" }}
                                                id="isLoggedInWhileSup"
                                                type="number"
                                                name="isLoggedInWhileSup"
                                                value="0"
                                            />
                                            <div id="sUpStudentAlert" style={divStyle}>
                                                {studentMessage}
                                                <br />
                                            </div>

                                            <input
                                                type="submit"
                                                className={`${Styles.button} ${Styles.MainButtons} ${Styles.stSignUp}`}
                                                value="Sign Up"
                                                form="my-form-signup2"
                                            />
                                            <FullScreenDialog/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`${Styles['form-container']} ${Styles['sign-in-container']}`}
                    style={
                        width < 850
                            ? { display: Login ? "block" : "none" }
                            : { display: Login ? "block" : "block" }
                    }
                >
                    <div className={`${Styles.Login_cross} ${Styles.crossSign}`} onClick={closeForm}>
                        <Link to={'/'}>&times;</Link>
                    </div>

                    <form
                        className={`${Styles.Login_form_tag} ${Styles.Login_login}`}
                        id="signinform"
                        onSubmit={(e) => {loginner(e);}}
                    >
                        <h1 className={Styles.Login_h1}>Log In</h1>
                        <div className={Styles["social-container"]}>
                            <FacebookIcon
                                className={Styles.coloradd}
                                onClick={google_login}
                            />
                            <GoogleIcon
                                className={Styles.coloradd}
                                onClick={google_login}
                            />
                            <GitHubIcon
                                className={Styles.coloradd}
                                onClick={google_login}
                            />
                        </div>
                        <span className={Styles.Login_span_tag}>or use your account</span>
                        <input
                            className={Styles.Login_input_tag}
                            id="loginName"
                            type="text"
                            name="loggerName"
                            placeholder="User Name"
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />
                        <input
                            className={Styles.Login_input_tag}
                            style={{display: "none"}}
                            id="isLoggedIn"
                            type="number"
                            name="isLoggedIn"
                            value="0"
                        />
                        <input
                            className={Styles.Login_input_tag}
                            id="loginPass"
                            type="password"
                            name="loggerPass"
                            placeholder="Password"
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        <Link className={Styles.Login_a_tag} to="/forgotpass">
                            Forgot your password?
                        </Link>
                        <input value="Log In" 
                            className={`${Styles.Login_btn_tag} ${Styles.MainButtons}`} 
                            type="submit" 
                            form="signinform"
                            name="submit"
                        />
                       
                        <button
                            className={`${Styles.reverseGhost} ${Styles.Login_btn_tag} `}
                            id="signUpOnLogin"
                            onClick={(e) => {
                                setsLogin(!sLogin);
                                setLogin(!Login);
                                e.preventDefault();
                            }}
                        >
                            Sign Up
                        </button>
                    </form>
                    <Link to="/fullsc" id="autoclick" style={{ display: 'none' }}>click me</Link>
                </div>
                    <Link to="/dashboard" id="jugaad2" style={{ display: 'none' }}>click me</Link>
                <div className={Styles["overlay-container"]}>
                    <div className={Styles.overlay}>
                        <div className={`${Styles["overlay-panel"]} ${Styles["overlay-left"]}`}>
                            <h1 className={Styles.Login_h1}>Hello, Friend!</h1>
                            <p className={Styles.Login_p_tag}>
                                Enter your personal details and start journey with us
                            </p>
                            <button
                                className={`${Styles.ghost} ${Styles.Login_btn_tag}`}
                                id="signIn"
                                onClick={signInButton}
                            >
                                Log In
                            </button>
                        </div>
                        <div className={`${Styles["overlay-panel"]} ${Styles["overlay-right"]}`}>
                            <h1 className={Styles.Login_h1}>Welcome Back!</h1>
                            <p className={Styles.Login_p_tag}>
                                To keep connected with us please login with your personal info
                            </p>
                            <button
                                className={`${Styles.ghost} ${Styles.Login_btn_tag}`}
                                id="signUp"
                                onClick={signUpButton}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleSnackClose} anchorOrigin={{vertical, horizontal}}>
                <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
                    Form Submitted Successfully!
                </Alert>
            </Snackbar>
        </motion.div>
    );
}

export { checkerMj };