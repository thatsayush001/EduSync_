import { AppD, Blockchain, Design, Foss, Infosec, Ml, WebD } from "../../assets";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Cp,
  Dean,Direct,
  Ecell,Fcup,FossLog,Kaggle,VKS, Hof
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Keeping Track",
    icon: web,
  },
  {
    title: "Class Scheduling",
    icon: mobile,
  },
  {
    title: "Provides Assistance",
    icon: backend,
  },
  {
    title: "College Updates",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Hack-o-Fiesta",
    company_name:"Hackathon",
    icon: Hof,
    iconBg: "#383E56",
    date: "August 2023",
    points: [
      "The annual hackathon hosted by IIIT Lucknow, back with its fourth edition",
      "Individuals participate in teams of 5 or less,developing a web app fostering creativity and innovation with unique project ideas.",
      "Lasting 36 hours, with food supplies and refreshments",
      "Prizes worth 10,00,000 rupees", 
    ],
  },
  {
    title: "Fresher's Cup",
    company_name: "Competitive Coding",
    icon: Fcup,
    iconBg: "#E6DEDD",
    date: "August 2023",
    points: [
      "A team-based (of 1-3 members), ICPC style programming contest conducted specially for the freshers of IIIT Lucknow in which they go head to head with the coding enthusiasts of their batch.",
      "The contest will be held in two rounds, the first one being online qualifications. From here, only the top sharpest teams get to the finals.",
     "Prizes worth 5,000 rupees",      
    ],
  },
  {
    title: "FOSS Weekend",
    company_name: "Open-Source",
    icon: FossLog,
    iconBg: "#383E56",
    date: "October 2023",
    points: [
      "A rank based fun competition to awake the open-sourceror in you",
      "Lasting 2 days, with options to Choose from a wide range of projects in Git, Web Development, App Development, ML, and Scripting.",
     "Tackle issues with ease using the difficulty-level labels.",
     "Climb to the top of the leaderboard and win some amazing prizes! ",


      
    ],
  },
  {
    title: "Kaggle Week",
    company_name: "Data Science",
    icon: Kaggle,
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [
       "A challenge requiring participants to solve a real-world problem using data science techniques,",
       "Open for all, the aim is to get the highest accuracy in training and predicting results by the model",
       "Prize pool worth Rs10,000 for the top performers.",


    ],
  },
];

const testimonials = [
  {
    testimonial:
       "An institute slowly growing to become the hub of tech exellence, inculcating cultural and euntrepreneurial values, on its way to become a Tier-1 institue.",
    name: "Dr. Arun Mohan Sherry",
    designation: "Director",
    company: "IIIT Lucknow",
    image: Direct,
  },
  {
    testimonial:
    "The students of IIITL emerge as well rounded individuals,with technical skillset, communicational prowess and agile minds.",
    name: "Dr. Dhananjoy Dey ",
    designation: "Dean(Academic)",
    company: "IIIT Lucknow",
    image: Dean,
  },
  {
    testimonial:
      "Keeping in mind that the first batch achieved the highest C.T.C being 28 Lakhs, surpasses other newly established IIITs and is exponentially increasing the bar!!",
    name: "Dr. Vishal Krishna Singh",
    designation: "Faculty In-Charge(Placements)",
    company: "IIIT Lucknow",
    image: VKS,
  },
];

const projects = [
  {
    name: "Competitve Programming",
    description:
    "Students may hone their coding abilities and get ready for competitive programming competitions by attending seminars and training sessions held.",
    tags: [
      {
        name: "cses",
        color: "blue-text-gradient",
      },
      {
        name: "STL",
        color: "green-text-gradient",
      },
      {
        name: "logic",
        color: "pink-text-gradient",
      },
    ],
    image: Cp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web Development",
    description:
      "The Web Development wing conducts training sessions to help students improve their skills in areas such as HTML, CSS, JavaScript, and web frameworks like React, Angular, and Vue",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: WebD,
    source_code_link: "https://github.com/",
  },
  {
    name: "Machine Learning",
    description:
      "The AI-ML wing holds training sessions to assist students in honing their abilities in data analysis, data preprocessing, machine learning algorithms, and deep learning as well as deployment.",
    tags: [
      {
        name: "CV",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: Ml,
    source_code_link: "https://github.com/",
  },
  {
    name: "Free and Open Source Software",
    description:
      "The FOSS wing hones student in Collaborative working and contributing to projects on Github . It provides insights into open source techniques and contests.",
    tags: [
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "repo",
        color: "green-text-gradient",
      },
      {
        name: "fork",
        color: "pink-text-gradient",
      },
    ],
    image: Foss,
    source_code_link: "https://github.com/",
  },
  {
    name: "App Development",
    description:
      "It teaches students iOS app development, Android app development, cross-platform app development, and app design. The workshops cover topics such as app development fundamentals, and app testing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: AppD,
    source_code_link: "https://github.com/",
  },
  {
    name: "Information Security",
    description:
      "It imparts skills in areas such as network security, web application security, cryptography, and ethical hacking. The workshops cover topics such as cyber threats, cyber attacks, and countermeasures.",
    tags: [
      {
        name: "CTF",
        color: "blue-text-gradient",
      },
      {
        name: "Linux",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: Infosec,
    source_code_link: "https://github.com/",
  },
  {
    name: "Design and UI",
    description:
      "It helps students improve their skills in areas such as design principles, typography, colour theory, and design tools such as Adobe Photoshop, Illustrator, Canva and Sketch.",
    tags: [
      {
        name: "canva",
        color: "blue-text-gradient",
      },
      {
        name: "visual",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Design,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blockchain Technology",
    description:
      "The Blockchain wing provides training sessions and events to help students learn about blockchain technology and showcase their skills.",
    tags: [
      {
        name: "Etherium",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "bitcoin",
        color: "pink-text-gradient",
      },
    ],
    image: Blockchain,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-cell",
    description:
      "A student-run organization empowering students to become entrepreneurs and turn their ideas into reality,.It offers speaker sessions, startup contests, and funding. ",
    tags: [
      {
        name: "finance",
        color: "blue-text-gradient",
      },
      {
        name: "enspire",
        color: "green-text-gradient",
      },
      {
        name: "incubation",
        color: "pink-text-gradient",
      },
    ],
    image: Ecell,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
