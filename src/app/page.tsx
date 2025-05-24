"use client"

import Navbar from '@/components/navbar';
import About from '@/components/about';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Skills from '@/components/skills';
import Project from '@/components/projects';
import dynamic from 'next/dynamic';

const LiveClock = dynamic(() => import('react-live-clock'), { ssr: false });
export default function Home() {
  const date = new Date();

  return (
    <div className={`w-full min-h-screen bg-[#222222] text-white overflow-x-hidden`}>
      <div className='flex flex-col justify-center items-center sm:p-10 p-5'>
        <div className='max-w-96 flex flex-col justify-start  sm:max-w-[42rem]'>
          <Navbar />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Project />
          <div className='border border-t-1 border-neutral-600 h-px w-full mt-10'></div>
          <div className='flex justify-between mt-3 text-neutral-400 text-sm'>
            <div>Haryana, India</div>
            <div className='flex gap-2 justify-center'>
              <LiveClock format={'HH:mm A'} ticking={true} timezone={'Asia/Kolkata'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
