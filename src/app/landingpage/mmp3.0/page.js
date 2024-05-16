'use client'
import React from 'react'
import Image from 'next/image'
import SliderJelajahAcm from '@/components/kembarahaji/SliderJelajahAcm'
import Testimoni from '@/components/kembarahaji/Testimoni'
import VideoMqa from '@/components/kembarahaji/VideoMqa'
import Moto from '@/components/kembarahaji/Moto'
import Footer from '@/components/Footer'
import FormMmp from '@/components/FormMmp'
import Countdown from '@/components/Countdown'


function page() {

  const targetDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Set your target date

  return (
    <>
    <main>
      <section>
        <div className="">
          <SliderJelajahAcm/>
        </div>
      </section>
      <div className="bg-green-600 py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <div className="bg-green-600">
          <VideoMqa/>
        </div>
      </section>
      <div className="bg-green-600 py-4 lg:py-10 md:[height:80px]"></div>
      <section>
      <div className="flex items-center">
        <Image
            className="w-full"
            src="/kembarahaji1.jpg"
            alt="kembarahaji1"
            width="90"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </section>
      <section>
        <Countdown targetDate={targetDate}/>
      </section>
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
      <div className="animate-pulse duration-800  bg-green-600 flex justify-center p-2 py-6">
        <h className="text-2xl text-slate-200 font-bold font-sans">Sebarang pertanyaan sila hubungi En.Saiyyid <span className="text-black">01115403660</span></h>
        </div>
      </section>
        
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <FormMmp/>
      </section>
      <section>
        <Moto/>
      </section>
      <section>
        <Footer/>
      </section>
      
              <section>

              </section>
    </main>
    </>  
  )
}

export default page



 