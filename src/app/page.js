'use client'

import Intro from '@/components/homepage/Intro'
import Collabration from '@/components/homepage/Collabration'
import SliderRamadan from '@/components/homepage/SliderRamadan'
import Mainstream from '@/components/homepage/Mainstream'
import Mainstream2 from '@/components/homepage/Mainstream2'
import Qualities from '@/components/homepage/Qualities'
import Courses from '@/components/homepage/Courses'
import Trendmark from '@/components/homepage/Trendmark'
import Courses2 from '@/components/homepage/Courses2'
import Trendmark2 from '@/components/homepage/Trendmark2'
import Entertainment from '@/components/homepage/Entertainment'
import News from '@/components/homepage/News'
import ContactUs from "@/components/homepage/ContactUs"

export default function home() {
  return (
    <>
      {/* <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6199758154363864"
        data-ad-slot="1234567890"
        data-ad-format="auto"
      /> */}

      <main>
        <Intro />
        <Collabration />
        
        {/* Fixed Contact Button */}
        <div className="static">
          <div className="fixed right-0 z-50 bottom-0 mb-4">
            <ContactUs />
          </div>
        </div>

        <SliderRamadan />
        <Mainstream />
        <Mainstream2 />
        <Qualities />
        <Courses />
        <Trendmark />
        <Courses2 />
        <Trendmark2 />
        <Entertainment />
        <News />
      </main>
    </>
  )
}