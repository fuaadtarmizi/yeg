"use client"
import React, { useState, useEffect } from 'react'   
import Image from 'next/image'
import FormMPHUSelangor from '@/components/FormMPHUSelangor'
import MarqueeBanner from '@/components/MarqueenBanner'
import MarqueeBanner2 from '@/components/MarqueenBanner2'
import ReactPlayer from 'react-player'


// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Sekarang : IKON Fakulti Pengurusan Haji & Umrah',
    name: 'Faizal Ismail (FBI)',
    role: 'Alumni FPHU',
    image: 'MPHU/Alumni MPHU/FBI Convo.png',
    stars: 5,
  },
  {
    id: 2,
    quote: 'Sekarang : Penerima Anugerah Naib Canselor Fakulti Pengurusan Haji & Umrah',
    name: 'Muhammad Azlie',
    role: 'Alumni FPHU',
    image: 'MPHU/Alumni MPHU/Azlie.png',
    stars: 5,
  },
  {
    id: 3,
    quote: 'Sekarang: Pegawai Haramain Busyra Holidays Sdn Bhd',
    name: 'Aishah Azizan',
    role: 'Alumni FPHU',
    image: 'MPHU/Alumni MPHU/Aisyah.png',
    stars: 5,
  },
  {
    id: 4,
    quote: 'Sekarang: Ketua Operasi Logistik FGV Transport Sdn Bhd',
    name: 'Haji Ahmad Hilal',
    role: 'Alumni FPHU',
    image: 'MPHU/Alumni MPHU/Hilal.png',
    stars: 5,
  },
  {
    id: 5,
    quote: 'Sekarang: Ketua Operasi Tabung Haji Cawangan Putrajaya ',
    name: 'Ustaz Haji Azmir',
    role: 'Alumni FPHU',
    image: 'MPHU/Alumni MPHU/Ust AZMI.png',
    stars: 5,
  },
  {
    id: 6,
    quote: 'Sekarang: Pengurus Hijrah Alliance Sdn Bhd',
    name: 'Ahmad Najmi',
    role: 'Alumni FPHU',
    image: 'MPHU/Alumni MPHU/Najmi.png',
    stars: 5,
  },
    {
    id: 7,
    quote: 'Sekarang: Pengurus YEG Travel Sdn Bhd ',
    name: 'Muhammad Eiman',
    role: 'Alumni FPHU',
    image: 'MPHU/Alumni MPHU/Eiman.jpeg',
    stars: 5,
  },
]



const GALLERY_IMAGES = [
  { src: 'MPHU/Media/1.png', alt: 'Galeri 1' },
  { src: 'MPHU/Media/2.png', alt: 'Galeri 2' },
  { src: 'MPHU/Media/3.png', alt: 'Galeri 3' },
  { src: 'MPHU/Media/4.png', alt: 'Galeri 4' },
  { src: 'MPHU/Media/5.png', alt: 'Galeri 5' },
  { src: 'MPHU/Media/6.png', alt: 'Galeri 6' },
  { src: 'MPHU/Media/7.png', alt: 'Galeri 7' },
  { src: 'MPHU/Media/8.png', alt: 'Galeri 8' },
  { src: 'MPHU/Media/9.png', alt: 'Galeri 9' },
  { src: 'MPHU/Media/10.png', alt: 'Galeri 10' },
  { src: 'MPHU/Media/11.png', alt: 'Galeri 11' },
  { src: 'MPHU/Media/12.png', alt: 'Galeri 12' },
  { src: 'MPHU/Media/13.png', alt: 'Galeri 13' },
  { src: 'MPHU/Media/14.png', alt: 'Galeri 14' },
  { src: 'MPHU/Media/15.png', alt: 'Galeri 15' },
  { src: 'MPHU/Media/16.png', alt: 'Galeri 16' },
  { src: 'MPHU/Media/17.png', alt: 'Galeri 17' },
  { src: 'MPHU/Media/18.png', alt: 'Galeri 18' },
  { src: 'MPHU/Media/19.png', alt: 'Galeri 19' },
  { src: 'MPHU/Media/20.png', alt: 'Galeri 20' },
]

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="#FDCC0D" />
    </svg>
  )
}


function Countdown() {
  const TARGET = new Date('2026-05-23T00:00:00')
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const tick = () => {
      const diff = TARGET - new Date()
      if (diff <= 0) return setTime({ d: 0, h: 0, m: 0, s: 0 })
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  const Box = ({ val, label }) => (
    <div className="flex flex-col items-center gap-3">
      <div className="bg-yellow-800 border-4 border-yellow-500 w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
        {/* mid-line divider */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-yellow-600 opacity-50" />
        <span className="text-3xl md:text-4xl font-bold text-white font-mono tracking-widest z-10">
          {pad(val)}
        </span>
      </div>
      <span className="text-xs tracking-[3px] uppercase text-yellow-700 font-semibold">
        {label}
      </span>
    </div>
  )

  return (
    <div className="bg-white py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-yellow-800 mb-2">
          MASA BERBAKI UNTUK PENGESAHAN KEHADIRAN
        </h2>
        <div className="mt-3 mx-auto w-16 h-1 bg-yellow-600 rounded-full" />
      </div>

      <div className="flex justify-center items-center gap-3 md:gap-5 flex-wrap">
        <Box val={time.d} label="hari" />
        <span className="text-4xl font-bold text-yellow-600 font-mono mb-6 opacity-80">:</span>
        <Box val={time.h} label="jam" />
        <span className="text-4xl font-bold text-yellow-600 font-mono mb-6 opacity-80">:</span>
        <Box val={time.m} label="minit" />
        <span className="text-4xl font-bold text-yellow-600 font-mono mb-6 opacity-80">:</span>
        <Box val={time.s} label="saat" />
      </div>
    </div>
  )
}
function GalleryModal({ image, onClose }) {
  if (!image) return null
  return (
    <div className="w-full h-full fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <Image src={image.src} alt={image.alt} width={700} height={588} style={{ objectFit: 'fill' }} />
        <button onClick={onClose} className="absolute top-2 right-2 bg-white rounded-full p-2">×</button>
      </div>
    </div>
  )
}
function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-yellow-800 mb-2">
          GALERI MEDIA DAN AKTIVITI PELAJAR
        </h2>
        <div className="mt-3 mx-auto w-16 h-1 bg-yellow-600 rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={4}
          spaceBetween={16}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
            1280: { slidesPerView: 4, spaceBetween: 16 },
          }}
        >
          {GALLERY_IMAGES.map((img, index) => (
            <SwiperSlide key={index}>
              <div
               style={{ aspectRatio: '980 / 788', position: 'relative' }} 
              
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: 'contain' }}
                
                />
               
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <GalleryModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  )
}

function page() {
  return (
    <div>
      <div className="bg-slate-700">
      <div className="py-2 md:py-3 lg:py-6"></div>
      <div className=" flex justify-center">
      <Image
          className="w-full"
          src="/MPHU/LANDING PAGE-01.jpeg"
          alt="MPHU LANDING PAGE"
          width="1500"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </div>
    
     
        <MarqueeBanner />   {}


  <div
            className="w-full"
            style={{ position: 'relative', paddingBottom: '56.25%', height: 0, maxWidth: '1500px' }}
          >
  <iframe

    src="https://www.youtube.com/embed/GOB1FnFUL5c"
    style={{
      position: 'absolute',
      top: 20,
      left: 0,
      width: '100%',
      height: '100%',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    }}
    allow="autoplay; encrypted-media"
    allowFullScreen
    title="Video DHUMY"
    loading="lazy"
  />
</div>
  </div> 
        
             
            <div className="bg-white py-2 md:py-3 lg:py-86">.</div>
            <div className="bg-white flex justify-center">
           <a href="https://drive.google.com/file/d/1EGMm2gSmdjkT7LRsPPNRK3AI6RSF_6wj/view" target="_blank" rel="noopener noreferrer">
          <Image
               className=""
              src="\MPHU\prospektus.gif"
              alt="LANDING PAGE"
              width="200"
              height="80"
              style={{
                objectFit: "contain",
              }}
    />
  </a>
  <div className="bg-white py-2 md:py-3 lg:py-86">.</div>
            <div className="bg-white flex justify-center">
           <a href=" https://forms.gle/sbYV8i4XGm1c1fud9" target="_blank" rel="noopener noreferrer">
          <Image
               className=""
              src="\MPHU\prospektus.gif"
              alt="LANDING PAGE"
              width="200"
              height="80"
              style={{
                objectFit: "contain",
              }}
    />
     </a>

 
</div>
        <div
            className="w-full"
            style={{ position: 'relative', paddingBottom: '56.25%', height: 0, maxWidth: '1500px' }}
          >
  <iframe
    src="https://www.youtube.com/embed/VtmT163K3Yc"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    }}
    allow="autoplay; encrypted-media"
    allowFullScreen
    title="Video DHUMY"
    loading="lazy"
  />
</div>
   <MarqueeBanner2 />   {}


      <div className="bg-white py-2 md:py-3 lg:py-6"></div>
      <div className="bg-white flex justify-center ">
      <Image
          className="w-full"
          src="MPHU/LANDING PAGE-02.jpg.jpeg"
          alt="MPHU LANDING PAGE 2"
          width="1500"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </div>
 
      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <div className="bg-white px-6 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-800">Apa Kata Alumni Kami</h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-yellow-600 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              540:  { slidesPerView: 2, spaceBetween: 16 },
              768:  { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="pb-12"
            style={{
              '--swiper-pagination-color': '#ca8a04',
              '--swiper-navigation-color': '#92400e',
              '--swiper-navigation-size': '24px',
            }}
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} style={{ height: 'auto' }}>
                <div className="rounded-xl overflow-hidden shadow-md border border-yellow-100 bg-white h-full flex flex-col">

                  {/* Photo top */}
                  <div className="relative w-full" style={{ height: '220px' }}>
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Content bottom — yellow theme */}
                  <div className="bg-yellow-50 px-4 py-4 flex flex-col gap-2 flex-1">
                    <p className="text-sm font-bold text-yellow-900">{t.name}</p>
                    <p className="text-xs text-gray-600 leading-relaxed italic">
                      "{t.quote}"
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(t.stars)].map((_, i) => <StarIcon key={i} />)}
                    </div>
                    <p className="text-xs font-semibold text-yellow-700 mt-1">{t.role}</p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
          
            {/* ── PHOTO GALLERY ───────────────────────────────────── */}
      <PhotoGallery />
            <div className="bg-white py-2 md:py-3 lg:py-86">.</div>
      <div className="bg-white flex justify-center ">
      <Image
          className=""
          src="MPHU/LANDING PAGE.png"
          alt="LANDING PAGE"
          width="800"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </div>

       <Countdown />  

        <div className="bg-white py-8 px-4 text-center">
  <h2 className="text-3xl font-bold text-yellow-800 mb-6">
    KLIK LINK / QR UNTUK TEMPAH TIKET MPHU
  </h2>

  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
    
    {/* Clickable Link */}
    <a
      href="https://yeg.onpay.my/order/form/tiketmphu2026ftd"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition-colors duration-200"
    >
      <span>Tempah Tiket MPHU</span>
    </a>


    {/* Divider */}
    <div className="text-gray-400 font-semibold text-xl">ATAU</div>

    {/* QR Code */}
    <div className="flex flex-col items-center gap-2">
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://yeg.onpay.my/order/form/tiketmphu2026ftd`}
        alt="QR Code Tempah Tiket MPHU"
        width={180}
        height={180}
        className="rounded-xl shadow-md border-4 border-yellow-600"
      />
      <p className="text-sm text-gray-500">Imbas QR untuk tempah</p>
    </div>
  </div>

            <div className="bg-white py-8 px-4 text-center">
  <h2 className="text-3xl font-bold text-yellow-800 mb-6">
          SILA ISI BORANG UNTUK PEGAWAI KAMI HUBUNGI ANDA
        </h2>
              <FormMPHUSelangor/>
</div>
</div>
</div>
</div>

    )
}
 export default page;