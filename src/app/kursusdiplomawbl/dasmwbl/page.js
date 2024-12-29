import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Contactus from "@/components/Contactus"

function dasmwbl() {
  return (
    <main>
      <title>YEG Academy - diploma wbl</title>
      {/* <nav className="hidden lg:block sticky top-0 ">
        <Navbar/>
    </nav>
      <nav>
    <div className="lg:hidden">
        <Sidebar/>
    </div>
    </nav> */}
      <section1>
      <div className="flex justify-center">
      <Image
                    className="rounded-sm"
                    src="/acm.jpg"
                    alt="acm"
                    width="900"
                    height="200"
                    style={{
                    objectFit:"contain",
                    }}
                />
          </div>
        <div className="py-4 grid grid-cols-1 px-6">
          
          <div className=" p-4">
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">DIPLOMA WORK BASED-LEARNING</h>
              <h className="font-semibold">DIPLOMA AIRCRAFT SHEET METAL - STRUCTURE REPAIR TECHNOLOGY - WBL</h>

            </div>
          <div className="space-y-5">
            <div className="flex justify-center">
              <h className="text-justify">Dalam era yang penuh cabaran dalam bidang pembetulan lembaran pesawat, keperluan akan kemahiran dalam pengurusan operasi pembetulan struktur pesawat semakin mencorak landskap industri. Program Diploma Teknologi Pembetulan Lembaran Pesawat dan Struktur menonjolkan pengalaman pembelajaran terbaik dengan keterlibatan pakar industri dan modul inovatif untuk memenuhi tuntutan industri yang kian berkembang.</h>
            </div>
            <div className="grid space-y-2">
              <h className="">Dengan Kursus Ini, Anda Akan</h>
              <li className="px-4">Biasiswa Yuran Pengajian</li>
              <li className="px-4">Elaun bernilai RM500 – RM900</li>
              <li className="px-4">Subsidi Hostel pada Semester Pertama</li>
              <li className="px-4">Layak untuk Ijazah Pengelolaan Penerbangan bersama kami (Ijazah Sarjana secara PERCUMA melalui penyelidikan)</li>
              <li className="px-4">Diploma disahkan oleh MQA</li>
              <li className="px-4">Latihan Dalam Kerja (LDK) Pembelajaran Berasaskan Kerja (LBK)</li>
              <li className="px-4">AML (Lesen Penyelenggaran Pesawat)</li>
              <li className="px-4">Peluang Pekerjaan Selepas Graduasi</li>
            </div>
            <div className="grid space-y-2">
              <h className="">Syarat-Syarat Kelayakan</h>
              <li className="px-4">Lulus SPM subjek Matematik & Sains</li>
              <li className="px-4">Total 3 kredit mana-mana subjek</li>
              <li className="px-4">Lulus subjek Bahasa English</li>
              <li className="px-4">Tempoh pembelajaran selama 3 tahun</li>
            </div>
            </div>
          </div>
        </div>
      </section1>

      <div className="py-8 lg:py-10 md:[height:80px]"></div>
      <Contactus/>
      <div className="py-8 lg:py-10 md:[height:80px]"></div>

      <section2>
        <div className="hidden lg:grid-cols-3 md:grid grid-cols-3 gap-6 px-6">
          <card1 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">1</h>
              <h>Program-program yang dipilih selaras dengan Dasar Ekonomi Digital Negara.</h>
            </div>
          </card1>
          <card2 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">2</h>
              <h>Berkolaborasi dengan IPT yang mempunyai ekosistem pembelajaran yang lengkap.</h>
            </div>
          </card2>
          <card3 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">3</h>
              <h>Bidang-bidang yang ditawarkan mengikut pasaran kerja terkini.</h>
            </div>
          </card3>
          
        </div>
        <div className="hidden  md:grid grid-cols-2 lg:grid grid-cols-2 gap-5 p-6">
        <card4 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">4</h>
              <h>Personaliti dan potensi pelajar diambil kira dengan bidang kerjaya yang dipilih.</h>
            </div>
          </card4>
          <card5 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">5</h>
              <h>Tenaga pengajar yang terdiri dari pakar industri masing-masing.</h>
            </div>
          </card5>
        </div>
      </section2>
      <div>
      <Footer/>
    </div>
    </main>
  )
}

export default dasmwbl