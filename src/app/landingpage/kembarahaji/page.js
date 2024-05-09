'use client'
import React from 'react'
import SliderJelajahAcm from '@/components/kembarahaji/SliderJelajahAcm'
import Testimoni from '@/components/kembarahaji/Testimoni'
import VideoMqa from '@/components/kembarahaji/VideoMqa'
import Moto from '@/components/kembarahaji/Moto'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main>
      <section>
        <div className="">
          <SliderJelajahAcm/>
        </div>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <div className="bg-green-600 py-4 flex justify-center">
          <span className="p-4 font-semibold text-4xl font-sans text-white">Alumni Program</span>
        </div>
        <div className="w-full flex justify-center">
          <Testimoni/>
        </div>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
        <section>
        <div>
          <VideoMqa/>
        </div>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <Moto/>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
    </>  
  )
}

export default page



 