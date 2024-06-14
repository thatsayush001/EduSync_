import React from 'react'
import { motion } from "framer-motion";
import st from './FormNew.module.css'
export default function FormNew() {

    
    const log = () => {
        document.getElementById("logIn").setAttribute("display","initial");
        document.getElementById("signUp").style.display = "none";
        document.getElementById("passreset").style.display = "none";

    }
    log();
    const sign = () => {
        document.getElementById("logIn").style.display = "none";
        document.getElementById("signUp").style.display = "block";
        document.getElementById("passreset").style.display = "none";
    }
    class database {
        constructor(email_id, username, fav_animal, pass, rep_pass) {
            this.email_id = email_id;
            this.username = username;
            this.fav_animal = fav_animal;
            this.pass = pass;
            this.rep_pass = rep_pass;
        }
    }
    var usr_cnt = [];
    const add_usr = () => {

        let a = document.getElementById("email_inp").value;
        let b = document.getElementById("username_inp").value;
        let d = document.getElementById("fav_inp").value;
        let e = document.getElementById("pass_inp").value;
        let f = document.getElementById("rep_inp").value;

        if (a != "" || b != "" || d != "" || e != "" || f != "") {
            if (e == f) {
                let obj = new database(a, b, d, e, f);
                // usr_cnt.push(obj);
                // console.log(usr_cnt);
                var symb = 0, caps = 0;
                for (let i = 0; i < e.length; i++) {
                    if (e[i] == '@' || e[i] == '$' || e[i] == '%' || e[i] == '#' || e[i] == '!' || e[i] == '%' || e[i] == '^' || e[i] == '&' || e[i] == '*') {
                        symb++;
                    }
                    if (e[i] >= 'A' && e[i] <= 'Z') {
                        caps++;
                    }
                }
                if (symb == 0 || caps == 0) {
                    alert("Password must have atleast one capital letter and one symbol!")
                }
                else {
                    if (a.indexOf("@") > 0 && (a.indexOf(".com") > 0 || a.indexOf(".ac.in") > 0)) {
                        alert("Signed Up Successfully\nRedirecting to Log In page");
                        postForm();
                        document.getElementById("logLabel").click();
                        log();
                    }
                    else {
                        alert("Invalid Email format");
                    }

                }
            }
            else {
                alert("Both the passwords should be same!");
            }

        }
        else {
            alert("Please fill all details first!");
        }
    }

    const logincheck =() => {
        const users = fetch("/get/users")
        users
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                checkData(data);
            })

    }
    const checkData =(data)=> {
        let name = document.getElementById('x').value;
        let pass = document.getElementById('y').value;
        let cnt = 0;
        for (let i = 0; i < data.length; i++) {
            if (name == data[i].userName && pass == data[i].password) {

                alert("Login Successfull.Going to verification.");
                window.location = "/akshat1";
                cnt++;

            }

        }
        if (cnt == 0) {
            alert("Invalid Username or Password");
        }

    }



    const frgtpass=() => {
        document.getElementById("logIn").setAttribute("display","none") ;
        document.getElementById("passreset").style.display = "block";
    }

    const newpasss=()=> {
        const users = fetch("/get/users")
        users
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                updatePass(data);
            })

    }

    const updatePass=(data)=> {
        let a = document.getElementById("user_new").value;
        let c = document.getElementById("animal_new").value;
        let d = document.getElementById("passw_new").value;
        let e = document.getElementById("repassw_new").value;
        if (e == d) {
            let mj1 = 0;
            for (let i = 0; i < data.length; i++) {
                // console.log(data[i].userName)
                if (data[i].userName == a && data[i].fav_animal == c) {
                    mj1++;
                    upData(a, data[i].emailId, c, d);
                    document.getElementById("logLabel").click();

                    log();
                    alert("Password changed successfully \n Redirecting to login up page!");
                    break;
                }

            }
            if (mj1 == 0) {
                alert(" Account detection Error");
            }
        }
        else {
            alert("Both the passwords should be same!");
        }
    }

    // For Viewing password
    var countingtick = 0;
    const changestyle=()=> {
        if (countingtick % 2 == 0) {
            document.getElementById("y").setAttribute("type", "text");
            countingtick++;
        }
        else {
            document.getElementById("y").setAttribute("type", "password");
            countingtick++;
        }

    }

    const newpass=() =>{
        let userName = document.getElementById("user_new").value;
        let fav_animal = document.getElementById("animal_new").value;
        let password = document.getElementById("passw_new").value;
        let reppassword = document.getElementById("repassw_new").value;
        console.log("object");
        if (password == reppassword) {
            upData();
            document.getElementById("logLabel").click();

            log();
        }


    }










    return (



        <motion.div
            initial={{ opacity: 0, x: "0px", y: "-1000px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "100px", y: "-1000px" }}
            transition={{ duration: 0.5 }}
        >
            <div>
                <div className={st["login-wrap"]}>
                    <div className={st["login-html"]}>
                        <input id="tab-1" type="radio" name="tab" className={st["sign-in"]} checked /><label id="logLabel" onClick="log()" htmlFor="tab-1" className={st.tab}>Log In</label>
                        <input id="tab-2" type="radio" name="tab" className={st["sign-up"]} /><label onClick="sign()" htmlFor="tab-2" className={st.tab}>Sign Up</label>
                        <div className={st["login-form"]}>
                            <div className={st["sign-in-htm"]} id="logIn">
                                <div className={st.tab}>
                                    <label className={st.label}>Username</label>
                                    <input id="x" type="text" className={st.input} />
                                </div>
                                <div className={st.tab}>
                                    <label className={st.label}>Password</label>
                                    <input id="y" type="password" className={st.input} />
                                </div>
                                <div className={st.tab}>
                                    <input id="check" type="checkbox" className={st.check} onClick="changestyle()" />
                                    <label htmlFor="check"><span className={st.icon}></span> View Password</label>
                                    <span id="forgot" ><a onClick="frgtpass()">Forgot Password ?</a></span>
                                </div>
                                <div className={st.tab}>
                                    <input id="LogInBtn" type="submit" className={st.button} value="Log In" onClick="logincheck()" />
                                </div>
                                <div className={st.hr}></div>

                            </div>


                            <div id="passreset">
                                <div className={st.tab}>
                                    <label htmlFor="user" className={st.label}>Username</label>
                                    <input id="user_new" type="text" className={st.input} />
                                </div>
                                <div className={st.tab}>
                                    <label htmlFor="user" className={st.label}>Favourite Animal</label>
                                    <input id="animal_new" type="text" className={st.input} />
                                </div>
                                <div className={st.tab}>
                                    <label htmlFor="user" className={st.label}>Password</label>
                                    <input id="passw_new" type="password" className={st.input} />
                                </div>
                                <div className={st.tab}>
                                    <label htmlFor="user" className={st.label}>Retype Password</label>
                                    <input id="repassw_new" type="password" className={st.input} />
                                </div>
                                <div className={st.tab} id="changehere">
                                    <input id="ResetPassBtn" type="submit" className="button" value="Reset Password" onClick="newpass()" />
                                </div>
                            </div>


                            <div className="sign-up-htm" id="signUp">
                                <div className={st.tab}>
                                    <label htmlFor="user" className={st.label}>Username</label>
                                    <input id="username_inp" type="text" className={st.input} />
                                </div>
                                <div className={st.tab}>
                                    <label htmlFor="pass" className={st.label}>Email Address</label>
                                    <input id="email_inp" type="text" className={st.input} />
                                </div>
                                <div className={st.tab}>
                                    <label htmlFor="user" className={st.label}>Favourite Animal</label>
                                    <input id="fav_inp" type="text" className={st.input} />
                                </div>
                                <div className={st.tab}>
                                    <label htmlFor="pass" className={st.label}>Password</label>
                                    <input id="pass_inp" type="password" className={st.input} />
                                </div>
                                <div className={st.tab}>
                                    <label htmlFor="pass" className={st.label}>Repeat Password</label>
                                    <input id="rep_inp" type="password" className={st.input} />
                                </div>
                                <div className={st.tab}>
                                    <input id="SignUpBtn" type="submit" htmlFor="tab-1" className={st.button} value="Sign Up" onClick="add_usr()" />
                                </div>
                                <div className={st["foot-lnk"]}>
                                    <label onclick="log()" htmlFor="tab-1">Already Member?</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
