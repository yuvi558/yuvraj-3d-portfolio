import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='text-center text-[#aaa6c3] text-[16px] sm:text-[18px] uppercase tracking-[4px]'>
          My Technical Stack
        </p>

        <h2
          className='text-center text-white font-black text-[38px] xs:text-[48px] sm:text-[60px] leading-tight mt-2'
          style={{
            textShadow:
              "0 0 10px rgba(145,94,255,0.25), 0 0 24px rgba(145,94,255,0.12)",
          }}
        >
          Skills & Technologies.
        </h2>
      </motion.div>

      {/* Premium intro box */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-6 max-w-4xl mx-auto rounded-2xl border border-[rgba(145,94,255,0.15)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md p-6 sm:p-8 shadow-[0_8px_30px_rgba(145,94,255,0.08)]'
      >
        <p className='text-secondary text-[16px] sm:text-[17px] text-center leading-[30px]'>
          A strong blend of programming, frontend development, and modern tools
          that I use to build scalable applications, interactive web experiences,
          and practical real-world solutions.
        </p>
      </motion.div>

      {/* Tech Balls Grid */}
      <div className='mt-16 flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12'>
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.08, 0.75)}
            className='w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center'
          >
            <div className='relative w-full h-full rounded-full bg-[rgba(255,255,255,0.02)] border border-white/5 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:shadow-[0_0_30px_rgba(145,94,255,0.15)] transition-all duration-300'>
              <BallCanvas icon={technology.icon} />
            </div>

            <p className='mt-3 text-center text-white-100 text-[13px] sm:text-[14px] font-medium tracking-wide'>
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");


