"use client";

import { DATA } from "@/data/Resume";
import { ArrowUpRight, CheveronRight } from "@/icons/Icons";
import { useState } from "react";
import Link from "next/link";

export default function Project() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-8">
      <span className="text-2xl text-rose-400">Projects</span>

      <div className="flex flex-col gap-4">
        {DATA.projects.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-1.5 pt-2 hover:cursor-pointer"
            >
              <div className="flex justify-between sm:hover:scale-105">
                <div className="flex gap-9 justify-start items-center">
                  <div className="rounded-full border border-rose-400 p-0.5"></div>
                  <div className="text-xl text-neutral-400 font-semibold">
                    {item.title}
                  </div>
                </div>
                <Link
                  className="p-2 rounded-full hover:text-[#a1a1a1] hover:border hover:border-neutral-600"
                  href={item.href}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowUpRight />
                </Link>
              </div>
              <div className="flex gap-1.5 text-neutral-400 pl-10 flex-wrap">
                {item.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="text-neutral-500">
                    {tech}
                    {techIndex < item.technologies.length - 1 && " |"}
                  </div>
                ))}
                <div
                  className="mr-5 text-lg hover:cursor-pointer"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <CheveronRight />
                </div>
              </div>
              {openIndex === index && (
                <div className="p-3 text-neutral-400 border border-rose-400">
                  {item.description}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
