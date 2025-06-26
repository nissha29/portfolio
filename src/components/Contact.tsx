import Link from 'next/link';
import { DATA } from "@/data/Resume";

export default function Contact() {
    return <div className="pt-8">
        <div>
            <span className="text-2xl font-bold underline underline-offset-8 decoration-2 decoration-[#00ffb7]">Contact</span>
        </div>
        <div className="pt-6 text-neutral-400 text-lg">Got a question? DM me on <Link href={DATA.contact.social.X.url} className="text-white hover:text-[#00ffb7] hover:underline-offset-8 hover:underline">Twitter</Link>, and I’ll reply when I can. Soliciting messages will be ignored.</div>
    </div>
}