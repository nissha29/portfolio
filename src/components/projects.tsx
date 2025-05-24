"use client"

import { RoughNotation } from "react-rough-notation";
import { DATA } from "@/data/resume";
import { ArrowUpRight, CheveronRight } from "@/icons/icons";
import { useState } from "react";
import Link from 'next/link'

export default function project() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return <div className="pt-8">
        <RoughNotation type="underline" show={true} color="#00ffb7" strokeWidth={2}>
            <span className="text-2xl font-bold">Projects</span>
        </RoughNotation>
        <div className="">
            {DATA.projects.map((item, index) => {
                return <div key={index} className="flex flex-col gap-2 pt-6 hover:cursor-pointer">
                    <div className="flex justify-between sm:hover:scale-105">
                        <div className="flex gap-9 justify-start items-center">
                            <div className="rounded-full p-0.5 bg-[#00ffb7] shadow-[#00ffb7] shadow-[0_0_20px_2px_#00ffb7]"></div>
                            <div className="text-xl">{item.title}</div>
                        </div>
                        <Link className="p-2 rounded-full hover:text-[#00ffb7] hover:border hover:border-neutral-600" href={item.href} target="_blank" onClick={e => e.stopPropagation()}><ArrowUpRight /></Link>
                    </div>
                    <div className="flex gap-1.5 text-neutral-400 pl-10 flex-wrap">
                        {item.technologies.map((tech, techIndex) => (
                            <div key={techIndex}>
                                {tech}
                                {techIndex < item.technologies.length - 1 && ' |'}
                            </div>
                        ))}
                        <div className="mr-5 text-lg hover:cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}><CheveronRight /></div>
                    </div>
                    {openIndex === index && (
                        <div className="pl-10 text-neutral-400">{item.description}</div>
                    )}
                </div>
            })}
        </div>
    </div>
}