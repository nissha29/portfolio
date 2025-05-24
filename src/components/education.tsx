import { RoughNotation } from "react-rough-notation";
import { DATA } from "@/data/resume";
import Link from "next/link";

export default function education() {
    return <div className="pt-8">
        <RoughNotation type="underline" show={true} color="#00ffb7" strokeWidth={2}>
            <span className="text-2xl font-bold">Education</span>
        </RoughNotation>
        <div className="pt-6 flex sm:flex-row sm:justify-between sm:items-center flex-col">
            <div className="flex gap-9 justify-start items-center">
                <div className="rounded-full p-0.5 bg-[#00ffb7] shadow-[#00ffb7] shadow-[0_0_20px_2px_#00ffb7]"></div>
                <div className="text-xl">{DATA.education[0].degree}</div>
            </div>
            <div className="text-neutral-400 pl-10 sm:pl-0">{DATA.education[0].start} - {DATA.education[0].end}</div>
        </div>
        <div className=" pt-1 flex flex-col pl-10">
            <Link href={DATA.education[0].href} target="_blank" className="text-[#00ffb7]">{DATA.education[0].school}</Link>
        </div>
        <div className="pt-6 flex sm:flex-row sm:justify-between sm:items-center flex-col">
            <div className="flex gap-9 justify-start items-center">
                <div className="rounded-full p-0.5 bg-[#00ffb7] shadow-[#00ffb7] shadow-[0_0_20px_2px_#00ffb7]"></div>
                <div className="text-xl">{DATA.education[1].degree}</div>
            </div>
            <div className="text-neutral-400 pl-10 sm:pl-0">{DATA.education[1].start} - {DATA.education[1].end}</div>
        </div>
        <div className=" pt-1 flex flex-col pl-10">
            <Link href={DATA.education[0].href} target="_blank" className="text-[#00ffb7]">{DATA.education[1].school}</Link>
        </div>
    </div>
}