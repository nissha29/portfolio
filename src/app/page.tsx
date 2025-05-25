import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Project from '@/components/Projects';
import Contact from '@/components/Contact';
import LiveClockWrapper from '@/components/LiveClockWrapper';

export const metadata = {
  title: "Nisha | Portfolio",
  description: "Personal portfolio website built with Next.js, showcasing projects, skills, education, and contact information.",
  keywords: ["Nisha", "Portfolio", "Next.js Developer", "Frontend Developer", "Projects"],
  authors: [{ name: "Nisha" }],
  openGraph: {
    title: "Nisha | Portfolio",
    description: "Frontend developer portfolio built with Next.js and Tailwind CSS",
    type: "website",
    locale: "en_IN",
    url: "https://nishas-portfolio.vercel.app/",
  },
};

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#222222] text-white overflow-x-hidden">
      <div className="flex flex-col justify-center items-center sm:p-10 p-5">
        <div className="max-w-96 flex flex-col justify-start sm:max-w-2xl">
          <Navbar />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Project />
          <Contact />
          <div className="border border-t-1 border-neutral-600 h-px w-full mt-10"></div>
          <div className="flex justify-between mt-3 text-neutral-400 text-sm">
            <div>Haryana, India</div>
            <div className="flex gap-2 justify-center">
              <LiveClockWrapper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
