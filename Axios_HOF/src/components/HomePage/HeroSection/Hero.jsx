// import { useState, useEffect } from "react";
// import './Hero.css';


// export const Hero = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = ["Creator", "Developer", "Coder"];
//   const period = 1000;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => { clearInterval(ticker) };
//   }, [text])

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex(prevIndex => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex(prevIndex => prevIndex + 1);
//     }
//   }

//   return (

//     <section className="banner" id="home">
//       <table>
//         <tr className="align-items-center">
//           <td>
//             <div>
//               {/* <span className="tagline">Welcome to IIIT Lucknow</span> */}
//               <h1>{`Hello!`} <span className="txt-rotate" data-rotate='[ "Creator", "Developer", "Coder" ]'><span className="wrap">{text}</span></span></h1>
//               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
//                 scrambled it to make a type specimen book.</p>
//               <a href="#"> 
//               {/* <button className="connectbutton">Let's Connect </button> */}
//               </a>
              
//             </div>
//           </td>

//           <td>
//             <div>
              
//               <img src="./src/assets/astro.svg" alt="Header Img" height="300px" width="300px"/>
//             </div>
//           </td>
//         </tr>
//       </table>
//     </section>

//   )
// };

import { useState, useEffect } from "react";




import Styles from './Hero.module.css'
import { Slideshow } from "./Carousel";


export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "CREATOR", "DEVELOPER", "CODER" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
   
    <section className={Styles.banner} id="home">
      <table>
        <tbody>
        <tr className={Styles["align-items-center"]}>
          <td>
      
              <div>
                <h1>
                  <div className={Styles.Tagline}>Welcome to AXIOS</div>
                  <div className={Styles.appearingText}>{`Hello!`} <span className={Styles["txt-rotate"]}   data-rotate='[ "CREATOR", "DEVELOPER", "CODER" ]'><span className={Styles.wrap}>{text}</span></span></div>
                </h1>
                  <p>Welcome to Axios, the technical Society of IIIT Lucknow. Axios comprises seven wings encompassing all major technical domains. 
                  We are a group of highly motivated individuals with an excellent tech background.</p>
              </div>
            
          </td>
          <td>
                <div>
                  {/* <Slideshow/> */}
                  <img className={Styles.heroImage} src="./src/assets/astro1.svg" alt="Header Img" height="400px" width="400px"/>
                </div>
            
          </td>
        </tr>
        </tbody>
      </table>
    </section>
    
  )
};