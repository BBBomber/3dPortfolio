import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    unity,
    unreal,
    Luminary,
    bee,
    roulette,
    Workit,
    retro,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Game Developer",
      icon: backend,
    },
    {
      title: "Game Designer",
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
      name: "Unity",
      icon: unity,
    },
    {
      name: "Unreal-Engine",
      icon: unreal,
    },
  ];
  
  const experiences = [
    {
      title: "Unreal-Engine Game Developer",
      company_name: "Luminary game Labs",
      icon: Luminary,
      iconBg: "#383E56",
      date: "March 2022 - March 2023",
      points: [
        "Developing and maintaining codebase for games in Unreal Engine",
        "Collaborating with cross-functional teams including designers, clients, and managers to create an engaging product.",
        "Implementing effecient and robust design principles in building compact hyper realisting games.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Unity Game Developer",
      company_name: "Trippy Bug",
      icon: bee,
      iconBg: "#E6DEDD",
      date: "march 2023 - August 2023",
      points: [
        "Developing and maintaining 2D Unity Games for various clients",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a game as beautiful as our product, but Yash proved me wrong.",
      name: "Ritik Roshan",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a Game developer who truly cares about their clients' success like Yash does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Yash optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Simpson",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Casino Roulette",
      description:
        "A Hyper-Realistic Roulette Simulation in Unreal Engine 4 connected to a restAPI",
      tags: [
        {
          name: "UE-4",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "restAPI",
          color: "pink-text-gradient",
        },
      ],
      image: roulette,
      source_code_link: "https://luminarygamelabs.com/",
    },
    {
      name: "Landing Page",
      description:
        "A Simple landing page I made when I was learning webdev",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: Workit,
      source_code_link: "https://bbbomber.github.io/Workit-Landing-Page/",
    },
    {
      name: "Retro-Glitch",
      description:
        "A Game which re-imagines classic games like tetris, breakout, and pinball in a 3d RPG setting",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: retro,
      source_code_link: "https://luminarygamelabs.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };