import Image from "next/image";
import { Comfortaa } from "next/font/google";
import { DATA } from "@/data/Resume";

const comfortaa = Comfortaa({ subsets: ["latin"], weight: "300" });

export default function About() {
  return (
    <div>
      <div className="pt-16">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <div
              className={`text-neutral-300 text-2xl sm:text-5xl font-extralight flex-wrap ${comfortaa.className}`}
            >
              {DATA.name}
            </div>
            <div className="text-lg sm:text-xl text-rose-400">
              {DATA.description}
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
        <div className="pt-6">
          <span className="text-2xl text-rose-400 font-extralight">
            About Me
          </span>
        </div>
        <div className="pt-2 text-neutral-400">
          <div>
            hyyyyyy I’m
            <span className="text-white"> Nisha — a 20yo Developer</span> from Haryana with a
            passion for building seamless, intuitive applications that make
            technology accessible and enjoyable.
            <div className="pt-3">
              I started my dev journey back in mid of 2024 (<span className="text-white">bit late i know •︵•</span>). Since then, im
              <span className="text-white">
                {" "}
                exploring the tech
              </span> continuously. Before that, i was preparing for some government exams <span className="text-white">^_^</span>. This
              field got me <span className="text-white">ツ</span>. Always eager to <span className="text-white">build, learn, and innovate!</span> Currently <span className="text-white">available</span> for new opportunities and excited to collaborate.
              <div className="pt-3">In my free time, i generally prefers to sleep <span className="text-white">ᶻ 𝗓 𐰁.....</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="inline-flex gap-4 items-center border border-neutral-700 px-5 py-2 rounded-2xl">
          <div className="animate-pulse bg-green-400 rounded-full p-1 shadow-[0_0_10px_5px_rgba(163,230,53,0.2)]"></div>
          <span>Open to new opportunities</span>
        </div>
      </div>
    </div>
  );
}
