'use client'
import React from 'react'
import Image from 'next/image'
import SliderJelajahAcm from '@/components/kembarahaji/SliderJelajahAcm'
import Testimoni from '@/components/mqahajumrah/Testimoni'
import Moto from '@/components/kembarahaji/Moto'
import Footer from '@/components/Footer'
import Formmqahajumrah from '@/components/mqahajumrah/Formmqahajumrah'
import Syarat from '@/components/mqahajumrah/Syarat'
import Facility from '@/components/mqahajumrah/Facility'
import Reference from '@/components/mqahajumrah/Reference'
import Subject from '@/components/mqahajumrah/Subject'


function page() {
  return (
    <>
    <main>
      <section>
        <div className="grid justify-center">
          <Image
              className=""
              src="/hajumrahmqa.jpg"
              alt="hajumrahmqa"
              width="1500"
              height="80"
              style={{objectFit:"contain"}}
            />
          </div>
          <div className="w-full lg:flex justify-center">
          <div className=" lg:w-1/2">
          <Formmqahajumrah/>
          </div>
          </div>
      </section>
      <div className="hidden lg:block bg-slate-800 py-4 lg:py-10 md:[height:80px]"></div>
      <section>
      <div className="w-full lg:flex justify-center items-center bg-slate-800">
        <video
          controls
          autoPlay
          loop
          muted
          className="w-full max-w-4xl rounded shadow-lg">
          <source src="/videosemakstatus.mp4" type="video/mp4" />
        </video>
      </div>
      </section>
      <div className="bg-slate-800 hidden lg:block py-4 lg:py-10 md:[height:80px]"></div>
      <section className="bg-gray-200">
      <div className="lg:text-5xl text-3xl font-bold py-3 text-center">Facility</div>
        <Facility/>
      </section>
      <Syarat/> 
      <Subject/>  

        <section>
          <div className="lg:text-5xl text-3xl font-bold py-3 text-center">Roadmap Courses</div>
        <Image 
          className="w-full"
          src="/roadmapmqahajumrah.png"
          alt="roadmapmqahajumrah"
          width="60"
          height="80"
          style={{
            objectFit:"contain",
          }}/>
        </section>

      <div className="py-4 lg:py-10 md:[height:80px]"></div>
       
     
      <Testimoni/>
 
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
        <Reference/>
        
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