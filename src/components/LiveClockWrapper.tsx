'use client';

import dynamic from 'next/dynamic';

const LiveClock = dynamic(() => import('react-live-clock'), { ssr: false });

export default function LiveClockWrapper() {
  return (
    <div className='flex gap-2 justify-center'>
      <LiveClock format={'HH:mm A'} ticking={true} timezone={'Asia/Kolkata'} />
    </div>
  );
}
