import React from 'react'
import style from './Estrella.module.css'
import { motion } from "framer-motion";
import { priyanshu, shreya } from "../../assets/index"

// for images
import test1 from '../../assets/Pics/RaghuGallery/Crotonia/2.jpg'
import test2 from '../../assets/Pics/RaghuGallery/Crotonia/2.jpg'
import test3 from '../../assets/Pics/RaghuGallery/Crotonia/3.jpg'
import test4 from '../../assets/Pics/RaghuGallery/Crotonia/4.jpg'
import test5 from '../../assets/Pics/RaghuGallery/Crotonia/5.jpg'
import test6 from '../../assets/Pics/RaghuGallery/Crotonia/6.jpg'
import test7 from '../../assets/Pics/RaghuGallery/Crotonia/7.jpg'
import test8 from '../../assets/Pics/RaghuGallery/Crotonia/8.jpg'
import test9 from '../../assets/Pics/RaghuGallery/Crotonia/9.jpg'
import test10 from '../../assets/Pics/RaghuGallery/Crotonia/10.jpg'
import test11 from '../../assets/Pics/RaghuGallery/Crotonia/11.jpg'
import test12 from '../../assets/Pics/RaghuGallery/Crotonia/12.jpg'
export default function Crotonia() {
    const calcScrollValue = () => {
        console.log("HI")
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;

        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }

        scrollProgress.addEventListener("click", () => {
            console.log("object")
            document.documentElement.scrollTop = 0;
        });

        scrollProgress.style.background = `conic-gradient(#0077B5 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    }
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
    return (
        <motion.div
            initial={{ opacity: 0, x: "1000px", y: "-1000px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "100px", y: "-1000px" }}
            transition={{ duration: 0.5 }}
            className="bg-primary w-full overflow-hidden">
            <div className={style.clubGround}>
                <body id="clubBody">
                    <div className={`${style.container} ${style.grad1} grad1 mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-20`} >
                        <h1 className={`${style.pge1} flex title-font mb-4 font-medium text-white`} >
                            <b id="estrella">
                                <span className={`${style.clubName} `}>Crotonia</span>
                            </b>
                        </h1>
                    </div>


                    <section className={style.courses} id="courses">
                        <h2 className={style.headingh}>~ Coordinator's ~</h2>
                        <div className={`${style.container} ${style.coursescontainer}`}>

                            <article className={style.course} id="coordi1">
                                <div className={style.courseimage}>
                                    <a href="../Pics/shreya.jpg" target="_blank"><img src={shreya} /></a>
                                </div>
                                {/* style="margin-top: 3vmin; margin-bottom: 3vmin;" */}
                                <h3 >Shreya Tarwey</h3>

                                <p>IIITL ~ 3rd Year</p>
                            </article>



                            <article className={style.course}>
                                <div className={style.courseimage}>
                                    <a href="../Pics/priyanshu.png" target="_blank"><img src={priyanshu} /></a>
                                </div>
                                {/* style="margin-top: 3vmin; margin-bottom: 3vmin;" */}
                                <h3 >Priyanshu Upadhyay</h3>


                                <p>IIITL ~ 3rd Year</p>

                            </article>


                        </div>
                    </section>
















                    <div className={style["big-grid"]}>
                        <div className={`${style.grid} ${style["image-grid"]}`} id="one">
                            {/* style="margin: 1rem 33%;" */}
                            <div className={style["grid-block"]} >
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img1"]}`}
                                            src={test1}
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>
                            <br />



                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img2"]}`}
                                            src={test2}
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>


                            <br />

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img3"]}`}
                                            src={test3}
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img4"]}`}
                                            src={test4}
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img5"]}`}
                                            src={test5}
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img1"]}`}
                                            src={test6}
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>
                            <br />
                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img6"]}`}
                                            src={test7}
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img7"]}`}
                                            src={test8}
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img8"]}`}
                                            src={test9}
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img8"]}`}
                                            src={test10}
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>
                            {/* style="margin: 1rem 33%;" */}
                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img9"]}`}
                                            src={test11}
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>
                            {/* style="display: none;" */}
                            <div className={style["grid-block"]}>
                                <div className={style.tile}>
                                    <a className={style["tile-link"]} href="#">
                                        <img className={`${style["tile-img"]} ${style["tile-img10"]}`}
                                            src={test12}
                                            alt="Image" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>















                    {/* 
                <div className={style["btn-div"]}>
                    <button id="mj-btn" className={`${style.btn} ${style.ViewButton} mb-5 `} onclick="simpleView()">Simpler View</button>
                </div> */}


                    <footer>
                        <div className={`${style.container} ${style.footercontainer}`}>
                            <div className={style.footer1}>
                                <a href="/gallery" className={style.footerlogo}>
                                    <h4>GALLERY</h4>
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum nobis ratione.
                                </p>
                            </div>

                            <div className={style.footer2}>
                                <h4>Gallery </h4>
                                <ul className={style.permalinks}>
                                    <li><a href="/index">HOME</a></li>
                                    <li><a href="/contactus">CONTACT US</a></li>
                                    <li><a href="/aboutus">ABOUT US</a></li>
                                </ul>
                            </div>

                            <div className={style.footer3}>
                                <h4>Privacy</h4>
                                <ul className={style.privacy}>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms and conditions</a></li>
                                    <li><a href="#">Refund Policy</a></li>
                                </ul>
                            </div>

                            <div className={style.footer4}>
                                <h4>Contact Us</h4>
                                <div>
                                    {/* style="color: white;" */}
                                    <p><a href="tel:+91 0000000000">+91 0000000000</a></p>
                                    {/* style="color: white;" */}
                                    <p><a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
                                </div>

                                <ul className={style.footersocials}>
                                    <li>
                                        <a href="#"><i className="uil uil-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="uil uil-instagram-alt"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="uil uil-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="uil uil-linkedin-alt"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </footer>


                    <div id="progress" className={style.progress}>
                        <span id="progress-value" className={style["progress-value"]}><i className={`fa fa-arrow-up`} aria-hidden="true"></i></span>
                    </div>














                </body>
            </div>
        </motion.div >
    )
}