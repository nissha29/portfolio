"use client";

import { DATA } from "@/data/Resume";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

export default function Project() {
  return (
    <div className="pt-8 mt-8">
      <span className="text-2xl text-rose-400/80 block mb-8">Projects</span>
      <BentoGrid>
        {DATA.projects.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            href={item.href}
            technologies={item.technologies}
            index={index}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
