import Link from 'next/link';
import { DATA } from "@/data/Resume";

export default function Contact() {
    return <div className="pt-8">
        <div>
            <span className="text-2xl text-rose-400/80">Contact</span>
        </div>
        <div className="pt-2 text-neutral-500 text-lg">Got a question? DM me on <Link href={DATA.contact.social.X.url} className="text-rose-400 font-semibold hover:underline-offset-8 hover:underline transition-all ease-in-out duration-500">Twitter</Link>, and I’ll reply when I can. Soliciting messages will be ignored.</div>
    </div>
}