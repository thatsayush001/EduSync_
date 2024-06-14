import React from 'react'
import { motion } from "framer-motion";
import {pattern2, pattern3,shadow1,shadow2} from "../../assets/index";
import './Users.css'
export default function Users() {

    const token = sessionStorage.getItem("JWT");

    const fetchData = () => {
        const users = fetch("http://localhost:8080/get/users",{
            mode:"cors",
            headers: { "Authorization": "Bearer " + token }
        })
        users
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                showData(data);
            })
    }
    function showData(data) {

        const list = document.getElementById('listAll');


        for (let i = 0; i < data.length; i++) {
            const li = document.createElement('li');
            li.setAttribute("class", "slider-item")
            const a = document.createElement('a');
            a.setAttribute("class", "slider-card");
            a.setAttribute("href", "#");
            const figure = document.createElement('figure');
            figure.setAttribute("class", "img-holder");
            const div = document.createElement('div');
            div.setAttribute("class", "myData");

            const span = document.createElement('span');
            span.setAttribute("class", "slider-title");
            span.style.color = "#0bc6d6"
            span.innerHTML = data[i].userName;
            const email = document.createElement('p');
            email.innerHTML = "Email Id :"
            email.style.color = "white";
            email.style.fontSize = "20px";
            const p1 = document.createElement('p');
            p1.setAttribute("class", "slider-subtitle");
            p1.innerHTML = data[i].emailId;
            const pass = document.createElement('p');
            pass.innerHTML = "Password :"
            pass.style.color = "white";
            pass.style.fontSize = "20px";
            const p2 = document.createElement('p');
            p2.setAttribute("class", "slider-subtitle");
            p2.innerHTML = data[i].password;
            const animal = document.createElement('p');
            animal.innerHTML = "Favourite Animal :"
            animal.style.color = "white";
            animal.style.fontSize = "20px";
            const p3 = document.createElement('p');
            p3.setAttribute("class", "slider-subtitle");
            p3.innerHTML = data[i].fav_animal;

            div.appendChild(span);
            div.appendChild(email)
            div.appendChild(p1);
            div.appendChild(pass)
            div.appendChild(p2);
            div.appendChild(animal)
            div.appendChild(p3);

            figure.appendChild(div);

            a.appendChild(figure);

            li.appendChild(a);

            list.appendChild(li);
        }


        'use strict';



        /**
         * Add event listener on multiple elements
         */

        const addEventOnElements = function (elements, eventType, callback) {
            for (let i = 0, len = elements.length; i < len; i++) {
                elements[i].addEventListener(eventType, callback);
            }
        }



        /**
         * MOBILE NAVBAR TOGGLER
         */

        const navbar = document.querySelector("[data-navbar]");
        const navTogglers = document.querySelectorAll("[data-nav-toggler]");

        const toggleNav = () => {
            navbar.classList.toggle("active");
            document.body.classList.toggle("nav-active");
        }

        addEventOnElements(navTogglers, "click", toggleNav);



        /**
         * HEADER ANIMATION
         * When scrolled donw to 100px header will be active
         */

        const header = document.querySelector("[data-header]");
        const backTopBtn = document.querySelector("[data-back-top-btn]");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                header.classList.add("active");
                backTopBtn.classList.add("active");
            } else {
                header.classList.remove("active");
                backTopBtn.classList.remove("active");
            }
        });



        /**
         * SLIDER
         */

        const slider = document.querySelector("[data-slider]");
        const sliderContainer = document.querySelector("[data-slider-container]");
        const sliderPrevBtn = document.querySelector("[data-slider-prev]");
        const sliderNextBtn = document.querySelector("[data-slider-next]");

        let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
        let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

        let currentSlidePos = 0;

        const moveSliderItem = function () {
            sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
        }

        /**
         * NEXT SLIDE
         */

        const slideNext = function () {
            const slideEnd = currentSlidePos >= totalSlidableItems;

            if (slideEnd) {
                currentSlidePos = 0;
            } else {
                currentSlidePos++;
            }

            moveSliderItem();
        }

        sliderNextBtn.addEventListener("click", slideNext);

        /**
         * PREVIOUS SLIDE
         */

        const slidePrev = function () {
            if (currentSlidePos <= 0) {
                currentSlidePos = totalSlidableItems;
            } else {
                currentSlidePos--;
            }

            moveSliderItem();
        }

        sliderPrevBtn.addEventListener("click", slidePrev);

        /**
         * RESPONSIVE
         */
        window.addEventListener("resize", function () {
            totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
            totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

            moveSliderItem();
        });
    }

















    return (
        <motion.div
            initial={{ opacity: 0, x: "1000px", y: "0px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "100px", y: "-1000px" }}
            transition={{ duration: 0.5 }}
            className="bg-primary w-full overflow-hidden">

            <div className="usersPage">
    
                <main>
                    <article>

                        <section className="hero" id="home" aria-label="home">
                            <div className="container1">

                                <div className="hero-content">

                                    <p className="hero-subtitle text-xl">Presenting to you !</p>


                                    <h1 className="headline headline-1 section-title text-7xl">
                                        Our <span className="span">Users</span>
                                    </h1>

                                    <p className="hero-text text-lg">
                                        Welcome to our user details page, where you can unlock the full potential of your data. Our intuitive
                                        platform allows you to easily visualize and analyze your information, giving you deep insights and
                                        enabling
                                        smarter decision-making.
                                    </p>

                                    <div className="input-wrapper flex justify-between">

                                        <input type="email" name="email_address" placeholder="Search by Username" required className="input-field"
                                            autoComplete="off" />

                                        <button className="btn1 btn1-primary">
                                            <span className="span">Search</span>

                                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                                        </button>

                                    </div>

                                </div>

                                <div className="hero-banner">


                                    <img src={pattern2} width="27" height="26" alt="shape" className="shape shape-1" />

                                    <img src={pattern3} width="27" height="26" alt="shape" className="shape shape-2" />

                                </div>

                                <img src={shadow1} width="500" height="800" alt="" className="hero-bg hero-bg-1" />

                                <img src={shadow2} width="500" height="500" alt="" className="hero-bg hero-bg-2" />

                            </div>
                        </section>






                        <section className="topics" id="topics" aria-labelledby="topic-label">
                            <div className="container1">

                                <div className="card1 topic-card">

                                    <div className="card-content">
                                        <button className="btn1 btn1-primary" id="dataBtn" onClick={fetchData}>
                                            <span className="span">Fetch Data</span>

                                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                                        </button>
                                        <h2 className="headline headline-2 section-title card-title" id="topic-label">
                                            All Users
                                        </h2>

                                        <p className="card-text" style={{fontSize: "18px"}}>
                                            Visualize and analyze your information like
                                            never before...
                                        </p>

                                        <div className="btn-group">
                                            <button className="btn-icon" aria-label="previous" data-slider-prev>
                                                <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
                                            </button>

                                            <button className="btn-icon" aria-label="next" data-slider-next>
                                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                            </button>
                                        </div>

                                    </div>

                                    <div className="slider" data-slider id="slider">
                                        <ul className="slider-list" data-slider-container id="listAll">



                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </section>

                    </article>
                </main>

                
            </div>

        </motion.div>
    )
}
