import React from 'react'
import Image from "next/image"


function footer() {
  return (
    <div>
    <section13>
      <div className="w-full h-full">
        <div className=" bg-yellow-600 grid grid-cols-1 lg:grid-cols-3">
        <div className="bg-slate-800 pt-10 ">
          <a className="flex justify-center" href="/">
          <Image
            className="" 
            src="/logoyeg.svg"
            alt="logoyeg"
            width="250"
            height="10"
            style={{
              objectFit:"contain",
            }}/>
          </a>
          <div className="grid p-8 lg:px-28 px-14 text-white text-xs">
            <div className="py-4">
              <h className="">YEG Academy M Sdn Bhd</h> 
              <h1>BLOK G-2-2 , The Strand Garden Office,</h1>
              <h2>Kota Damansara, Jalan PJU 5/1, Kota Damansara</h2>
              <h3>47810,Petaling Jaya, Selangor</h3>
            </div>
            <h className="">MISA GLOBAL WORK Sdn Bhd</h> 
            <h1>BLOK G-2-2 , The Strand Garden Office,</h1>
            <h2>Kota Damansara, Jalan PJU 5/1, Kota Damansara</h2>
            <h3>47810,Petaling Jaya, Selangor</h3> 
            <div className="grid py-6 ">
            <h>Working hours : 8.30am-5.30pm</h>
            <h>Email: info@yegmy.com</h>
            <div className="grid py-2">
            <h>Management Office: +603-6144 6558</h>
            <h>Customer Service: +603-6143 5073</h>
            </div>
            <div className="flex space-x-5">
            <a className="grid py-6 " href="https://www.facebook.com/youreducationguidance/">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="30"
                width="30"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
              </svg>
            </a>
          <a className="grid py-6 " href="https://www.instagram.com/yegacademy.official/?hl=en"> 
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="30"
                width="30"
              >
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
              </svg>
          </a>
          <a className="grid py-6" href="https://www.tiktok.com/@yegacademy?lang=en">
              <svg
                viewBox="0 0 448 512"
                fill="currentColor"
                height="25"
                width="25"
              >
                <path d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11185 188.31v89.89a74.62 74.62 0 1052.23 71.18V0h88a121.18 121.18 0 001.86 22.17A122.18 122.18 0 00381 102.39a121.43 121.43 0 0067 20.14z" />
              </svg>
          </a>
          <a className="grid py-6" href="https://www.youtube.com/@yegacademy5437">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="30"
            width="30"  
          >
            <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
          </svg>
          </a>
          </div>
          <div className="grid space-y-6">
          <h>@ 2023 YEG Academy (M) Sdn Bhd 1334979-W | Hak Cipta Terpelihara</h>
         
          </div>
          <div className="pt-6 grid space-y-2">
          <h>Developed by <a href="https://www.tiktok.com/@petalcode">PetalCode Labs</a></h>
          </div>
          </div>
          </div>
          </div>
          <div className=" col-span-2 p-8">
            <div className=" text-white text-xs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="grid space-y-3">
              <span className="text-xl font-bold py-3">CAREER PROGRAMME</span>
              <a className="font-medium" href="../kursuskerjaya/sphu">Sijil Program Profesional Haji & Umrah (SPHU)</a>
              <a className="font-medium" href="../kursuskerjaya/acm">Aviation Career Malaysia (ACM)</a>
              <a className="font-medium" href="../kursuskerjaya/misa">Malaysia Industry Skills Academy (MISA)</a>
              
            </div>
            <div className="grid space-y-3">
              <span className="text-xl font-bold py-3">DIPLOMA PROGRAMME</span>
              <a className="font-medium" href="../kursusdiploma/dhumy">Diploma Pengurusan Haji & Umrah (DHUMY)</a>
              <a className="font-medium" href="../kursusdiploma/dle">Diploma Penguatkuasa Undang-Undang (DLE)</a>
              <a className="font-medium" href="../kursusdiploma/dnur">Diploma kejururawatan (DNUR)</a>
              <a className="font-medium" href="../kursusdiploma/dacm">Diploma Pengurusan Kargo Udara (DACM)</a>
              <a className="font-medium" href="../kursusdiploma/daom">Diploma Pengurusan Operasi Penerbangan (DAOM)</a>
              <a className="font-medium" href="../kursusdiploma/damt">Diploma Penyelenggaraan teknologi Pesawat (DAMT)</a>
              <a className="font-medium" href="../kursusdiploma/amt">Sijil Kemahiran Malaysia Operasi Penyelenggaraan Pesawat (AMT)</a>
              <a className="font-medium" href="../kursusdiploma/dtmmea">Diploma Pengurusan Pelancongan (DTM-MEA)</a>
            </div>
            <div className="grid space-y-3">
              <span className="text-xl font-bold py-3">DIPLOMA-WBL</span>
              <a className="font-medium" href="../kursusdiploma/dhumy">Diploma Pengurusan Haji & Umrah (DHUMY-WBL)</a>
              <a className="font-medium" href="../kursusdiplomawbl/dhmwbl">Diploma Pengurusan Perhotelan (DHM-WBL)</a>
              <a className="font-medium" href="../kursusdiplomawbl/dcawbl">Diploma Seni Kulinari (DCA-WBL)</a>
              <a className="font-medium" href="../kursusdiplomawbl/decwbl">Diploma Pendidikan Awal Kanak-kanak (DEC-WBL)</a>
              <a className="font-medium" href="../kursusdiploma/dacm">Diploma Pengurusan Kargo Udara (DACM-WBL)</a>
              <a className="font-medium" href="../kursusdiploma/daom">Diploma Pengurusan Operasi Penerbangan (DAOM-WBL)</a>
              <a className="font-medium" href="../kursusdiplomawbl/dasmwbl">Diploma Teknologi Pembaikan Struktur Pesawat - Kepingan Logam (DASM-WBL)</a>
              <a className="font-medium text-transparent" href="../kursusdiploma/dtmmea">Diploma Pengurusan Pelancongan (DTM-MEA)</a>
            </div>
            <div className="grid space-y-3 py-3">
            <a className="text-xl font-bold" href="../article">ARTICLE</a>
            <a className="text-xl font-bold" href="../testimoni">TESTIMONY</a>
            <a className="text-xl font-bold" href="../career">JOB VACANCY</a>
            {/* <a className="text-xl font-bold" href="../enroll">ENROLE</a> */}
            <a className="text-xl font-bold" href="../">PDPT-YEG</a> 
            <a className="text-xl font-bold" href="../borangyeg">CONTACT US</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section13>
    </div>
  )
}

export default footer