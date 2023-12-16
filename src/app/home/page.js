import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-full">
      <section1 className="w-full flex justify-center">
      <Image
              src="/section1.svg"
              alt="section1"
              className="w-full"
              width='1000'
              height='1000'
              priority
              objectFit='cover'
            />
            <Image
                  src="/logo.svg"
                  alt="/logo.svg"
                  className="absolute lg:top-0 left-0 p-4 lg:w-56 " 
                  width={100} 
                  height={100}
                  priority
      
                  />
                  <div className="bg-transparent absolute w-full p-6 flex justify-end space-x-10">
                  <button
                  className="font-serif">
                    About Us 
                    </button>
                    <button
                  className="font-serif">
                    FAQ
                    </button>
                    <button
                  className="font-serif">
                    Berlunjur 
                    </button>
                    <button
                  className="font-serif">
                    Bertandang 
                    </button>
                    <button
                  className="font-serif ">
                    Home 
                    </button>
                    </div>
      </section1>\
      <div className="lg:py-10"></div>
      <section2>
      <Image
              src="/section2.svg"
              alt="section2"
              className="w-full px-4"
              width='500'
              height='500'
              priority
              objectFit='cover'
            />
      </section2>
      <section2>
      <Image
              src="/section3.svg"
              alt="section3"
              className="w-full px-4"
              width='500'
              height='500'
              priority
              objectFit='cover'
            />
            <div className="px-4 flex justify-center">
            <span className="font-serif ">West Ipoh Span Expressway or WISE is the long-awaited, sixty kilometre (60 KM) highway alignment to be built in the state of Perak, spanning the route from Gopeng to Kuala Kangsar. From a bird’s-eye view, WISE will be nothing short of a strategic asset that guarantees positive social, environmental and economic impacts and countless opportunities in fostering our nation’s economic growth and social development, especially in the state of Perak. Ultimately, WISE will not be just another infrastructure project; it is a manifestation of a new Perak, solutions that are engineered to foster a harmonious social capital.</span>
            </div>
      </section2>
      <div className="py-8"></div>
      <section3>
      <Image
              src="/section4.svg"
              alt="section4"
              className="w-full px-4"
              width='500'
              height='500'
              priority
              objectFit='cover'
            />
            
      </section3>
      <div className="py-8"></div>
      <section4 className="flex justify-center">
        <div className="grid w-full">
          <span className="font-serif text-xl lg:text-5xl pb-4">Multi Lane Fast Flow</span>
          <span className="font-serif text-sm lg:text-xl">Lorem ipsum dolor sit amet consectetur. Sem imperdiet lectus
           ultrices et. Tempus ut et eget nunc. Et fusce consectetur leo cras interdum. Tellus adipiscing turpis
            enim vitae lorem quam. Sem et erat mi tellus nisl.</span>
            <div className="py-2"></div>
            <Image
              src="/section4b.svg"
              alt="section4b"
              className=" lg:w-1/3"
              width='100'
              height='100'
              priority
              objectFit='contain'
            />
        </div>
        <div className="flex items-center w-full">
        <Image
              src="/section4a.svg"
              alt="section4a"
              className="w-full h-full"
              width='1000'
              height='1000'
              priority
              objectFit='contain'
            />
        </div>

      </section4>
      <div className="py-2"></div>
      <section5>
      <Image
              src="/section5.svg"
              alt="section5"
              className="w-full px-4"
              width='500'
              height='500'
              priority
              objectFit='cover'
            />
            
      </section5>
      <section5 class="h-full">
      <Image
              src="/lastsection.svg"
              alt="lastsection"
              className="w-full h-full"
              width='500'
              height='500'
              priority
              objectFit='cover'
            />
            
      </section5>
      
      
    </main>
  )
}
