import Image from 'next/image'

export default function bertandang() {
  return (
    <main className="w-full h-full">
      <section1 className="w-full flex justify-center">
      <Image
              src="/sectionbertandang.svg"
              alt="sectionbertandang"
              className="w-full"
              width='1000'
              height='1000'
              priority
              objectFit='cover'
            />
            <Image
                  src="/logo.svg"
                  alt="/logo.svg"
                  className="absolute lg:top-0 left-0 p-4 lg:w-48 " 
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
      </section1>
      <div className="lg:py-10"></div>
      
      
      
      
      <div className="py-8"></div>

      <section2 className="flex justify-center">
        <div className="grid w-full px-4">
          <span className="font-serif text-xl lg:text-5xl pb-4">Overview</span>
          <span className="font-serif text-sm lg:text-xl">Sitting as the heart of intercity highways, 
          Bertandang redefines travelling experience for 
          road trippers and travellers, promising warmth and comfort with stunning facilities,
           services, and amenities.</span>
            <div className="py-2"></div>
            
        </div>
        <div className="flex items-center w-full">
        <Image
              src="/overviewimage.svg"
              alt="overviewimage"
              className="w-full h-full"
              width='1000'
              height='1000'
              priority
              objectFit='contain'
            />
        </div>

      </section2>
      <section3 className="flex justify-center lg:pt-8">
        
        <div className="flex items-center w-full">
        <Image
              src="/foodhallimage.svg"
              alt="foodhallimage"
              className="w-full h-full"
              width='1000'
              height='1000'
              priority
              objectFit='contain'
            />
        </div>
        <div className="grid w-full px-4">
          <span className="font-serif text-xl lg:text-5xl pb-4">Food Hall</span>
          <span className="font-serif text-sm lg:text-xl">Lorem ipsum dolor sit amet consectetur. 
          Sem imperdiet lectus ultrices et. Tempus ut et eget nunc.
           Et fusce consectetur leo cras interdum. Tellus adipiscing turpis enim vitae
            lorem quam. Sem et erat mi tellus nisl.</span>
            <div className="py-2"></div>
            
        </div>

      </section3>
      <section4 className="flex justify-center lg:pt-8">
        <div className="grid w-full px-4">
          <span className="font-serif text-xl lg:text-5xl pb-4">Retails </span>
          <span className="font-serif text-sm lg:text-xl">Lorem ipsum dolor sit amet consectetur. Sem imperdiet lectus ultrices et.
           Tempus ut et eget nunc. Et fusce consectetur leo cras interdum. Tellus adipiscing turpis enim vitae lorem quam.
            Sem et erat mi tellus nisl.</span>
            <div className="py-2"></div>
            
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
