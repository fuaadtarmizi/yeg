import React from 'react'
import Image from "next/image"


function contactus() {
  return (
    
    <div className="w-full">
    <div className="h-full w-full flex justify-center ">
      <div className="px-4 flex justify-center lg:justify-end">
          <Image
            className=" "
            src="/contactuslogo3.svg"
            alt="malaysia"
            width="200"
            height="200"
            style={{
                objectFit:"contain",
            }}
            />
    </div>
    <div className="grid ">
      <div className="px-8 border-l-2  border-black">
        <div className=" w-full pb-4 grid lg:justify-start ">
        <h1 className="font-normal text-center text-2xl">
          Hello there, welcome to
        </h1>
        <h2 className="font-normal text-center text-2xl">
           YEG Academy
        </h2>
        <h3 className="text-2xl text-center">
          <span className="font-bold text-2xl">Need Education Advice?</span> Call Us Now.
        </h3> 
        </div>

      <div className=" grid justify-start space-y-4">

      <div className="flex space-x-8">
            <div className="">
            <Image
              className="hidden lg:block"
              src="/contactuslogo2.svg"
              alt="contactuslogo2"
              width="55"
              height="20"
              style={{
                objectFit:"contain",
              }}
                />
            </div>
            <button href="tel:+60361435073" className="flex items-center justify-center px-4 w-full border rounded-full">
              <h className="text-lg ">Get Our Adviser Now</h>
            </button>
          </div>


        <div className="grid justify-start space-y-4">
          <div className="flex space-x-8">
            <div className="">
            <Image
              className="hidden lg:block"
              src="/contactuslogo1.svg"
              alt="contactuslogo1"
              width="55"
              height="20"
              style={{
                objectFit:"contain",
              }}
                />
            </div>
            <button href="@/component/borangyeg" className="flex items-center px-4 w-full border rounded-full">
              <h className="text-lg">Book an apoitment now</h>
            </button>
          </div>
        </div> 
        
    </div>
      </div>
    </div>
    </div>          
</div>
  )
}

export default contactus