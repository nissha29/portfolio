import Image from 'next/image'
import { RoughNotation } from 'react-rough-notation'
import { DATA } from '@/data/Resume'

export default function About() {
    return <div>
        <div className="pt-12">
            <div className="flex justify-between">
                <div className='flex flex-col gap-3'>
                    <div className="text-[#00ffb7] text-4xl sm:text-5xl font-thin flex-wrap">{DATA.name}</div>
                    <div className='text-lg sm:text-xl'>{DATA.description}</div>
                </div>
                <div className="p-2 rounded-full border border-neutral-600" style={{ perspective: '600px' }}>
                    <Image src={DATA.avatarUrl} alt="Nisha" width={200} height={20} className='w-32 h-32 rounded-full' style={{
                        transform: 'translateZ(80px)',
                        boxShadow: '0 8px 32px #0a0a0a',
                        padding: '8px',
                    }} />
                </div>
            </div>
            <div className='pt-6'>
                <RoughNotation type="underline" show={true} color="#00ffb7" strokeWidth={2}>
                    <span className="text-2xl font-bold">About Me</span>
                </RoughNotation>
            </div>
            <div className='pt-6 text-neutral-400'>
                <div>{DATA.summary1}</div>
                <div className='pt-2'>{DATA.summary2}</div>
            </div>
        </div>
    </div>
}