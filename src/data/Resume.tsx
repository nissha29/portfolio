import { Github, Linkedin, X, Resume, Email } from "@/icons/Icons";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiSocketdotio,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiGit,
  SiGithub,
  SiAmazon,
  SiLinux,
  SiDrizzle,
  SiShadcnui,
} from "react-icons/si";
import { LuCode, LuCpu, LuGlobe } from "react-icons/lu";

export const DATA = {
  name: "Nisha",
  initials: "N",
  url: "",
  location: "Ambala, Haryana, India",
  locationLink: "",
  description: "Full Stack Developer",
  summary:
    "I'm Nisha, a 21-year-old Full Stack Developer from Haryana, India. I started my coding journey in mid-2024, pivoting from government exam preparation to the exciting world of technology. I'm passionate about building seamless, intuitive applications and constantly exploring new tech. I'm always eager to build, learn, and innovate!",
  avatarUrl: "/image.png",

  skills: [
    {
      category: "Languages",
      items: [
        { name: "Javascript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Typescript", icon: SiTypescript, color: "#3178C6" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Shadcn UI", icon: SiShadcnui, color: "#ecececff" },
        { name: "Recoil", icon: LuGlobe, color: "#3578E5" },
        { name: "Zustand", icon: LuGlobe, color: "#443E38" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#ffffff" },
        { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
        { name: "Web Sockets", icon: SiSocketdotio, color: "#ffffff" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "Postgres", icon: SiPostgresql, color: "#336791" },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
        { name: "Drizzle", icon: SiDrizzle, color: "#c8ff00ff" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Github", icon: SiGithub, color: "#ffffff" },
        { name: "AWS", icon: SiAmazon, color: "#FF9900" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
      ],
    },
    {
      category: "Relevant Coursework",
      items: [
        {
          name: "Data Structures and Algorithms",
          icon: LuCode,
          color: "#ffffff",
        },
        { name: "OOPS", icon: LuCpu, color: "#ffffff" },
      ],
    },
  ],

  navbar: [],
  contact: {
    email: "nishakashyap2907@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nissha29",
        icon: Github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nisha-kashyap-5972a9273/",
        icon: Linkedin,
      },
      X: {
        name: "X",
        url: "https://x.com/nissha297",
        icon: X,
      },
      Email: {
        name: "Send Email",
        url: "mailto:nishakashyap2907@gmail.com",
        icon: Email,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1l3mbS2zssn4OsQbSIA3DF-DQL2-K8YU4/view?usp=sharing",
        icon: Resume,
      },
    },
  },

  work: [
    {
      company: "Independent Contract",
      href: "",
      location: "Remote",
      title: "Full Stack Developer (Contract)",
      logoUrl: "",
      start: "June 2025",
      end: "Present",
      description:
        "As a Full Stack Developer, developed 3+ end-to-end client solutions with Next.js, React, Express, and PostgreSQL ensuring every feature aligned with real business needs. Handled UI, backend APIs, and databases to deliver polished and reliable solutions.",
    },
    {
      company: "Ezwiiz Frontier Systems",
      href: "",
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "",
      start: "Jan 2025",
      end: "May 2025",
      description:
        "Aa an intern at EFS, built core modules for an HRMS Attendance System, lowering manual HR work by 40%. Delivered geolocation-driven auto-attendance and improved backend APIs for better and faster responses.",
    },
  ],
  education: [
    {
      school: "Chandigarh Group of Colleges, Landran",
      href: "https://www.cgc.edu.in/",
      degree: "Bachelors of Computer Applications",
      start: "2022",
      end: "2025",
    },
    {
      school: "PKR Jain",
      href: "",
      degree: "High School",
      start: "2014",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "PixEdit",
      href: "https://github.com/nissha29/PixEdit",
      status: "completed",
      description:
        "An intuitive image editor designed for seamless photo enhancement and editing. It allows users to remove or change backgrounds, crop and resize images, apply a range of filters, add customizable text, blur specific parts of photos to mask sensitive details, and draw freely over images. Built-in undo and redo functionality streamline the editing workflow. Users can export their creations in popular formats including JPG, JPEG, PNG, and WEBP, making it versatile for diverse sharing and publishing needs.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "Typescript",
        "Zustand",
        "Next-Auth",
      ],
    },
    {
      title: "Instant Chat",
      href: "https://instant-convo.vercel.app/",
      status: "completed",
      description:
        "A lightweight, real-time chat application that allows users to create temporary chat rooms and communicate instantly without registration.",
      technologies: ["Websockets", "Redis", "Typescript", "Node.js", "React"],
    },
    {
      title: "Personal Portfolio",
      href: "https://nishas-portfolio.vercel.app/",
      status: "completed",
      description:
        "Developed a fully responsive personal portfolio using Next.js and Tailwind CSS. Designed to be mobile-friendly, the portfolio showcases projects, skills, and contact sections with clean UI and smooth user experience.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Client & Server Components",
        "SEO Optimization",
      ],
    },

    {
      title: "Doodle Space",
      href: "https://www.doodlespace.xyz",
      status: "completed",
      description:
        "A collaborative infinite canvas application for visual thinking and creative expression. Features real-time drawing tools, shape creation, text editing, and seamless pan navigation across an unlimited workspace.",
      technologies: [
        "Next.js",
        "Rough.js",
        "Turborepo",
        "Prisma",
        "Websockets",
        "Express.js",
        "Typescript",
        "Zustand",
      ],
    },
    {
      title: "Brain Cache",
      href: "https://brain-cache-extends.vercel.app/",
      status: "completed",
      description:
        "Brain Cache is a powerful knowledge management platform that helps you store, organize, and retrieve important information effectively. It leverages advanced AI and vector database technologies to transform how you interact with your collected knowledge.",
      technologies: [
        "Gemini API",
        "Hugging Face API",
        "Typescript",
        "PineconeDB",
        "React.js",
        "Express.js",
        "MongoDB",
      ],
    },
    {
      title: "Melodia",
      href: "https://melodia-music.netlify.app/",
      status: "completed",
      description:
        "This is a simple music streaming application that allows users to explore, browse, and listen to various tracks, providing an intuitive and smooth user experience for music lovers.",
      technologies: [
        "React",
        "Recoil",
        "Tailwind CSS",
        "Express",
        "MongoDB",
        "Cloudinary",
      ],
    },
  ],
} as const;
