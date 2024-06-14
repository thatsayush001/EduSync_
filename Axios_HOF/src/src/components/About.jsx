import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import "./gradient.css"
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full border p-[1px] rounded-[20px] shadow-card IntroCardBg'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} style={{fontSize: "24px", opacity: 0.7}}>Be Updated with Brute Force at</p>
        <h2 className={styles.sectionHeadText} style={{textAlign: "left"}}>Indian Institute Of Information Technology, Lucknow</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4  text-[17px] max-w-3xl leading-[30px]'
      >
        Welcome to the Indian Institute of Information Technology, Lucknow, an institute of national importance. It has a tradition of producing best-in-class human resources in multi-dimensional aspects of Engineering and Management. IIIT Lucknow is an emerging institute that takes this initiative further in leaps and bounds by providing world-class education in Engineering, Technology, and Business. <br></br>
        <br></br>
        With Brute Force, students Of IIITL can track their daily schedule as well as be up to date with their skillset amidst their peers. With a real time leaderboard connecting their various coding and developing handles, we have created a system to help student see their stadings and therefore inculcate a healthy competition and gradual growth. Alongside, we provide regular updates about college events. Providing features such as routine scheduler, user support, skill tracking, doubt assistance and news updates, we are commited to provide the students a
        resourceful platform, helping in their coding journey, in collaboration with IIIT Lucknow.
        
        
        
       





      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
