import { Github, Linkedin, X, Resume, Email } from "@/icons/Icons";

export const DATA = {
  name: "Nisha",
  initials: "N",
  url: "",
  location: "Ambala, Haryana, India",
  locationLink: "",
  description:
    "Full Stack Developer",
  summary1:
    "Hi, I’m Nisha—a Full Stack Developer with a passion for building seamless, intuitive applications that make technology accessible and enjoyable. I thrive on bridging the gap between frontend elegance and backend robustness, using modern frameworks and tools to transform creative ideas into reliable, high-performing solutions.",
  summary2: 
    "Driven by curiosity and a commitment to continuous learning, I love tackling new challenges and solving complex problems. Every opportunity to improve, innovate, and collaborate helps me grow as a developer and as a creator.",
  avatarUrl: "/image.png",

  skills: [
  {
    category: "Languages",
    items: ["Javascript/Typescript", "C++", "MySQL"]
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TailwindCSS", "Recoil"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "JWT", "Web Sockets"]
  },
  {
    category: "Database",
    items: ["Postgres", "Prisma", "MongoDB", "PineconeDB"]
  },
  {
    category: "Tools",
    items: ["Git", "Github", "AWS", "Linux"]
  },
  {
    category: "Relevant Coursework",
    items: ["Data Structures", "Algorithms", "OOPS"]
  }
],

  navbar: [
    
  ],
  contact: {
    email: "nishakashyap2907@gmail.com",
    tel: "+918307328690",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nissha29",
        icon: Github
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
      end: "Present",
      description:
        "Spearheaded the development of 3 core modules in a full-stack HRMS Attendance Application, reducing manual HR processes by 40%. Built and optimized RESTful APIs with Node.js and Express, decreasing average response time.",
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
    }
  ],
  projects: [
    {
      title: "Brain Cache",
      href: "https://brain-cache-extends.vercel.app/",
      description:
        "Brain Cache is a powerful knowledge management platform that helps you store, organize, and retrieve important information effectively. It leverages advanced AI and vector database technologies to transform how you interact with your collected knowledge.",
      technologies: [
        "Gemini API", "Hugging Face API", "Typescript", "PineconeDB", "React.js", "Express.js", "MongoDB"
      ],
    },
    {
      title: "Instant Chat",
      href: "https://instant-convo.vercel.app/",
      description:
        "A lightweight, real-time chat application that allows users to create temporary chat rooms and communicate instantly without registration.",
      technologies: [
        "Websockets", "Redis", "Typescript", "Node.js", "React"
      ],
    },
    {
      title: "Melodia",
      href: "https://melodia-music.netlify.app/",
      description:
        "This is a simple music streaming application that allows users to explore, browse, and listen to various tracks, providing an intuitive and smooth user experience for music lovers.",
      technologies: [
        "React", "Recoil", "Tailwind CSS", "Express", "MongoDB", "Cloudinary"
      ],
    },
  ],
} as const;