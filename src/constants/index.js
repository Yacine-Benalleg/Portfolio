import {
  discordBlack,
  file02,
  homeSmile,
  notification2,
  notification3,
  notification4,
  plusSquare,
  searchMd,
  telegram,
  mailIcon,
  githubIcon,
  CardUrl,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "3",
    title: "Projects",
    url: "#projects",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const focusAndTech = [
  "Applied Mathematics",
  "Optimization",
  "Data Analysis",
  "Statistics",
  "Algorithms",
  "Financial Mathematics",
  "React",
  "Python",
  "MATLAB",
  "R",
  "UI/UX",
  "Git",
];

export const projects = [
  {
    id: "0",
    title: "Smart Budget Optimizer",
    text: "A data-driven budget management app with expense tracking, optimization logic, and visual analytics.",
    tech: "React, Tailwind, Data Analysis",
    demo: "https://smart-budget-optimizer-beta.vercel.app",
    github: "https://github.com/Yacine-Benalleg/smart-budget-optimizer",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: CardUrl,
  },

  {
    id: "1",
    title: "Zentry UI/UX Website",
    text: "Award-inspired animated website showcasing advanced UI/UX design and motion effects.",
    tech: "React, Tailwind, GSAP",
    demo: "https://zentry-yacine.vercel.app/",
    github: "https://github.com/Yacine-Benalleg/zentry_yacine",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    light: true,
    imageUrl: CardUrl,
  },

  {
    id: "2",
    title: "Frontend Mastery",
    text: "My first web project built with HTML, Tailwind, and JavaScript to practice frontend fundamentals.",
    tech: "HTML, Tailwind, JavaScript",
    demo: "https://frontend-mastery-g300jj26x-yacine-benallegs-projects.vercel.app/",
    github: "https://github.com/Yacine-Benalleg/Frontend-Mastery",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: CardUrl,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/users/799283995426422784",
  },
  {
    id: 1,
    title: "Email",
    url: "mailto:yacine.benalleg@gmail.com",
    iconUrl: mailIcon,
  },
  {
    id: 2,
    title: "GitHub",
    url: "https://github.com/Yacine-Benalleg",
    iconUrl: githubIcon,
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
];
