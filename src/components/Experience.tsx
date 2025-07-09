import { DATA } from "@/data/Resume";

export default function Experience() {
  return (
    <div className="pt-8">
      <span className="text-2xl text-rose-400/80">Work Experience</span>

      <div className="pt-2 flex sm:flex-row sm:justify-between sm:items-center flex-col">
        <div className="flex gap-9 justify-start items-center">
          <div className="rounded-full border border-rose-400 p-0.5"></div>
          <div className="text-xl text-neutral-400 font-semibold">
            {DATA.work[0].title}
          </div>
        </div>
        <div className="text-neutral-500 pl-10 sm:pl-0">
          {DATA.work[0].start} - {DATA.work[0].end}
        </div>
      </div>
      <div className=" pt-1 flex flex-col pl-10">
        <div className="text-neutral-500">{DATA.work[0].company}</div>
        <div className="text-neutral-400 mt-2.5">
          {DATA.work[0].description}
        </div>
      </div>
    </div>
  );
}
