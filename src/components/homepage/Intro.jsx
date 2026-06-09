"Use client"
import React from 'react'
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"


function Intro() {
  return (
    <>
    <Sidebar/>
    <Navbar className="bg-gradient-to-r from-[#151c41] to-[rgba(11,24,54,0)"/>
    <section className="relative">
    <div className="absolute top-0 left-0 h-full w-1/4 "></div>
    <div className="bg-black max-w-full lg:px-3 flex justify-center ">
        <video
         src ="/yegintro.mp4" controls autoPlay muted playsInline className="w-full h-full object-cover" />
      </div>
        </section>
        </>
    
  )
}

export default Intro