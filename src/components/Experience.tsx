import { RoughNotation } from "react-rough-notation";
import { DATA } from "@/data/Resume";

export default function experience() {
    return <div className="pt-8">
        <RoughNotation type="underline" show={true} color="#00ffb7" strokeWidth={2}>
            <span className="text-2xl font-bold">Work Experience</span>
        </RoughNotation>
        <div className="pt-6 flex sm:flex-row sm:justify-between sm:items-center flex-col">
            <div className="flex gap-9 justify-start items-center">
                <div className="rounded-full p-0.5 bg-[#00ffb7] shadow-[#00ffb7] shadow-[0_0_20px_2px_#00ffb7]"></div>
                <div className="text-xl">{DATA.work[0].title}</div>
            </div>
            <div className="text-neutral-400 pl-10 sm:pl-0">{DATA.work[0].start} - {DATA.work[0].end}</div>
        </div>
        <div className=" pt-1 flex flex-col pl-10">
            <div className="text-[#00ffb7]">{DATA.work[0].company}</div>
            <div className="text-neutral-400 mt-2.5">{DATA.work[0].description}</div>
        </div>
    </div>
}