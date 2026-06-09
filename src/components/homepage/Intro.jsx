import React from 'react'
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
function Intro() {
  return (
    <>
    <Sidebar/>
    <Navbar className="bg-gradient-to-r from-[#151c41] to-[rgba(11,24,54,0)"/>
    <section1 className="relative">
    <div className="absolute top-0 left-0 h-full w-1/4 "></div>
    <div className="bg-black max-w-full lg:px-3 flex justify-center ">
        <video
         controls autoPlay muted playsInline className="w-full h-full"><source src="/yegintro.mp4" type="video/mp4" /></video>
      </div>
        </section1>
        </>
    
  )
}

export default Intro