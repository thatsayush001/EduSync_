import { useState,useEffect } from 'react';
import styles from '../../style';
import { people02 } from '../../assets';
import { defaultPic } from '../../assets/index'
export let alumAdd;
import axios from 'axios';
const AlumniForm = ({ setFeedback, feedback }) => {
  const [name, setName] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [curPos, setCurPos] = useState('');
  const [email, setEmail] = useState('');
  const [sentences, setSentences] = useState('');
  const [photo, setPhoto] = useState(defaultPic);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGradYearChange = (event) => {
    setGradYear(event.target.value);
  };

  const handleCurPosChange = (event) => {
    setCurPos(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAchievementChange = (event) => {
    setSentences(event.target.value);

  };


  const handlePhotoChange = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imgUrl = reader.result;
      setPhoto(imgUrl)
    }
    reader.readAsDataURL(image);
    setPhoto(event.target.files[0]);
  };


  const token = sessionStorage.getItem("JWT");


  const handleSubmit = (e) => {
    let form = e.currentTarget;
    let formFields = new FormData(form);
    let formDataObject = Object.fromEntries(formFields.entries());
    formDataObject.alumniPic=photo;
    console.log(formDataObject)
    fetch("http://localhost:8080/post/alumni", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
      body: JSON.stringify(formDataObject)
    })
      .then(() => {
        console.log("Message Sent")
      })

    setPhoto(defaultPic);
    setName('');
    setEmail('');
    setGradYear('');
    setCurPos('');
    setSentences('');
  };
  return (
   
      <form onSubmit={(e) => { handleSubmit(e) }} className={`${styles.flexStartLeft} flex-col p-20 py-20 max-w-xl border-y-2 bg-gray-900 border-white-700 rounded-3xl`}
        id='alumniForm'
      >
        <label htmlFor="picture">
          <img src={photo}
            alt="Upload"
            height="100px"
            width="100px"
            className='cursor-pointer rounded-full hover:scale-125 ease-in-out duration-200 hover:transform-gpu'
          />
        </label>
        <input
          id="picture"
          name='alumniPic'
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="rounded-lg border-white text-black hidden"
          required
        />
        <br />
        <label htmlFor="name" className="font-poppins font-semibold text-white text-xl">
          Name:
        </label>
        <input
          id="name"
          name='alumniName'
          type="text"
          value={name}
          onChange={handleNameChange}
          className="mt-2 py-1 px-4 rounded-lg border-2 border-white bg-white w-full text-black"
          required
        />
        <br />
        <label htmlFor="email" className="font-poppins font-semibold text-white text-xl ">
          Email:
        </label>
        <input
          id="email"
          name='alumniEmail'
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="mt-2 py-1 px-4 rounded-lg border-2 border-white bg-white w-full text-black"
          required
        /><br />
        <label htmlFor="gradYear" className="font-poppins font-semibold text-white text-xl ">
          Graduation Year:
        </label>
        <input
          id="gradYear"
          name='alumniGradYear'
          type="number"
          value={gradYear}
          onChange={handleGradYearChange}
          className="mt-2 mb-6 py-1 px-4 rounded-lg border-2 border-white bg-white w-full text-black"
          required
        />
        <label htmlFor="currentPos" className="font-poppins font-semibold text-white text-xl ">
          Current Position:
        </label>
        <input
          id="currentPos"
          name='alumniPosition'
          type="text"
          value={curPos}
          onChange={handleCurPosChange}
          className="mt-2 mb-6 py-1 px-4 rounded-lg border-2 border-white bg-white w-full text-black"
          required
        />

        <label htmlFor="gradYear" className="font-poppins font-semibold text-white text-xl mt-4">
          Achievements:
        </label>
        <input
          id="achievements"
          name='alumniAch'
          type="text"
          value={sentences}
          onChange={handleAchievementChange}
          className="mt-2 mb-12 py-1 px-4 rounded-lg border-2 border-white bg-white w-full text-black"
          required
        />
        <input type="submit" value="Submit" form='alumniForm'
          className="mt-4 py-2 px-4 rounded-lg w-1/6 bg-white text-black font-semibold 
      hover:bg-gray-700 hover:text-white hover:scale-105 ease-in-out duration-200"/>
      </form>
  );
};

const AlumniSection = ({ setFeedback, feedback }) => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  let data = localStorage.getItem("loginMode");

  return (
    <div style={{display: (data!=2) ? "none" : "block"}}>
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <div className="flex-1 flex flex-col">
          <p className={styles.heading2}>Add Alumnus :</p>
          <p className={`${styles.paragraph} max-w-[490px] mt-5`}>
            Click on Add Alumni button, enter the details and Submit it. An Alumni will be added.
          </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <button
            onClick={handleButtonClick}
            className="py-2 px-4 rounded-lg bg-white text-black font-semibold"
          >
            Add Alumni
          </button>
        </div>
      </section>
      <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}`}>
        {showForm ? (
          <AlumniForm setFeedback={setFeedback} feedback={feedback} />
        ) : (<div className={`${styles.paragraph} max-w-[490px]`}>Register as Alumni</div>)}

      </section>
    </div>
  );
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default function Home({ setFeedback, feedback }) {
  return <AlumniSection setFeedback={setFeedback} feedback={feedback} />;
}

