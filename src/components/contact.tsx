import { RoughNotation } from "react-rough-notation";
import Link from 'next/link';
import { DATA } from "@/data/resume";

export default function contact() {
    return <div className="pt-8">
        <RoughNotation type="underline" show={true} color="#00ffb7" strokeWidth={2}>
            <span className="text-2xl font-bold">Contact</span>
        </RoughNotation>
        <div className="pt-6 text-neutral-400 text-lg">Got a question? DM me on <Link href={DATA.contact.social.X.url} className="text-white hover:text-[#00ffb7] hover:underline-offset-8 hover:underline">Twitter</Link>, and I’ll reply when I can. Soliciting messages will be ignored.</div>
    </div>
}