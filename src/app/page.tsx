import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import GithubGraph from '@/components/GithubGraph';
import Project from '@/components/Projects';
import Contact from '@/components/Contact';
import LiveClockWrapper from '@/components/LiveClockWrapper';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Nisha | Portfolio",
  description: "Hi, I’m Nisha—a Full Stack Developer with a passion for building seamless, intuitive applications that make technology accessible and enjoyable.",
  keywords: ["Nisha", "Portfolio", "Next.js Developer", "Frontend Developer", "Projects"],
  authors: [{ name: "Nisha" }],
  openGraph: {
    title: "Nisha | Portfolio",
    description: "Hi, I’m Nisha—a Full Stack Developer with a passion for building seamless, intuitive applications that make technology accessible and enjoyable.",
    type: "website",
    locale: "en_IN",
    url: "https://nissha.space",
  },
};

export default function Home() {
  return (
    <div className="w-full min-h-screen text-neutral-200 overflow-x-hidden bg-neutral-950 relative no-scrollbar" style={{ backgroundImage: "url('/bg-texture.svg')", backgroundPosition: "center", scrollBehavior: "smooth" }}>
      <div className="relative z-10 flex flex-col justify-center items-center sm:p-10 p-5">
        <div className="max-w-96 flex flex-col justify-start sm:max-w-2xl space-y-[-20px]">
          <Navbar />
          <About />
          <ScrollReveal speed={0.0001}>
            <Experience />
          </ScrollReveal>
          <ScrollReveal speed={0.0001}>
            <Education />
          </ScrollReveal>
          <ScrollReveal speed={0.0001}>
            <Skills />
          </ScrollReveal>
          <ScrollReveal speed={0.0001}>
            <GithubGraph />
          </ScrollReveal>
          <ScrollReveal speed={0.0001}>
            <Project />
          </ScrollReveal>
          <ScrollReveal speed={0.0001}>
            <Contact />
          </ScrollReveal>
          <div className="border border-t-1 border-neutral-600 h-px w-full mt-14"></div>
          <div className="flex justify-between mt-7 text-neutral-200 text-sm">
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
