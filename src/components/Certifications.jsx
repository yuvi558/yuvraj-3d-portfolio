import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const certificationData = [
  {
    title: "Python Programming",
    image: "/certificates/python-cert.png",
    description:
      "Built a strong foundation in Python programming including data structures, functions, file handling, problem solving, and basic application development.",
  },
  {
    title: "Artificial Intelligence / Machine Learning",
    image: "/certificates/ai-ml-cert.png",
    description:
      "Worked on machine learning concepts including data preprocessing, feature engineering, model training, and evaluation through practical projects such as customer churn prediction.",
  },
  {
    title: "Java Programming",
    image: "/certificates/java-cert.png",
    description:
      "Completed hands-on learning in object-oriented programming, classes, inheritance, exception handling, and multithreading using Java.",
  },
  {
    title: "AWS Cloud Fundamentals",
    image: "/certificates/aws-cert.png",
    description:
      "Gained knowledge of core AWS services including EC2, S3, IAM, and cloud deployment fundamentals for scalable application hosting.",
  },
  {
    title: "Delta Full Stack Development",
    image: "/certificates/fullstack-cert.png",
    description:
      "Completed training in full stack web development covering frontend, backend, databases, REST APIs, and project-based application development.",
  },
  {
    title: "Data Structures and Algorithms",
    image: "/certificates/dsa-cert.png",
    description:
      "Practiced coding problems on arrays, recursion, sliding window, permutations, and optimization techniques using Python and Java.",
  },
];

const achievementData = [
  "Built 4 practical projects in Machine Learning, Frontend Web Development, Quantitative Finance, and Java + MySQL.",
  "Developed a Customer Churn Prediction model using Python, Pandas, NumPy, Scikit-learn, and Matplotlib.",
  "Created a responsive Task Manager Web Application using React, JavaScript, HTML, and CSS.",
  "Implemented the Black-Scholes Option Pricing Model in Python for European call and put valuation.",
  "Built an Employee Management System with Java and MySQL using CRUD operations and database integration.",
  "Continuously strengthening problem-solving skills through Data Structures and Algorithms practice.",
];

const Certifications = () => {
  return (
    <section className="mt-20">
      <div className="text-center max-w-5xl mx-auto">
        <p className="text-[#aaa6c3] text-[16px] sm:text-[18px] uppercase tracking-[4px]">
          Certifications and highlights
        </p>

        <h2 className="mt-3 text-white font-black text-[38px] xs:text-[48px] sm:text-[60px] leading-tight">
          <span className="bg-gradient-to-r from-white via-[#d9ccff] to-[#915EFF] bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(145,94,255,0.28)]">
            Certifications & Achievements
          </span>
          <span className="text-[#915EFF]">.</span>
        </h2>

        <div className="mt-5 mx-auto w-32 h-1 rounded-full bg-gradient-to-r from-transparent via-[#915EFF] to-transparent" />
      </div>

      <div className="mt-6 max-w-4xl mx-auto rounded-2xl border border-[rgba(145,94,255,0.15)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md p-6 sm:p-8 shadow-[0_8px_30px_rgba(145,94,255,0.08)]">
        <p className="text-secondary text-[17px] text-center leading-[32px]">
          These certifications and achievements reflect my continuous learning
          journey in software development, frontend web development, AI/ML,
          cloud fundamentals, and problem solving through hands-on projects and
          practical implementation.
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-white text-[28px] font-bold mb-8 text-center sm:text-left">
          Certifications
        </h3>

        <div className="flex flex-wrap gap-7 justify-center sm:justify-start">
          {certificationData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="sm:w-[320px] w-full"
            >
              <div className="rounded-[24px] p-[1px] bg-gradient-to-br from-[rgba(145,94,255,0.65)] via-[rgba(145,94,255,0.15)] to-[rgba(255,255,255,0.08)] shadow-[0_10px_35px_rgba(145,94,255,0.12)]">
                <div className="rounded-[24px] p-6 bg-[rgba(29,24,54,0.88)] backdrop-blur-md border border-[rgba(255,255,255,0.06)] min-h-[320px] flex flex-col items-center text-center">
                  
                  <div className="w-[120px] h-[80px] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#1d1836] shadow-[0_4px_18px_rgba(145,94,255,0.12)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-5 text-white text-[20px] font-bold leading-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-secondary text-[14px] leading-[24px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-white text-[28px] font-bold mb-8 text-center sm:text-left">
          Achievements
        </h3>

        <div className="rounded-[24px] p-[1px] bg-gradient-to-br from-[rgba(145,94,255,0.55)] via-[rgba(145,94,255,0.12)] to-[rgba(255,255,255,0.08)] shadow-[0_10px_35px_rgba(145,94,255,0.12)]">
          <div className="rounded-[24px] p-8 bg-[rgba(29,24,54,0.88)] backdrop-blur-md border border-[rgba(255,255,255,0.06)]">
            <ul className="space-y-4">
              {achievementData.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-white-100 text-[16px] leading-[28px]"
                >
                  <span className="text-[#915EFF] text-[18px] mt-[2px]">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Certifications, "certifications");