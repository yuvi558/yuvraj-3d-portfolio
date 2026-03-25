import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(21, 16, 48, 0.85)",
        color: "#fff",
        border: "1px solid rgba(145, 94, 255, 0.25)",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.35), 0 0 20px rgba(145, 94, 255, 0.12)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(145, 94, 255, 0.35)" }}
      date={experience.date}
      dateClassName='text-white font-semibold'
      iconStyle={{
        background: experience.iconBg,
        boxShadow:
          "0 0 0 4px rgba(145, 94, 255, 0.25), 0 0 25px rgba(145, 94, 255, 0.35)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[65%] h-[65%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-extrabold tracking-wide'>
          {experience.title}
        </h3>
        <p
          className='text-[#b8b8d1] text-[16px] font-semibold mt-1'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-3'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider leading-[24px]'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center tracking-[3px] uppercase`}>
          My Learning and Development Path
        </p>

        <h2
          className={`${styles.sectionHeadText} text-center`}
          style={{
            textShadow:
              "0 0 10px rgba(145,94,255,0.35), 0 0 30px rgba(145,94,255,0.15)",
          }}
        >
          Education & Journey.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
          lineColor='rgba(145, 94, 255, 0.55)'
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");