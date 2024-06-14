// import { feedback } from "../constants";
import styles from "../../style";
import FeedbackCard from "./FeedbackCard";
import { alumAdd } from "./CTA";
import { people02 } from '../../assets';
import { useEffect, useState } from "react";
// console.log(addAlumni);

let monark=0;
const Testimonials = ({ feedback }) => {
 
  let feeder = [];
  const [feed,setFeed] = useState([]);
  const createCards = (data) => {
    for (let i = 0; i < data.length; i++) {
      const tempObj = {
        id: data[i].alId,
        graduationYear: `Graduation Year : ${data[i].alumniGradYear}`,
        ach: "Achievements : ",
        achievements: data[i].alumniAch,
        name: data[i].alumniName,
        title: data[i].alumniPosition,
        img: data[i].alumniPic,
      }
      feedback=[...feedback, tempObj];
    }
  }
  // const token = sessionStorage.getItem("JWT");


  useEffect(() => {
 
    try{
      fetch(`http://localhost:8080/get/alumni`, {
        mode: "cors"
        // headers: { "Authorization": "Bearer " + token }
      })
        .then((res) => {
          // console.log(res);
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          if(monark==0){
            createCards(data);
          }
          setFeed(feedback)
          monark++;

        })

    }
    catch(err){
      console.log("error")
    }

  }, [])

  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Alumni List ~<br className="sm:block hidden" />
        </h2>
      </div>

      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1] ">
        {feed.map((card) => <FeedbackCard key={card.id} {...card} />)}


      </div>
      <div className="timePass" id="timePass"></div>
    </section>
  )
};
export default Testimonials;
