import React from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

function Intro() {
  return (
    <>
    {/* <Sidebar/>
    <Navbar/ className="bg-gradient-to-r from-[#151c41] to-[rgba(11,24,54,0)"> */}
    <section className="relative">
    <div className="absolute top-0 left-0 h-full w-1/4 "></div>
    <div className="bg-black max-w-full lg:px-3 flex justify-center ">
      <video className="w-[1400px]"controls playsInline autoPlay><source src="/entryYeg.mp4" type="video/mp4" /></video>
      </div>
        </section>
        </>
    
  )
}

export default Intro