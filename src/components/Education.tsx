import { DATA } from "@/data/Resume";
import Link from "next/link";

export default function Education() {
  return (
    <div className="pt-8">
      <span className="text-2xl text-rose-400/80">Education</span>

      <div className="pt-2 flex sm:flex-row sm:justify-between sm:items-center flex-col">
        <div className="flex gap-9 justify-start items-center">
          <div className="rounded-full border border-rose-400 p-0.5"></div>
          <div className="text-xl text-neutral-400 font-semibold">
            {DATA.education[0].degree}
          </div>
        </div>
        <div className="text-neutral-500 pl-10 sm:pl-0">
          {DATA.education[0].start} - {DATA.education[0].end}
        </div>
      </div>
      <div className=" pt-1 flex flex-col pl-10">
        <Link
          href={DATA.education[0].href}
          target="_blank"
          className="text-neutral-500"
        >
          {DATA.education[0].school}
        </Link>
      </div>
      <div className="pt-6 flex sm:flex-row sm:justify-between sm:items-center flex-col">
        <div className="flex gap-9 justify-start items-center">
          <div className="rounded-full border border-rose-400 p-0.5"></div>
          <div className="text-xl text-neutral-400 font-semibold">
            {DATA.education[1].degree}
          </div>
        </div>
        <div className="text-neutral-500 pl-10 sm:pl-0">
          {DATA.education[1].start} - {DATA.education[1].end}
        </div>
      </div>
      <div className=" pt-1 flex flex-col pl-10">
        <Link
          href={DATA.education[0].href}
          target="_blank"
          className="text-neutral-500"
        >
          {DATA.education[1].school}
        </Link>
      </div>
    </div>
  );
}
