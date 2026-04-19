import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Info = {
  name: "Sunil Sharma",
  stack: ["Software Engineer", "Blockchain Developer", "DevOps Enthusiast"],
  bio: "Full-stack developer specializing in Java/Spring Boot backends and React frontends with hands-on experience in blockchain, DevOps, and cloud-native workflows. I build scalable, secure web applications from RESTful APIs and JWT-authenticated systems to Dockerized CI/CD pipelines and Ethereum-based DApps.",
};

const ProjectInfo = [
  {
    title: "E-Voting System Using Blockchain",
    desc: "A blockchain-based e-voting platform built with React, Express, Solidity, Ethereum, and MongoDB. Features a React-based user interface for improved voter accessibility and usability. Implements multi-factor voter authentication using facial recognition, OTP verification, and MetaMask. Stores application data securely in MongoDB while ensuring immutable vote records on Ethereum.",
    image: "/BlockchainVote.png",
    live: false,
    technologies: ["React", "Express", "Solidity", "Ethereum", "MongoDB"],
    link: "https://github.com/sunil1289/Blockchain-Based-Evoting",
    github: "https://github.com/sunil1289/Blockchain-Based-Evoting",
  },
  {
    title: "Expense Tracker Backend",
    desc: "A backend system for wallet and transaction management built with Spring Boot, Java, PostgreSQL, and Postman. Designed and implemented RESTful APIs for wallet and transaction management. Secured endpoints using JWT-based authentication and role-based access control (RBAC). Used PostgreSQL with JdbcTemplate, optimizing queries for reliable and performant data access.",
    image: "/ExpenseTracker.png",
    live: false,
    technologies: ["SpringBoot", "Java", "PostgreSQL", "JWT", "Git"],
    link: "https://github.com/sunil1289/expense-tracker-api",
    github: "https://github.com/sunil1289/expense-tracker-api",
  },
  {
    title: "Job Portal System",
    desc: "A scalable full-stack job portal built with React (TSX), Tailwind CSS, Spring Boot, and MongoDB. Features JWT authentication and role-based access control (RBAC). Designed RESTful APIs with Spring Boot and optimized MongoDB queries for efficient data retrieval. Developed a responsive dark-mode UI using Tailwind CSS for seamless cross-device experience.",
    image: "/JobPortal.png",
    live: false,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "SpringBoot",
      "MongoDB",
      "JWT",
    ],
    link: "https://github.com/sunil1289/Job-Protal",
    github: "https://github.com/sunil1289/Job-Protal",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Node JS",
      "Express JS",
      "JWT",
      "Lombok",
    ],
  },
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "C", "Solidity", "HTML", "CSS", "SQL"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQlite"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "IntelliJ IDEA",
      "Eclipse",
      "VS Code",
      "Canva",
      "Figma",
      "Postman",
      "Swagger",

      "Ganche",
      "Web3.js",
    ],
  },
];
const socialLinks = [
  { link: "https://github.com/sunil1289", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/sunil-sharma-559655322",
    icon: IconBrandLinkedin,
  },
  { link: "https://www.leetcode.com/u/Psunil1234", icon: IconBrandLeetcode },
];

const ExperienceInfo = [
  {
    role: "DevOps Intern",
    company: "KtmBees",
    date: "July 2025 – Aug 2025",
    desc: "Containerized applications using Docker and Dockerfiles, improving deployment consistency across environments. Designed and configured GitHub Actions CI/CD pipelines, automating build, test, and deployment processes. Worked closely with developers to ensure reliable, repeatable deployments and smoother release workflows.",
    skills: ["Docker", "GitHub Actions", "CI/CD", "DevOps"],
  },
  {
    role: "Blockchain Fellow",
    company: "eSatya",
    date: "May 2025 – Aug 2025",
    desc: "Gained practical experience in blockchain fundamentals, smart contracts, and decentralized applications (DApps). Collaborated in a team to design, develop, and deploy a blockchain-based project using modern Web3 tools. Strengthened understanding of security, immutability, and decentralized system design.",
    skills: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts", "DApps"],
  },
  {
    role: "Java Developer Intern",
    company: "AlphaTeds",
    date: "Oct 2024 – Jan 2025",
    desc: "Developed and enhanced Spring Boot–based backend services, supporting core application features. Implemented RESTful APIs and improved request/response handling, reducing backend errors through structured validation and logging. Gained hands-on experience with code reviews, version control (Git), and collaborative development workflows.",
    skills: ["Spring Boot", "Java", "REST APIs", "Git", "MySQL"],
  },
];

const Slugs = [
  "java",
  "spring",
  "javascript",
  "react",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "nodedotjs",
  "express",
  "postgresql",
  "mysql",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "postman",
  "solidity",
  "ethereum",
  "typescript",
  "tailwindcss",
  "githubactions",
  "intellijidea",
  "jwt",
];

export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
