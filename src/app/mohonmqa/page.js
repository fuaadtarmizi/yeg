import React from 'react'
import Image from "next/image"


function page() {
  return (
    <miain>
        <div clas>
        <Image
        className="hidden lg:block"
            src="/wbl1.png"
            alt="wbl1"
            width="1600"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
          <Image
            className="lg:hidden"
            src="/wbl1(phone).png"
            alt="wbl1(phone)"
            width="500"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div>
            <div></div>
        </div>
    </miain>
  )
}

export default page