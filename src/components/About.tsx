import Image from "next/image";
import { Comfortaa } from "next/font/google";
import { DATA } from "@/data/Resume";
import SectionHeading from "./ui/SectionHeading";

const comfortaa = Comfortaa({ subsets: ["latin"], weight: "300" });

export default function About() {
  return (
    <div>
      <div className="pt-16">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <div
              className={`text-neutral-300 text-4xl sm:text-5xl font-extralight flex-wrap ${comfortaa.className}`}
            >
              <div className="relative inline-block group">
                <span className="relative z-10 bg-gradient-to-r from-white via-rose-200 to-white bg-clip-text text-transparent group-hover:from-rose-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-700">
                  {DATA.name}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-rose-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/0 via-rose-500/5 to-purple-500/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
            <div className="text-lg sm:text-xl text-rose-400/80">
              {DATA.description}
            </div>
            <div className="mt-2">
              <div className="inline-flex gap-3 items-center border border-green-500/20 bg-green-500/5 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] transition-all duration-500 cursor-default group">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 duration-1000"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 group-hover:bg-green-400 transition-colors"></span>
                </span>
                <span className="text-green-400/90 text-sm font-medium group-hover:text-green-300 transition-colors">
                  Open to new opportunities
                </span>
              </div>
            </div>
          </div>

          <div className="p-2 rounded-full">
            <Image
              src={DATA.avatarUrl}
              alt="Nisha"
              width={200}
              height={20}
              className="w-32 h-32 rounded-full"
            />
          </div>
        </div>
        <div className="pt-8">
          <SectionHeading>About Me</SectionHeading>
        </div>
        <div className="pt-2 text-neutral-400/80">
          <div>
            hyyyyyy I’m
            <span className="text-white/85">
              {" "}
              Nisha — a 21yo Developer
            </span>{" "}
            from Haryana with a passion for building seamless, intuitive
            applications that make technology accessible and enjoyable.
            <div className="pt-3">
              I started my dev journey back in mid of 2024. Since then, im
              <span className="text-white/85"> exploring the tech</span>{" "}
              continuously. Before that, i was preparing for some government
              exams <span className="text-white">^_^</span>. This field got me{" "}
              <span className="text-white/85">ツ</span>. Always eager to{" "}
              <span className="text-white/85">build, learn, and innovate!</span>{" "}
              Currently <span className="text-white/80">available</span> for new
              opportunities and excited to collaborate.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
