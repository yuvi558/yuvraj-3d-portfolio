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
    const { name, value } = e.target;

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
          title: "Portfolio Contact Form",
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! Your message has been sent successfully.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      {/* LEFT SIDE */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] rounded-3xl border border-white/10 bg-[rgba(15,18,40,0.75)] backdrop-blur-xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3
          className={`${styles.sectionHeadText}`}
          style={{
            textShadow:
              "0 0 10px rgba(145,94,255,0.25), 0 0 24px rgba(145,94,255,0.12)",
          }}
        >
          Contact.
        </h3>

        {/* Quick Contact Cards */}
        <div className='mt-8 grid sm:grid-cols-2 gap-4'>
          <a
            href='mailto:yuvraj00000999@gmail.com'
            className='rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 hover:border-[#915EFF] hover:shadow-[0_0_20px_rgba(145,94,255,0.18)] transition-all duration-300'
          >
            <p className='text-[#915EFF] text-[14px] font-semibold'>Email</p>
            <p className='text-white text-[15px] break-all mt-1'>
              yuvraj00000999@gmail.com
            </p>
          </a>

          <a
            href='https://github.com/yuvi558'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 hover:border-[#915EFF] hover:shadow-[0_0_20px_rgba(145,94,255,0.18)] transition-all duration-300'
          >
            <p className='text-[#915EFF] text-[14px] font-semibold'>GitHub</p>
            <p className='text-white text-[15px] mt-1'>github.com/yuvi558</p>
          </a>

          <a
            href='https://www.linkedin.com/in/yuvraj-singh-970116331/'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 hover:border-[#915EFF] hover:shadow-[0_0_20px_rgba(145,94,255,0.18)] transition-all duration-300'
          >
            <p className='text-[#915EFF] text-[14px] font-semibold'>LinkedIn</p>
            <p className='text-white text-[15px] mt-1'>View Profile</p>
          </a>

          <a
            href='https://leetcode.com/u/XFnnTd8lOQ/'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 hover:border-[#915EFF] hover:shadow-[0_0_20px_rgba(145,94,255,0.18)] transition-all duration-300'
          >
            <p className='text-[#915EFF] text-[14px] font-semibold'>LeetCode</p>
            <p className='text-white text-[15px] mt-1'>View Profile</p>
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-10 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='bg-[rgba(255,255,255,0.04)] py-4 px-5 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF] font-medium transition-all duration-300'
              required
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='bg-[rgba(255,255,255,0.04)] py-4 px-5 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF] font-medium transition-all duration-300'
              required
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Message</span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Write your message here...'
              className='bg-[rgba(255,255,255,0.04)] py-4 px-5 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF] font-medium transition-all duration-300 resize-none'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-[#915EFF] py-3.5 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-[0_8px_30px_rgba(145,94,255,0.35)] hover:scale-105 hover:shadow-[0_12px_35px_rgba(145,94,255,0.45)] transition-all duration-300'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] rounded-3xl overflow-hidden'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");