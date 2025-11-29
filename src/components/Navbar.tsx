import { DATA } from "@/data/Resume";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  const social = DATA.contact.social;
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-0">
      {/* Social Links - No magnetic effect */}
      <div className="flex justify-around items-center gap-2 sm:gap-3 ml-auto">
        <Links
          Icon={social.GitHub.icon}
          click={social.GitHub.url}
          title={social.GitHub.name}
          color="hover:text-white hover:border-white"
        />
        <Links
          Icon={social.Email.icon}
          click={social.Email.url}
          title={social.Email.name}
          color="hover:text-rose-400 hover:border-rose-400"
        />
        <Links
          Icon={social.LinkedIn.icon}
          click={social.LinkedIn.url}
          title={social.LinkedIn.name}
          color="hover:text-blue-400 hover:border-blue-400"
        />
        <Links
          Icon={social.X.icon}
          click={social.X.url}
          title={social.X.name}
          color="hover:text-cyan-400 hover:border-cyan-400"
        />
        <Links
          Icon={social.Resume.icon}
          click={social.Resume.url}
          title={social.Resume.name}
          color="hover:text-purple-400 hover:border-purple-400"
        />
      </div>
    </div>
  );
}

function Links({
  Icon,
  click,
  title,
  color,
}: {
  Icon: React.ComponentType;
  click: string;
  title: string;
  color: string;
}) {
  return (
    <div className="relative group">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-rose-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 blur-lg transition-all duration-500 scale-0 group-hover:scale-150"></div>

      <Link
        className={`relative border border-neutral-700/50 bg-neutral-900/30 backdrop-blur-sm rounded-full w-11 h-11 flex justify-center items-center cursor-pointer transition-all duration-500 text-neutral-400 ${color} group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:bg-neutral-800/50`}
        href={click}
        title={title}
        target="_blank"
      >
        <Icon />
      </Link>
    </div>
  );
}
