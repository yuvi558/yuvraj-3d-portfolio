import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.3, 0.75)}
    whileHover={{
      scale: 1.05,
      rotateX: 6,
      rotateY: -6,
      y: -8,
    }}
    transition={{ type: "spring", stiffness: 250, damping: 18 }}
    className='xs:w-[250px] w-full'
    style={{ transformStyle: "preserve-3d" }}
  >
    <div className='w-full p-[1px] rounded-[20px] bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#4c1d95] shadow-[0_0_25px_rgba(145,94,255,0.35)]'>
      <div className='bg-tertiary rounded-[20px] py-6 px-8 min-h-[280px] flex justify-evenly items-center flex-col backdrop-blur-md border border-white/10'>
        <div className='w-20 h-20 rounded-full bg-black/30 flex items-center justify-center shadow-[0_0_20px_rgba(145,94,255,0.25)]'>
          <img
            src={icon}
            alt={title}
            className='w-14 h-14 object-contain'
          />
        </div>

        <h3 className='text-white text-[20px] font-bold text-center mt-4'>
          {title}
        </h3>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am Yuvraj, a B.Tech Computer Science and Engineering student at
        Babu Banarasi Das University, Lucknow, with a strong interest in
        software development, frontend web development, and AI/ML-based
        solutions. I enjoy building practical projects using Python, Java,
        JavaScript, React, and MySQL, while continuously improving my problem
        solving skills in Data Structures and Algorithms. My goal is to create
        efficient, scalable, and user-friendly applications that solve real
        world problems and add meaningful value.
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