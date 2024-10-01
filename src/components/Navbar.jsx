"use client"
import React from 'react'
import Image from "next/image"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger
  } from "@/components/ui/menubar"
  

function Navbar() {
  return (
    <nav className="bg-slate-800">
        <div className="w-full "> 
        <Menubar >
        <div className="bg-slate-800 pl-4">
    <a href="/" className="">
            <Image
                className=""
                src="/logoyeg.svg"
                alt="logoyeg"
                height="140"
                width="140"
                style={{
                objectFit: "contain",
                }}/></a></div>
            <div className="bg-slate-800 flex w-full justify-end">

            


        <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-700">Career Programe</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursuskerjaya/sphu">Sijil Program Profesional Haji & Umrah (SPHU)</a> </div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursuskerjaya/acm">Aviation Career Malaysia (ACM)</a></div>
                    </MenubarItem>
                        <MenubarItem>
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursuskerjaya/misa">Malaysia Industry Skills Academy(MISA)</a></div>
                        </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

   

            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">Online Distance Learning</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../odl/diploma1">Diploma in Business & Administration</a></div>
                    </MenubarItem>
                    {/* <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dhmwbl">Diploma Pengurusan Perhotelan (DHM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dcawbl">Diploma Seni Kulinari (DCA-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/decwbl">Diploma Pendidikan Awal Kanak-kanak (DEC-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dacmwbl">Diploma Pengurusan Kargo Udara (DACM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/daomwbl">Diploma Pengurusan Operasi Penerbangan (DAOM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dasmwbl">Diploma Teknologi Pembaikan Struktur Pesawat - Kepingan Logam (DASM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dtmmea">Diploma Pengurusan Pelancongan (DTM-MEA)</a></div>
                    </MenubarItem>      */}
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">Diploma Courses</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dhumy">Diploma Pengurusan Haji & Umrah (DHUMY)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dle">Diploma Penguatkuasa Undang-Undang (DLE)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dnur">Diploma Kejururawatan (DNUR)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dacm">Diploma Pengurusan Kargo Udara (DACM)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/daom">Diploma Pengurusan Operasi Penerbangan (DAOM)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/damt">Diploma Penyelenggaraan Teknologi Pesawat (DAMT)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/amt">Sijil Kemahiran Malaysia Operasi Penyelenggaraan Pesawat (AMT)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dtmmea">Diploma Pengurusan Pelancongan (DTM-MEA)</a></div>
                    </MenubarItem>     
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">WBL Diploma Courses</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dhumywbl">Diploma Pengurusan Haji & Umrah (DHUMY-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dhmwbl">Diploma Pengurusan Perhotelan (DHM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dcawbl">Diploma Seni Kulinari (DCA-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/decwbl">Diploma Pendidikan Awal Kanak-kanak (DEC-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dacmwbl">Diploma Pengurusan Kargo Udara (DACM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/daomwbl">Diploma Pengurusan Operasi Penerbangan (DAOM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dasmwbl">Diploma Teknologi Pembaikan Struktur Pesawat - Kepingan Logam (DASM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dtmmea">Diploma Pengurusan Pelancongan (DTM-MEA)</a></div>
                    </MenubarItem>     
                </MenubarContent>
            </MenubarMenu>

            

            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">
                    <a className="" href="../article">Article</a></MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">
                <a className="" href="../testimoni">Testimony</a></MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">
                <a className="" href="../career">Job Vacancy</a></MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger><a className="">PDPT-YEG</a></MenubarTrigger>
                <MenubarContent>
                    <MenubarItem className="grid">
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="https://lll-52a72qasy-fuaadtarmizis-projects.vercel.app/">Haj Umrah Examination</a></div>
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/">Health Science Examination</a></div>
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/">Aviation Examination</a></div>
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/">Penguatkuasa Undang-Undang Examination</a></div>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="bg-yellow-500 hover:bg-yellow-400">
                <a href="../borangyeg">Contact Us</a> </MenubarTrigger>
            </MenubarMenu>
            </div>
            </Menubar>
        </div>
    </nav>
  )
}

export default Navbar

// 'use client';
// import React, { useState } from 'react';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <div className="w-full flex justify-center">
//       <div className="relative inline-block text-left">
//         <button
//           type="button"
//           onClick={toggleDropdown}
//           className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Options
//           <svg
//             className="-mr-1 ml-2 h-5 w-5"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>

//         {isOpen && (
//           <div className="absolute top-10 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//             <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//               <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
//                 Option 1
//               </a>
//               <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
//                 Option 2
//               </a>
//               <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
//                 Option 3
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;




