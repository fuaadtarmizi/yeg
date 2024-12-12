'use client'
import React from 'react'
import Image from 'next/image'
import SliderJelajahAcm from '@/components/kembarahaji/SliderJelajahAcm'
import Testimoni from '@/components/mmp/Testimoni'
import VideoMqa from '@/components/kembarahaji/VideoMqa'
import Moto from '@/components/kembarahaji/Moto'
import Footer from '@/components/Footer'
import FormMmp from '@/components/FormMmp'
import VerticalCountdownTimer from '@/components/VerticalCountdownTimer'
import Facility from '@/components/mmp/Facility'



function page() {
  const targetDate = new Date('2024-06-09T23:59:59');
  
  return (
    <>
    <main>
      <section>
      <div className="bg-black h-screen lg:flex justify-end" style={{backgroundImage:'url("/mqaposter1.png")', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="lg:flex items-center"><FormMmp/></div>
      </div>
      </section>
      <div className="bg-slate-800 py-4 lg:py-10 md:[height:80px]"></div>
      <section>
      <div className="w-full flex justify-center items-center bg-slate-800">
        <video
          controls
          autoPlay
          loop
          muted
          className="w-full max-w-4xl rounded shadow-lg">
          <source src="/MHI.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </section>
      <div className="bg-slate-800 py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <div><Facility/></div>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>  

       
        <section>
          <div className="lg:text-5xl text-3xl font-bold py-3 text-center">Roadmap Courses</div>
        <Image 
          className="w-full"
          src="/roadmapmqa.png"
          alt="roadmapmqa"
          width="60"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
        </section>

      <div className="py-4 lg:py-10 md:[height:80px]"></div>  
      <section>
        
      </section>
      <section>
        <Testimoni/>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <Image 
          className="hidden lg:blockw-full"
          src="/bersamatun.svg"
          alt="bersamatun"
          width="60"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
        <div className="flex justify-center">
          
          <div className="bg-slate-800 container lg:w-2/3 grid lg:flex justify-center p-4 rounded-md border relative py-16">
        
          <div className="absolute top-4 left-40 bg-red-300-translate-x-1/2 text-white text-xl">Info lanjut?</div>

   
          <div className="w-full p-6 lg:border-r-1 md:border-r-1 border-b-1 ">
            <div className="grid justify-center space-y-5 text-white">
              <p className="text-xl font-bold ">Speak with Education Advisor</p>
              <p className="text-md text-center">Get in touch about our programs</p>
              <div className="grid justify-center space-y-1">
              <a href="tel:+60361435073" className="p-1 flex items-center justify-center px-6 w-full border rounded-full">
                <h className="text-lg ">WhatsUp Us</h>
              </a>
              <p>Or call us now <a href="tel:+60361435073"  className="text-blue-600">Contact Us</a></p>
              </div>
            </div>
          </div>
          <div className="">
          <div className="w-full p-6">
            <div className="grid justify-center space-y-5 text-white">
              <p className="text-xl font-bold ">Download the module programe</p>
              <p className="text-md text-center">Get detailed programme insights with our education advisor</p>
              <div className="grid justify-center space-y-1">
              <a href="tel:+60361435073" className="p-1 flex items-center justify-center px-6 w-full border rounded-full">
                <h className="text-lg ">Download</h>
              </a>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
        </section>
      
        
    </main>
    </>  
  )
}

export default page



{/* <section>
<div className="animate-pulse duration-800  bg-green-600 flex justify-center p-2 py-6">
  <h className="text-2xl text-slate-200 font-bold font-sans">Sebarang pertanyaan sila hubungi En.Saiyyid <span className="text-black">01115403660</span></h>
  </div>
</section> */}