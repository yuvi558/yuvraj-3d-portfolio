import {
  Ai,
  fron,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  threejs,
  blackscholes,
  customerchurn,
  employeemanagement,
  taskmanager,
  educationLogo,
  developerLogo,
  techAi,
  techJava,
  techPython,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Journey",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: techPython,
  },
  {
    title: "Java Developer",
    icon: techJava,
  },
  {
    title: "Frontend Web Developer",
    icon: fron,
  },
  {
    title: "AI / ML Developer",
    icon: Ai,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: techPython,
  },
  {
    name: "Java",
    icon: techJava,
  },
  {
    name: "AI / ML",
    icon: techAi,
  },
];

const experiences = [
  {
    title: "B.Tech in Computer Science and Engineering",
    company_name: "Babu Banarasi Das University, Lucknow",
    icon: educationLogo,
    iconBg: "#1d1836",
    date: "2022 - 2026",
    points: [
      "Pursuing B.Tech in Computer Science and Engineering with a CGPA of 7.33/10.",
      "Built a strong foundation in Data Structures and Algorithms, OOPs, DBMS, and software development.",
      "Worked on practical projects in Python, Java, Machine Learning, and Web Development.",
      "Actively improving problem-solving skills through coding practice and project-based learning.",
    ],
  },
  {
    title: "Python & Machine Learning Projects",
    company_name: "Academic / Personal Projects",
    icon: techPython,
    iconBg: "#1d1836",
    date: "2024 - Present",
    points: [
      "Developed a Customer Churn Prediction model using Python, Pandas, NumPy, Scikit-learn, and Matplotlib.",
      "Performed data preprocessing, feature engineering, model training, and evaluation for predictive analysis.",
      "Applied analytical thinking to derive business insights for customer retention strategies.",
      "Built reusable Python-based solutions for data-driven problem-solving.",
    ],
  },
  {
    title: "Frontend Web Development",
    company_name: "React Projects",
    icon: developerLogo,
    iconBg: "#1d1836",
    date: "2024 - Present",
    points: [
      "Developed responsive web applications using React, JavaScript, HTML, and CSS.",
      "Built a Task Manager Web Application with dynamic task handling and reusable components.",
      "Focused on clean UI, maintainable component structure, and responsive layouts.",
      "Improved frontend development skills through hands-on project implementation.",
    ],
  },
  {
    title: "Java & Database Development",
    company_name: "Java + MySQL Projects",
    icon: techJava,
    iconBg: "#1d1836",
    date: "2024 - Present",
    points: [
      "Built an Employee Management System using Java and MySQL.",
      "Implemented CRUD operations and structured database integration.",
      "Applied OOP principles for modular and maintainable code design.",
      "Practiced backend logic, database connectivity, and application structure.",
    ],
  },
  {
    title: "AI / ML Learning Journey",
    company_name: "Projects + Practical Implementation",
    icon: techAi,
    iconBg: "#1d1836",
    date: "2024 - Present",
    points: [
      "Built machine learning projects focused on preprocessing, feature engineering, model training, and evaluation.",
      "Worked on Customer Churn Prediction to understand classification workflows and business-oriented ML solutions.",
      "Strengthened practical understanding of data analysis, model performance, and real-world problem solving.",
      "Continuously learning AI / ML concepts through projects, experimentation, and hands-on implementation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Strong foundation in Python, Java, DSA, OOPs, and practical project development with a continuous learning mindset.",
    name: "Skills Snapshot",
    designation: "Python | Java | React",
    company: "Portfolio Highlights",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Hands-on experience in machine learning, frontend development, database integration, and quantitative finance concepts.",
    name: "Project Focus",
    designation: "ML | Web Dev | Quant",
    company: "Career Interests",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "Motivated software engineering student building practical solutions and strengthening problem-solving through real projects.",
    name: "Career Goal",
    designation: "Software Engineer",
    company: "Aspiring Developer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "Customer Churn Prediction",
    description:
      "Built a machine learning model to identify customers likely to churn using supervised learning. Performed data preprocessing, feature engineering, model training, evaluation, and customer behavior analysis to support retention strategies.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: customerchurn,
    source_code_link: "https://github.com/yuvi558",
  },
  {
    name: "Task Manager Web Application",
    description:
      "Developed a responsive task management web app using React, JavaScript, HTML, and CSS. Implemented reusable components, dynamic task handling, task updates, filtering, and a user-friendly interface for daily productivity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: taskmanager,
    source_code_link: "https://github.com/yuvi558",
  },
  {
    name: "Option Pricing Model (Black-Scholes)",
    description:
      "Implemented the Black-Scholes model in Python to calculate European call and put option prices. Applied quantitative finance concepts, probability distributions, and numerical analysis to build a reusable financial pricing solution.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "quant-finance",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
    ],
    image: blackscholes,
    source_code_link: "https://github.com/yuvi558",
  },
  {
    name: "Employee Management System",
    description:
      "Developed a Java-based Employee Management System integrated with MySQL to manage employee records efficiently. Implemented CRUD operations, database connectivity, and modular object-oriented design for structured data management.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "oops",
        color: "pink-text-gradient",
      },
    ],
    image: employeemanagement,
    source_code_link: "https://github.com/yuvi558",
  },
];

export { services, technologies, experiences, testimonials, projects };