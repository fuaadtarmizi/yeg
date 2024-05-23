import React from 'react'
import Image from 'next/image'
import Countdown from '@/components/Countdown'
import Footer from '@/components/Footer'
import Faqticketmmp from '@/components/Faqticketmmp'



function page() {

  const initialTargetDate = new Date(Date.now() + 17 * 24 * 60 * 60 * 1000); 
                                            
  return (
    <>
    <main>
      {/* <section>
      <div className="">
        <video
        controls
        autoPlay  // Add this attribute for autoplay
      >
        <source src="/TEASERmmp.mp4" type="video/mp4" />
      </video>
        </div>
      </section> */}
      
      <section>
      <div className="flex items-center">
        <Image 
            className="w-full"
            src="/ticketmpp.jpg"
            alt="kembarahaji1"
            width="90"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <div>
          <Countdown initialTargetDate={initialTargetDate} />
        </div>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <div>
          <div className="w-full flex justify-center">
            <button className="bg-green-600 animate-pulse p-2 px-8 rounded-md">
              Book Ticket
            </button>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="bg-green-600 py-4 flex justify-center">
          <span className="p-4 font-semibold text-4xl font-sans text-white">Alumni Program</span>
        </div>
        <div className="w-full flex justify-center">
          <Testimoni/>
        </div>
      </section> */}
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      {/* <section>
      <div className="animate-pulse duration-800  bg-green-600 flex justify-center p-2 py-6">
        <h className="text-2xl text-slate-200 font-bold font-sans">Sebarang pertanyaan sila hubungi En.Saiyyid <span className="text-black">01115403660</span></h>
        </div>
      </section> */}
        
      {/* <section>
        <FormMmp/>
      </section> */}
      {/* <section>
        <Moto/>
      </section> */}
      <div className="bg-white py-4 lg:py-10 md:[height:80px]"></div>
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
      <div className="bg-white py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <Faqticketmmp />
      </section>
      <section>
        <Footer/>        
      </section>
      
    </main>
    </>  
  )
}

export default page



 