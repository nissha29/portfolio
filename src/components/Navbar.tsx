import { DATA } from "@/data/Resume"
import React from "react"
import Link from 'next/link'
import Magnetic from './ui/Magnetic'

export default function Navbar() {
    const social = DATA.contact.social;
    return <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
        <div className="hidden sm:flex text-4xl border border-neutral-800 rounded-full px-4 py-1 text-rose-400">{DATA.initials}</div>
        <div className="flex justify-around items-center px-7 py-2 gap-3 text-lg">
            <Links Icon={social.GitHub.icon} click={social.GitHub.url} title={social.GitHub.name} />
            <Links Icon={social.Email.icon} click={social.Email.url} title={social.Email.name} />
            <Links Icon={social.LinkedIn.icon} click={social.LinkedIn.url} title={social.LinkedIn.name} />
            <Links Icon={social.X.icon} click={social.X.url} title={social.X.name} />
            <Links Icon={social.Resume.icon} click={social.Resume.url} title={social.Resume.name} />
        </div>
    </div>
}

function Links({ Icon, click, title }: { Icon: React.ComponentType, click: string, title: string }) {
    return (
        <div>
            <Magnetic>
                <Link className="border border-neutral-800 rounded-full w-10 h-10 flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-all ease-in-out duration-500" href={click} title={title} target="_blank">< Icon /></Link>
            </Magnetic>
        </div>
    )
}