import { DATA } from "@/data/Resume";
import { Timeline } from "./Timeline";
import SectionHeading from "./ui/SectionHeading";

export default function Education() {
  return (
    <div className="pt-8">
      <SectionHeading>Education</SectionHeading>
      <Timeline
        items={DATA.education.map((item) => ({
          title: item.school,
          subtitle: item.degree,
          date: `${item.start} - ${item.end}`,
          location: "",
          description: "",
        }))}
      />
    </div>
  );
}
