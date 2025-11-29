import { DATA } from "@/data/Resume";
import { Timeline } from "./Timeline";

export default function Experience() {
  return (
    <div className="pt-8 mt-8">
      <span className="text-2xl text-rose-400/80">Work Experience</span>
      <Timeline
        items={DATA.work.map(item => ({
          title: item.company,
          subtitle: item.title,
          date: `${item.start} - ${item.end}`,
          location: item.location,
          description: item.description
        }))}
      />
    </div>
  );
}
