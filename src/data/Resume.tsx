import { Github, Linkedin, X, Resume, Email } from "@/icons/Icons";

export const DATA = {
  name: "Nisha",
  initials: "N",
  url: "",
  location: "Ambala, Haryana, India",
  locationLink: "",
  description: "Full Stack Developer",
  summary: "",
  avatarUrl: "/image.png",

  skills: [
    {
      category: "Languages",
      items: ["Javascript/Typescript", "C++", "MySQL"],
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TailwindCSS", "Recoil", "Zustand"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "JWT", "Web Sockets", "Next.js"],
    },
    {
      category: "Database",
      items: ["Postgres", "Prisma", "MongoDB", "PineconeDB"],
    },
    {
      category: "Tools",
      items: ["Git", "Github", "AWS", "Linux"],
    },
    {
      category: "Relevant Coursework",
      items: ["Data Structures and Algorithms", "OOPS"],
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
        url: "https://drive.google.com/file/d/1AErNovM-oB3tG-o_ti6B8FAIsanvGjVn/view?usp=drive_link",
        icon: Resume,
      },
    },
  },

  work: [
    {
      company: "Ezwiiz Frontier Systems",
      href: "",
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "",
      start: "May 2025",
      end: "June 2025",
      description: "",
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
      status: 'progress',
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
      title: "Doodle Space",
      href: "https://www.doodlespace.xyz",
      status: 'completed',
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
        "Zustand"
      ],
    },
    {
      title: "Brain Cache",
      href: "https://brain-cache-extends.vercel.app/",
      status: 'comeleted',
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
      title: "Instant Chat",
      href: "https://instant-convo.vercel.app/",
      status: 'comeleted',
      description:
        "A lightweight, real-time chat application that allows users to create temporary chat rooms and communicate instantly without registration.",
      technologies: ["Websockets", "Redis", "Typescript", "Node.js", "React"],
    },
    {
      title: "Melodia",
      href: "https://melodia-music.netlify.app/",
      status: 'comeleted',
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
    {
      title: "Personal Portfolio",
      href: "https://nishas-portfolio.vercel.app/",
      status: 'comeleted',
      description:
        "Developed a fully responsive personal portfolio using Next.js and Tailwind CSS. Designed to be mobile-friendly, the portfolio showcases projects, skills, and contact sections with clean UI and smooth user experience.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Client & Server Components",
        "SEO Optimization",
      ],
    },
  ],
} as const;
