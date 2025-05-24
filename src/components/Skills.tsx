import { RoughNotation } from "react-rough-notation";
import { DATA } from "@/data/Resume";

export default function skills() {
    return <div className="pt-8">
        <RoughNotation type="underline" show={true} color="#00ffb7" strokeWidth={2}>
            <span className="text-2xl font-bold">Skills</span>
        </RoughNotation>
        <div className="pt-6 flex flex-col gap-y-2">
            {DATA.skills.map((item, index)=>{
                return <div key={index}>
                    <div className="flex gap-1.5 justify-start items-center flex-wrap">
                        <div className="sm:text-lg">{item.category} : </div>
                        {item.items.map((innerItem, innerIndex)=>{
                            return <div key={innerIndex} className="flex text-neutral-400">{innerItem}{innerIndex < item.items.length - 1 && ','}</div>
                        })}
                    </div>
                </div>
            })}
        </div>
    </div>
}