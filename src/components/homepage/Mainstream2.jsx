import React from 'react'

function Intro() {
  return (
    <section>
      <div className="py-8 lg:py-10"></div>
      <div className="w-full flex justify-center bg-slate-100">
        <span className="lg:text-4xl text-4xl text-blue-950 font-bold text-center">
          <span className="text-yellow-600">YEG ACADEMY</span> IN MAINSTREAM MEDIA
        </span>
      </div>

      <div className="w-full h-full grid lg:grid-cols-12 gap-8 py-10 p-2 bg-slate-100">
        <div className="flex justify-center w-full h-full mx-auto col-span-12 lg:col-span-6">
          <video
            className="w-full h-auto"
            controls
            playsInline
            muted
            preload="metadata"
          >
            <source src="/MHI.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex justify-center w-full h-full mx-auto col-span-12 lg:col-span-6">
          <video
            className="w-full h-auto"
            controls
            playsInline
            muted
            preload="metadata"
          >
            <source src="/NLKO.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="py-8 lg:py-10"></div>
    </section>
  )
}

export default Intro