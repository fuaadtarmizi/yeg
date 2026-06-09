import React from 'react'
import Image from "next/image"
import ReactPlayer from 'react-player'



function Intro() {
  return (
    <>
    <section11>
      <div className=" bg-slate-800 w-full h-full px-4 lg:px-28"> 
        <div className="bg-yellow-600 w-1/2 text-transparent rounded-r-md">a</div>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 lg:py-6">
        <div className="grid py-3 ">
      <h className="text-base font-semibold text-yellow-800 ">OUR ENTERTAINMENT:</h>
      <h className="text-4xl font-extrabold text-white ">EXPLORE OUR PROGRAMME ON MEDIA SOCIAL</h>
      </div>
      
      </div>
      <div className="h-full lg:py-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          <ReactPlayer
         url="https://www.tiktok.com/@yegacademy/video/7314661907741428993"
         
                  loop="loop" 
                  muted="muted"
                  className="rounded-md  top-0 left-0 w-full h-full object-cover" 
                  width="390" 
                  height="890">
              
          </ReactPlayer>
        <a href="https://www.tikhttps://www.tiktok.com/@yegacademy/video/7568437037389565191?is_from_webapp=1&sender_device=pc&web_id=7563838973358343697tok.com/@yegacademy/video/7319391659773545730?lang=en"
        className="flex hover:scale-150 duration-500">
        <video autoplay="autoplay" 
                  loop="loop" 
                  muted="muted"
                  className="rounded-md  top-0 left-0 w-full h-full object-cover" 
                  width="390" 
                  height="890">
              <source src="./tiktok1.mp4" type="video/mp4"/>
          </video>
        </a>
          <a href="https://www.tiktok.com/@yegacademy/video/7542880723204623634?is_from_webapp=1&sender_device=pc&web_id=7563838973358343697"
          className="flex hover:scale-150 duration-500">
          <video autoplay="autoplay" 
                  loop="loop" 
                  muted="muted"
                  className="rounded-md top-0 left-0 w-full h-full object-cover" 
                  width="390" 
                  height="890">
              <source src="tiktok3.mp4" type="video/mp4"/>
          </video>
          </a>
          <a href="https://www.tiktok.com/@yegacademy/video/7551782551027764498?is_from_webapp=1&sender_device=pc&web_id=7563838973358343697"
          className="flex hover:scale-150 duration-500">
          <video autoplay="autoplay" 
                  loop="loop" 
                  muted="muted"
                  className="rounded-md top-0 left-0 w-full h-full object-cover" 
                  width="390" 
                  height="890">
              <source src="tiktok4.mp4" type="video/mp4"/> 
          </video>
          </a>
          <a href="https://www.tiktok.com/@yegacademy/video/7556055376047770887?is_from_webapp=1&sender_device=pc&web_id=7563838973358343697"
          className="flex hover:scale-150 duration-500">
          <video autoplay="autoplay" 
                  loop="loop" 
                  muted="muted"
                  className="rounded-md top-0 left-0 w-full h-full object-cover" 
                  width="390" 
                  height="890">
              <source src="tiktok5.mp4" type="video/mp4"/>
          </video>
          </a>
          <a href="https://www.tiktok.com/@yegacademy/video/7326925324359306498?lang=en"
          className="flex hover:scale-150 duration-300">
          <video autoplay="autoplay" 
                  loop="loop" 
                  muted="muted"
                  className="rounded-md top-0 left-0 w-full h-full object-cover" 
                  width="390" 
                  height="890">
              <source src="tiktok06.mp4" type="video/mp4"/>
          </video>
          </a>
        </div>
        <div className=" text-transparent flex justify-end ">
          <div className="bg-yellow-600 w-1/2 rounded-l-md">d</div>
          </div>
      </div>
    </section11>
    </>
    
  )
}

export default Intro