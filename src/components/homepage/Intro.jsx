import React from 'react'

function Intro() {
  return (
    <>
      <section className="relative">
        <div className="absolute top-0 left-0 h-full w-1/4"></div>
        <div className="bg-black max-w-full lg:px-3 flex justify-center">
          <video 
            className="w-[1400px] h-auto"
            controls 
            playsInline 
            autoPlay
            muted
          >
            <source src="/yegintro.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  )
}

export default Intro