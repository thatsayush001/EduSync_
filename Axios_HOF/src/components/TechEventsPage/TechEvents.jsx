import React from "react";
import "./TechEvents.css"
// import NavEvents from "./NavEvents";
import HeroEvents from "./HeroEvents";
import Hero2Events from "./Hero2Events";
import { motion } from "framer-motion";




function TechEvents() {
  return (
    <motion.div
    initial={{ opacity: 0, x: "1000px",  y: "-1000px"}}
    animate={{ opacity: 1, x:"0", y: "0px" }}
    exit={{ opacity: 1, x: "100px", y: "-1000px"}}
    transition={{ duration: 0.5 }}
    >

    
    
    <HeroEvents/>
    <div className="techEventsPage">
      <div className="divtop">
        <br /><br /><br /><br />
        <div className="wrap animate pop">
          <div className="overlay">
            <div className="overlay-content animate slide-left delay-2">
              <h1 className="h1TagEvents_AK animate slide-left pop delay-4">FOSS-Weekend</h1>
              <p className="pTagEvents_AK animate slide-left pop delay-5" style={{ color: "white", marginBottom: "2.5rem" }}>
                WING: <em>FOSS</em>
              </p>
            </div>
            <div className="image-content1 animate slide delay-1"></div>
            <div className="dots animate">
              <div className="dot animate slide-up delay-6"></div>
              <div className="dot animate slide-up delay-7"></div>
              <div className="dot animate slide-up delay-8"></div>
            </div>
          </div>
          <div className="text">
            <p>
              FOSS Weekend is an annual event organized by the FOSS community of IIIT Lucknow to promote the use and development of open-source software and technologies.
              The event includes various workshops, talks, and hands-on sessions on different topics related to open-source. Participants get an opportunity to showcase their open-source projects<br/><br/>
              Winners of 2022:
              <br/>
              1. Asta
              <br/>
              2. Hinata
              <br/>
              3. Takemichi
            </p>
          </div>
        </div>
      </div>



      <div className="divto">
        <div className="wrap animate pop">
          <div className="overlay">
            <div className="overlay-content animate slide-left delay-2">
              <h1 className="h1TagEvents_AK animate slide-left pop delay-4">Freshers cup</h1>
              <p className="pTagEvents_AK animate slide-left pop delay-5" style={{ color: "white", marginBottom: "2.5rem" }}>
                WING: <em>CP</em>
              </p>
            </div>
            <div className="image-content2 animate slide delay-1"></div>
            <div className="dots animate">
              <div className="dot animate slide-up delay-6"></div>
              <div className="dot animate slide-up delay-7"></div>
              <div className="dot animate slide-up delay-8"></div>
            </div>
          </div>
          <div className="text">
            <p>
              IIITL Freshers Cup is a programming contest for newly admitted students, whicIh is focused on competitive programming. The contest aims to test the programming skills of the students and provide them with an opportunity to showcase their talent in algorithmic problem-solving.<br/><br/>

              Winners of 2022:<br/>
              1. Itadori Yuji<br/>
              2. Hashirama<br/>
              3. Orokodadki
            </p>
          </div>
        </div>
      </div>



      <div className="divt">
        <div className="wrap animate pop">
          <div className="overlay">
            <div className="overlay-content animate slide-left delay-2">
              <h1 className="h1TagEvents_AK animate slide-left pop delay-4">Hack -O- Fiesta</h1>
              <p className="pTagEvents_AK animate slide-left pop delay-5" style={{ color: "white", marginBottom: "2.5rem" }}>
                WING: <em>Axios</em>
              </p>
            </div>
            <div className="image-content3 animate slide delay-1"></div>
            <div className="dots animate">
              <div className="dot animate slide-up delay-6"></div>
              <div className="dot animate slide-up delay-7"></div>
              <div className="dot animate slide-up delay-8"></div>
            </div>
          </div>
          <div className="text">
            <p>
              Hackofiesta is an annual hackathon event organized by the students of IIIT Lucknow. Hackofiesta usually takes place over the course of two or three days and involves participants working in teams to develop and present their projects.<br/><br/>
              Winners of 2022:<br/>
              1. Gojo Saturo<br/>
              2. Madara<br/>
              3. Yorichi
            </p>
          </div>
        </div>
      </div>
    </div>
    <Hero2Events/>

    <div className="techEventsPage">
      <div className="divtop">
        <br /><br /><br /><br />
        <div className="wrap animate pop">
          <div className="overlay">
            <div className="overlay-content animate slide-left delay-2">
              <h1 className="h1TagEvents_AK animate slide-left pop delay-4">FOSS-Weekend</h1>
              <p className="pTagEvents_AK animate slide-left pop delay-5" style={{ color: "white", marginBottom: "2.5rem" }}>
                WING: <em>FOSS</em>
              </p>
            </div>
            <div className="image-content1 animate slide delay-1"></div>
            <div className="dots animate">
              <div className="dot animate slide-up delay-6"></div>
              <div className="dot animate slide-up delay-7"></div>
              <div className="dot animate slide-up delay-8"></div>
            </div>
          </div>
          <div className="text">
            <p>
              FOSS Weekend is an annual event organized by the FOSS community of IIIT Lucknow to promote the use and development of open-source software and technologies.
              The event includes various workshops, talks, and hands-on sessions on different topics related to open-source. Participants get an opportunity to showcase their open-source projects<br/><br/>
              Winners of 2022:
              <br/>
              1. Asta
              <br/>
              2. Hinata
              <br/>
              3. Takemichi
            </p>
          </div>
        </div>
      </div>



      <div className="divto">
        <div className="wrap animate pop">
          <div className="overlay">
            <div className="overlay-content animate slide-left delay-2">
              <h1 className="h1TagEvents_AK animate slide-left pop delay-4">Freshers cup</h1>
              <p className="pTagEvents_AK animate slide-left pop delay-5" style={{ color: "white", marginBottom: "2.5rem" }}>
                WING: <em>CP</em>
              </p>
            </div>
            <div className="image-content2 animate slide delay-1"></div>
            <div className="dots animate">
              <div className="dot animate slide-up delay-6"></div>
              <div className="dot animate slide-up delay-7"></div>
              <div className="dot animate slide-up delay-8"></div>
            </div>
          </div>
          <div className="text">
            <p>
              IIITL Freshers Cup is a programming contest for newly admitted students, whicIh is focused on competitive programming. The contest aims to test the programming skills of the students and provide them with an opportunity to showcase their talent in algorithmic problem-solving.<br/><br/>

              Winners of 2022:<br/>
              1. Itadori Yuji<br/>
              2. Hashirama<br/>
              3. Orokodadki
            </p>
          </div>
        </div>
      </div>



      <div className="divt">
        <div className="wrap animate pop">
          <div className="overlay">
            <div className="overlay-content animate slide-left delay-2">
              <h1 className="h1TagEvents_AK animate slide-left pop delay-4">Hack -O- Fiesta</h1>
              <p className="pTagEvents_AK animate slide-left pop delay-5" style={{ color: "white", marginBottom: "2.5rem" }}>
                WING: <em>Axios</em>
              </p>
            </div>
            <div className="image-content3 animate slide delay-1"></div>
            <div className="dots animate">
              <div className="dot animate slide-up delay-6"></div>
              <div className="dot animate slide-up delay-7"></div>
              <div className="dot animate slide-up delay-8"></div>
            </div>
          </div>
          <div className="text">
            <p>
              Hackofiesta is an annual hackathon event organized by the students of IIIT Lucknow. Hackofiesta usually takes place over the course of two or three days and involves participants working in teams to develop and present their projects.<br/><br/>
              Winners of 2022:<br/>
              1. Gojo Saturo<br/>
              2. Madara<br/>
              3. Yorichi
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="eventsFooter">
        
    </div>

    </motion.div>
  );
}

export default TechEvents;