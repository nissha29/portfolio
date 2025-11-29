import { DATA } from "@/data/Resume";
import { Timeline } from "./Timeline";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <div className="pt-8 mt-8">
      <SectionHeading>Work Experience</SectionHeading>
      <Timeline
        items={DATA.work.map((item) => ({
          title: item.company,
          subtitle: item.title,
          date: `${item.start} - ${item.end}`,
          location: item.location,
          description: item.description,
        }))}
      />
    </div>
  );
}
