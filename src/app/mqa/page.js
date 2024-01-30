import React from 'react'
import Image from "next/image"
import Navbar from "../Navbar.jsx"
import Sidebar from "../Sidebar.jsx"
import Footer from "../Footer"

function page() {
  return (
    <main>
        <title>YEG Academy - mqa</title>
        <nav className="hidden lg:block sticky top-0 ">
        <Navbar/>
    </nav>
      <nav>
    <div className="lg:hidden">
        <Sidebar/>
    </div>
    </nav>
    <div className="w-full h-full" style={{ backgroundImage: "url('wblbackground.png')", backgroundSize: 'cover', backgroundPosition: 'center',  }}>
    <div className="">
                    <Image
                        className="w-full"
                        src="/wbl1.png"
                        alt="career1"
                        width="200"
                        height="200"
                        style={{
                        objectFit:"cover",
                        }}
                    />
            </div>
            </div>
            <div>
            <div className="px-4 lg:px-16 ">
      <div className="w-full h-full bg-slate-100 grid grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
        <card1 className="">
          <div className="">
          <Image
            src="./hajilogo.svg"
            alt="malaysia"
            width="350"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>  
          
        </card1>
        <card2 className="">
          <div className="">
          <Image
            src="./avmlogo.svg"
            alt="malaysia"
            width="380"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>  
          
        </card2>
        <card3 className="">
          <div className="">
          <Image
            src="./ppulogo.svg"
            alt="malaysia"
            width="400"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>  
          
        </card3>
        <card4 className="">
          <div className="">
          <Image
            src="./mahstech.png"
            alt="malaysia"
            width="400"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>  
        </card4>
        <card5 className="">
          <div className="">
          <Image
            src="./mhmep.png"
            alt="malaysia"
            width="400"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>  
        </card5>
        
         
        </div>  
      </div>
            </div>
            <div className="py-3"></div>
            <div className="space-y-10">
            <div className="flex justify-center">
          <Image
            className=""
            src="./wbl5.png"
            alt="wbl5"
            width="1000"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="flex justify-center">
          <Image
            className=""
            src="./wbl6.png"
            alt="wbl6"
            width="1000"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          </div>
          <div className="py-4 flex justify-center">
          <video
            controls
            autoPlay  // Add this attribute for autoplay
            className=""
            width="1000"
            height="10"
            style={{
              objectFit:"contain",}}
          >
            <source src="videowbl.mp4" type="video/mp4" />
          </video>
          </div>
          <div className="lg:hidden flex justify-center">
            <iframe
              width="1000"
              height="250" // Adjust height as needed
              src="https://www.youtube.com/embed/dJ1v9E-FNUQ"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="hidden lg:block">
          <div className="flex justify-center">
            <iframe
              width="1000"
              height="550" // Adjust height as needed
              src="https://www.youtube.com/embed/dJ1v9E-FNUQ"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          </div>

          <div className="py-14"></div>
          <div className=" flex justify-center">
          <Image
            className="w-full"
            src="./wbl7.png"
            alt="wbl7"
            width="100"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          


    </main>
  )
}

export default page