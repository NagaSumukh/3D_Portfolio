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
    // chash,
    docker,
    meta,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      id: "resume",
      title: "Resume"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "C# Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "C#",
      icon: redux,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "C# Developer",
      company_name: "Juego Studios",
      icon: meta,
      iconBg: "#383E56",
      date: "January 2020 - September 2022",
      points: [
        "Spearheaded the development and deployment of a diverse range of iOS and Android games using Unity Engine with C#, including engaging arcade, MMO, and Role-playing titles.",
        "Collaborating with cross-functional teams including designers, product managers, testers and other developers to create high-quality products.",
        "Demonstrated expertise in configuring variety of SDKs, encompassing Google API’s, Firebase, Facebook API’s, Google Ads, and Unity In-App Purchases.",
        "Engineered and executed innovative editor scripts to seamlessly integrate SDKs, resulting in a substantial 30% reduction in project delivery time and heightened team productivity.",
      ],
    },
    {
      title: "Intern Game Developer",
      company_name: "In-Orbit Systems",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developed Cat Runner game’s backend using Node.js for seamless performance and functionality.",
        "Designed and implemented RESTful APIs for in-game features, including profiles, scores, and levels.",
        "Innovated immersive Heads-Up Display(HUD), collaborated on asset integration for polished gameplay experience.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Campus Feedback System ",
      description:
        "Designed and implemented a university campus feedback system, enhanced with Docker for efficient deployment, resulting in a 70% increase in scalability and a 40% reduction in deployment time; automated processes using Jenkins, GitHub, and Docker Hub, and orchestrated clustered deployment on AWS with Rancher for optimized container control.",
      tags: [
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
        {
          name: "Rancher",
          color: "green-text-gradient",
        },
        {
          name: "Jenkins",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/NagaSumukh/Campus-Feedback-System",
    },
    {
      name: "Dynamic Recruitment Platform",
      description:
        "Designed and implemented a web-based recruitment platform with CRUD operations, streamlining the hiring process. This project includes modules for job applications, interviews, job postings, and user management. The platform features a user-friendly login, registration, and personalized dashboards for efficient job application and posting management. Data visualization tools, such as company-wise job posting charts, aid recruiters in making informed decisions. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/NagaSumukh/JobPortal",
    },
    {
      name: "Personal Portfolio Website",
      description:
        "Explore my journey and skills through my personal portfolio website. This project serves as a reflection of my passion for web development and showcases a collection of my diverse skills. From the seamless user interface to the underlying code, I have meticulously crafted this space to represent my abilities in creating engaging and responsive web experiences.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/NagaSumukh/3D_Portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };