import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className='relative z-10 mt-10 overflow-hidden border-t border-white/10 bg-[rgba(8,10,25,0.88)] backdrop-blur-xl'
    >
      {/* Glowing top line */}
      <div className='absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-80 shadow-[0_0_20px_rgba(145,94,255,0.7)]' />

      {/* Background glow blobs */}
      <div className='absolute -top-10 left-10 w-32 h-32 rounded-full bg-[#915EFF]/10 blur-3xl' />
      <div className='absolute -bottom-10 right-10 w-40 h-40 rounded-full bg-[#915EFF]/10 blur-3xl' />

      <div className='relative max-w-7xl mx-auto px-6 sm:px-16 py-8 flex flex-col gap-6'>
        {/* Top Section */}
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
          {/* Brand */}
          <div className='flex items-center gap-4'>
            <motion.div
              animate={{
                y: [0, -4, 0],
                boxShadow: [
                  "0 0 20px rgba(145,94,255,0.25)",
                  "0 0 30px rgba(145,94,255,0.45)",
                  "0 0 20px rgba(145,94,255,0.25)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-12 h-12 rounded-2xl bg-[#915EFF] flex items-center justify-center'
            >
              <span className='text-white text-[24px] font-extrabold'>Y</span>
            </motion.div>

            <div>
              <h3 className='text-white text-[20px] sm:text-[22px] font-bold tracking-wide'>
                Yuvraj | Portfolio
              </h3>
              <p className='text-secondary text-[14px] mt-1 max-w-md'>
                Building software, frontend experiences, and practical real-world solutions.
              </p>
            </div>
          </div>

          {/* Social Buttons */}
          <div className='flex flex-wrap gap-3'>
            <a
              href='https://github.com/yuvi558'
              target='_blank'
              rel='noopener noreferrer'
              className='px-4 py-2 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] text-white text-[14px] font-medium hover:border-[#915EFF] hover:text-[#915EFF] hover:shadow-[0_0_20px_rgba(145,94,255,0.22)] transition-all duration-300'
            >
              GitHub
            </a>

            <a
              href='https://www.linkedin.com/in/yuvraj-singh-970116331/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-4 py-2 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] text-white text-[14px] font-medium hover:border-[#915EFF] hover:text-[#915EFF] hover:shadow-[0_0_20px_rgba(145,94,255,0.22)] transition-all duration-300'
            >
              LinkedIn
            </a>

            <a
              href='https://leetcode.com/u/XFnnTd8lOQ/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-4 py-2 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] text-white text-[14px] font-medium hover:border-[#915EFF] hover:text-[#915EFF] hover:shadow-[0_0_20px_rgba(145,94,255,0.22)] transition-all duration-300'
            >
              LeetCode
            </a>

            <a
              href='mailto:yuvraj00000999@gmail.com'
              className='px-4 py-2 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] text-white text-[14px] font-medium hover:border-[#915EFF] hover:text-[#915EFF] hover:shadow-[0_0_20px_rgba(145,94,255,0.22)] transition-all duration-300'
            >
              Email
            </a>
          </div>
        </div>

        {/* Center CTA Strip */}
        <div className='rounded-2xl border border-[rgba(145,94,255,0.15)] bg-[rgba(145,94,255,0.05)] px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_0_20px_rgba(145,94,255,0.08)]'>
          <p className='text-[#d9cbff] text-[14px] sm:text-[15px]'>
            Open to <span className='text-white font-semibold'>Job Opportunities</span>,{" "}
            <span className='text-white font-semibold'>Software Development</span>,{" "}
            <span className='text-white font-semibold'>Python Development</span>, and{" "}
            <span className='text-white font-semibold'>Frontend Web Development</span> roles.
          </p>

          <a
            href='#'
            className='px-4 py-2 rounded-xl bg-[#915EFF] text-white text-[14px] font-semibold shadow-[0_8px_25px_rgba(145,94,255,0.28)] hover:scale-105 transition-all duration-300'
          >
            Back to Top ↑
          </a>
        </div>

        {/* Bottom Section */}
        <div className='pt-4 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3'>
          <p className='text-secondary text-[14px]'>
            © {new Date().getFullYear()} Yuvraj. All rights reserved.
          </p>

          <p className='text-secondary text-[14px]'>
            Built with <span className='text-white font-medium'>React</span> +{" "}
            <span className='text-white font-medium'>Three.js</span> +{" "}
            <span className='text-white font-medium'>Framer Motion</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;