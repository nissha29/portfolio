"use client";

import { DATA } from "@/data/Resume";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import SectionHeading from "./ui/SectionHeading";

export default function Project() {
  return (
    <div className="pt-8 mt-8">
      <div className="mb-8">
        <SectionHeading>Projects</SectionHeading>
      </div>
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
