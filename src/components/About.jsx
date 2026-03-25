import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    options={{
      max: 25,
      scale: 1.03,
      speed: 400,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className='w-full p-[1px] rounded-[24px] bg-gradient-to-br from-[rgba(145,94,255,0.65)] via-[rgba(145,94,255,0.15)] to-[rgba(255,255,255,0.08)] shadow-[0_8px_30px_rgba(145,94,255,0.12)]'
    >
      <div className='rounded-[24px] py-7 px-8 min-h-[280px] flex justify-evenly items-center flex-col bg-[rgba(29,24,54,0.85)] backdrop-blur-md border border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(145,94,255,0.22)]'>
        <div className='w-20 h-20 rounded-2xl flex items-center justify-center bg-[rgba(145,94,255,0.08)] border border-[rgba(145,94,255,0.2)] shadow-[0_0_20px_rgba(145,94,255,0.12)]'>
          <img src={icon} alt={title} className='w-12 h-12 object-contain' />
        </div>

        <h3 className='text-white text-[20px] font-bold text-center leading-[28px]'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='max-w-5xl'>
        <p className='text-[#aaa6c3] text-[16px] sm:text-[18px] uppercase tracking-[4px]'>
          Introduction
        </p>

        <h2 className='mt-3 text-white font-black text-[38px] xs:text-[48px] sm:text-[60px] leading-tight'>
          <span className='bg-gradient-to-r from-white via-[#d9ccff] to-[#915EFF] bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(145,94,255,0.28)]'>
            About Me
          </span>
          <span className='text-[#915EFF]'>.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-6 max-w-4xl rounded-2xl border border-[rgba(145,94,255,0.15)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md p-6 sm:p-8 shadow-[0_8px_30px_rgba(145,94,255,0.08)]'
      >
        <p className='text-secondary text-[17px] leading-[32px]'>
          I am Yuvraj, a B.Tech Computer Science and Engineering student at
          Babu Banarasi Das University, Lucknow, with a strong interest in
          software development, frontend web development, and AI/ML-based
          solutions. I enjoy building practical projects using Python, Java,
          JavaScript, React, and MySQL, while continuously improving my problem
          solving skills in Data Structures and Algorithms. My goal is to create
          efficient, scalable, and user-friendly applications that solve real
          world problems and add meaningful value.
        </p>
      </motion.div>

      <div className='mt-16 flex flex-wrap gap-8'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");