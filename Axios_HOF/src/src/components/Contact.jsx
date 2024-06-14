import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl' style={{ backgroundColor:"#0f1729"}}
      >
        <p className={styles.sectionSubText}>get in touch</p>
       
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex atque minus labore perferendis rem ad similique molestias? Tempore rem porro voluptatem, enim molestiae, laborum provident nobis eveniet culpa tempora quos!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam at similique obcaecati explicabo, maiores ipsa veritatis, laborum sed repudiandae exercitationem officia deserunt perspiciatis? Neque, totam doloremque! Porro aspernatur nisi vitae est magnam sapiente aliquid tempore, ipsa eos ducimus, qui inventore, facilis voluptates quis laboriosam tempora possimus. Vel quos quis sint esse repellendus accusamus, labore iure illum necessitatibus assumenda dolorem in deleniti voluptas ipsum fuga minus, sunt laboriosam quam modi nostrum. Eos, facilis consequuntur, beatae eveniet mollitia iusto hic dicta tempore culpa enim impedit quibusdam. Minus autem quis hic impedit magnam tenetur consequatur natus dolores exercitationem minima! Sed dolorum molestias, totam maxime dolore enim ducimus repellat corporis amet, deserunt deleniti cum laboriosam itaque explicabo! Ratione, numquam et. Perferendis quisquam quia placeat quas, minima inventore qui impedit voluptatibus sequi sed nemo error est necessitatibus corporis vitae voluptates dignissimos. Odio quo quas deleniti dolorem. Pariatur molestias ratione voluptate laborum. Dicta inventore nam ea.
        </div>
        {/* <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          id='contactForm'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='firstName'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              style={{ backgroundColor:"rgb(65, 65, 65)"}}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='emailAdd'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              style={{ backgroundColor: "rgb(65, 65, 65)" }}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              style={{ backgroundColor: "rgb(65, 65, 65)" }}
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            style={{ backgroundColor: "rgb(65, 65, 65)" }}

          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form> */}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      


    </div>
  );
};

export default SectionWrapper(Contact, "contact");
