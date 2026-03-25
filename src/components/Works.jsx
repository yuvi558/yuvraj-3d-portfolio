import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.35, 0.75)}>
      <Tilt
        options={{
          max: 18,
          scale: 1.02,
          speed: 350,
        }}
        className='sm:w-[360px] w-full'
      >
        <div className='rounded-[24px] p-[1px] bg-gradient-to-br from-[rgba(145,94,255,0.65)] via-[rgba(145,94,255,0.15)] to-[rgba(255,255,255,0.08)] shadow-[0_10px_35px_rgba(145,94,255,0.12)]'>
          <div className='bg-[rgba(29,24,54,0.88)] backdrop-blur-md p-5 rounded-[24px] border border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(145,94,255,0.2)]'>
            <div className='relative w-full h-[230px] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]'>
              <img
                src={image}
                alt={name}
                className='w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105'
              />

              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className='w-11 h-11 rounded-full flex justify-center items-center cursor-pointer bg-[rgba(0,0,0,0.55)] backdrop-blur-md border border-[rgba(145,94,255,0.35)] shadow-[0_0_18px_rgba(145,94,255,0.22)] hover:scale-110 transition-transform duration-300'
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </div>

            <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px] leading-[30px]'>
                {name}
              </h3>

              <p className='mt-3 text-secondary text-[14px] leading-[24px]'>
                {description}
              </p>
            </div>

            <div className='mt-5 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className={`text-[13px] px-3 py-1 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] ${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='max-w-5xl'>
        <p className='text-[#aaa6c3] text-[16px] sm:text-[18px] uppercase tracking-[4px]'>
          My projects and work
        </p>

        <h2 className='mt-3 text-white font-black text-[38px] xs:text-[48px] sm:text-[60px] leading-tight'>
          <span className='bg-gradient-to-r from-white via-[#d9ccff] to-[#915EFF] bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(145,94,255,0.28)]'>
            Projects
          </span>
          <span className='text-[#915EFF]'>.</span>
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-6 max-w-4xl rounded-2xl border border-[rgba(145,94,255,0.15)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md p-6 sm:p-8 shadow-[0_8px_30px_rgba(145,94,255,0.08)]'
        >
          <p className='text-secondary text-[17px] leading-[32px]'>
            These projects reflect my practical experience in software
            development, frontend web development, machine learning, and problem
            solving. Each project demonstrates my ability to work with different
            technologies, build user-friendly applications, and create solutions
            for real-world use cases through hands-on implementation.
          </p>
        </motion.div>
      </div>

      <div className='mt-16 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");