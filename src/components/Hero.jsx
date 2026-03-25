import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[110px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_20px_rgba(145,94,255,0.8)]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='max-w-3xl'>
          <h1
            className={`${styles.heroHeadText} text-white`}
            style={{
              textShadow:
                "0 0 12px rgba(145,94,255,0.35), 0 0 28px rgba(145,94,255,0.12)",
            }}
          >
            Hi, I'm <span className='text-[#915EFF]'>YUVRAJ</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer, Python Developer <br className='sm:block hidden' />
            and Frontend Web Developer
          </p>

          {/* Primary Resume Buttons */}
          <div className='mt-8 flex flex-wrap gap-4'>
            <a
              href='/resume.pdf'
              download
              className='px-6 py-3 rounded-xl bg-[#915EFF] text-white font-semibold shadow-[0_8px_30px_rgba(145,94,255,0.35)] hover:scale-105 hover:shadow-[0_12px_35px_rgba(145,94,255,0.45)] transition-all duration-300'
            >
              Download Resume
            </a>

            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-3 rounded-xl border border-[#915EFF] text-[#915EFF] font-semibold bg-[rgba(145,94,255,0.06)] backdrop-blur-sm hover:bg-[#915EFF] hover:text-white transition-all duration-300'
            >
              View Resume
            </a>
          </div>

          {/* Social / Profile Buttons */}
          <div className='mt-5 flex flex-wrap gap-3'>
            <a
              href='https://github.com/yuvi558'
              target='_blank'
              rel='noopener noreferrer'
              className='px-5 py-2.5 rounded-lg border border-white/10 bg-[rgba(255,255,255,0.03)] text-white text-[14px] font-medium backdrop-blur-sm hover:border-[#915EFF] hover:text-[#915EFF] hover:shadow-[0_0_20px_rgba(145,94,255,0.18)] transition-all duration-300'
            >
              GitHub
            </a>

            <a
              href='https://www.linkedin.com/in/yuvraj-singh-970116331/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-5 py-2.5 rounded-lg border border-white/10 bg-[rgba(255,255,255,0.03)] text-white text-[14px] font-medium backdrop-blur-sm hover:border-[#915EFF] hover:text-[#915EFF] hover:shadow-[0_0_20px_rgba(145,94,255,0.18)] transition-all duration-300'
            >
              LinkedIn
            </a>

            <a
              href='https://leetcode.com/u/XFnnTd8lOQ/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-5 py-2.5 rounded-lg border border-white/10 bg-[rgba(255,255,255,0.03)] text-white text-[14px] font-medium backdrop-blur-sm hover:border-[#915EFF] hover:text-[#915EFF] hover:shadow-[0_0_20px_rgba(145,94,255,0.18)] transition-all duration-300'
            >
              LeetCode
            </a>
          </div>

          {/* Small Highlight Badge */}
          <div className='mt-6 inline-flex items-center gap-2 rounded-full border border-[rgba(145,94,255,0.25)] bg-[rgba(145,94,255,0.08)] px-4 py-2 text-[13px] text-[#d7c9ff] backdrop-blur-md shadow-[0_0_20px_rgba(145,94,255,0.12)]'>
            <span className='w-2 h-2 rounded-full bg-[#915EFF] animate-pulse' />
            Open to Internship & Software Development Opportunities
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 shadow-[0_0_18px_rgba(145,94,255,0.15)]'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;