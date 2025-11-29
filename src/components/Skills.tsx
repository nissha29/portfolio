"use client";

import { DATA } from "@/data/Resume";
import { useState } from "react";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="pt-8">
      <SectionHeading>Skills</SectionHeading>

      <div className="pt-4 flex flex-col gap-y-6">
        {DATA.skills.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <div className="text-sm sm:text-base text-neutral-400/90 font-medium tracking-wide">
                {item.category}
              </div>
              <div className="flex gap-2 justify-start items-center flex-wrap">
                {item.items.map((skill, innerIndex) => {
                  const Icon = skill.icon;
                  const isHovered = hoveredSkill === `${index}-${innerIndex}`;

                  return (
                    <div
                      key={innerIndex}
                      className="relative group cursor-default"
                      onMouseEnter={() =>
                        setHoveredSkill(`${index}-${innerIndex}`)
                      }
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Glow effect */}
                      <div
                        className="absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          backgroundColor: `${skill.color}20`,
                        }}
                      ></div>

                      {/* Skill badge */}
                      <div
                        className="relative flex items-center gap-2 px-3 py-1.5 border bg-neutral-900/40 backdrop-blur-sm rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                        style={{
                          borderColor: isHovered
                            ? `${skill.color}60`
                            : "rgb(38, 38, 38)",
                          boxShadow: isHovered
                            ? `0 0 20px ${skill.color}15`
                            : "none",
                        }}
                      >
                        <Icon
                          className="w-4 h-4 transition-all duration-300 group-hover:scale-110"
                          style={{
                            color: isHovered ? skill.color : `${skill.color}CC`,
                          }}
                        />
                        <span
                          className="text-xs sm:text-sm font-medium transition-colors duration-300"
                          style={{
                            color: isHovered ? "#f5f5f5" : "#d4d4d4",
                          }}
                        >
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
