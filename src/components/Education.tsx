import { DATA } from "@/data/Resume";
import { Timeline } from "./Timeline";

export default function Education() {
  return (
    <div className="pt-8">
      <span className="text-2xl text-rose-400/80">Education</span>
      <Timeline
        items={DATA.education.map(item => ({
          title: item.school,
          subtitle: item.degree,
          date: `${item.start} - ${item.end}`,
          location: "",
          description: ""
        }))}
      />
    </div>
  );
}
