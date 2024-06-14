import styles from "./style";
import { Business, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components/AlumniPage";
import { useState } from "react";
import { people01, people02, people03} from "./assets";
import { motion } from "framer-motion";

const AlumniApp = () =>{
  console.log(styles.boxWidth);
  const[feedback,setFeedback] =useState( [
    {
      id: "feedback-1",
      graduationYear: "Graduation Year : 2019",
      ach: "Achievements : " ,
      achievements: ["Opened a 50M$ startup Company, Big contribution in Machine Learning department"],
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: people01,
    },
    {
      id: "feedback-2",
      graduationYear:
        "Graduation Year : 2019",
        ach: "Achievements : " ,
        achievements: ["Opened a 50M$ startup Company","Big contribution in Machine Learning department"],
      name: "Steve Mark",
      title: "Founder & Leader",
      img: people02,
    },
    {
      id: "feedback-3",
      graduationYear:
        "Graduation Year : 2020",
        ach: "Achievements : " ,
        achievements: ["Opened a 50M$ startup Company","Big contribution in Machine Learning department"],
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: people03,
    },
    {
      id: "feedback-4",
      graduationYear:
        "Graduation Year : 2021",
        ach: "Achievements : " ,
        achievements: ["Opened a 50M$ startup Company","Big contribution in Machine Learning department"],
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: people03,
    },
    {
      id: "feedback-5",
      graduationYear:
        "Graduation Year : 2019",
        ach: "Achievements : " ,
        achievements: ["Opened a 50M$ startup Company","Big contribution in Machine Learning department"],
      name: "Steve Mark",
      title: "Founder & Leader",
      img: people02,
    },
    {
      id: "feedback-6",
      graduationYear: "Graduation Year : 2019",
      ach: "Achievements : " ,
      achievements: ["Opened a 50M$ startup Company","Big contribution in Machine Learning department"],
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: people01,
    },
    {
      id: "feedback-7",
      graduationYear: "Graduation Year : 2019",
      ach: "Achievements : " ,
      achievements: ["Opened a 50M$ startup Company","Big contribution in Machine Learning department"],
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: people01,
    },
    {
      id: "feedback-8",
      graduationYear: "Graduation Year : 2019",
      ach: "Achievements : " ,
      achievements: ["Opened a 50M$ startup Company","Big contribution in Machine Learning department"],
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: people01,
    },
  ]);
  return (
    
  <motion.div 
  initial={{ opacity: 0, x: "1000px",  y: "0px"}}
    animate={{ opacity: 1, x:"0", y: "0px" }}
    exit={{ opacity: 1, x: "100px", y: "-1000px"}}
    transition={{ duration: 0.5 }}
  className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidthMj}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidthMj}`}>
        <Testimonials feedback={feedback}/>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CTA setFeedback={setFeedback} feedback={feedback}/>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidthMj}`}>
        <Footer />
      </div>
    </div>
  </motion.div>
  )

}
export default AlumniApp;
