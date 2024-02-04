"use client"
import React from 'react'
import Image from "next/image"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"



function Navbar() {
  return (
    <nav className="h-full backdrop-blur bg-slate-800 p-2">
        <div className=" container flex h-full items-center w-full">
        <a href="/"
           className="w-ful"
                  >
                    <Image
                      className=""
                      src="/logoyeg.svg"
                      alt="logoyeg"
                      height="150"
                      width="150"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </a>
            <div className="mr-4 hidden md:flex w-full">
            
                <div className="w-full ml-10 flex justify-end items-center space-x-2">
                <NavigationMenu>
                    <NavigationMenuList>



                    <NavigationMenuItem>
                            <NavigationMenuTrigger className="">Program Kerjaya</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="bg-yellow-600 grid gap-3 md:w-[400px] lg:w-[500px] text-white">
                            <NavigationMenuLink >
                                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursuskerjaya/sphu">Sijil Program Profesional Haji & Umrah (SPHU)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursuskerjaya/acm">Aviation Career Malaysia (ACM)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursuskerjaya/misa">Malaysia Industry Skills Academy (MISA)</a>
                                    </div>
                                </div>
                            </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>


                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="">Kursus Diploma</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="bg-yellow-600 grid gap-3 md:w-[400px] lg:w-[600px] text-white">
                            <NavigationMenuLink >
                                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiploma/dhumy">Diploma Pengurusan Haji & Umrah (DHUMY)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiploma/dle">Diploma Penguatkuasa Undang-Undang (DLE)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiploma/dnur">Diploma Kejururawatan (DNUR)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiploma/dacm">Diploma Pengurusan Kargo Udara (DACM)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiploma/daom">Diploma Pengurusan Operasi Penerbangan (DAOM)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiploma/damt">Diploma Penyelenggaraan Teknologi Pesawat (DAMT)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiploma/amt">Sijil Kemahiran Malaysia Operasi Penyelenggaraan Pesawat (AMT)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiploma/dtmmea">Diploma Pengurusan Pelancongan (DTM-MEA)</a>
                                    </div>
                                </div>
                            </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="">Kursus Diploma - WBL</NavigationMenuTrigger>
                            
                            <NavigationMenuContent>
                                <div className="bg-yellow-600 grid gap-3 md:w-[400px] lg:w-[700px] text-white">
                            <NavigationMenuLink >
                                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dhumywbl">Diploma Pengurusan Haji & Umrah (DHUMY-WBL)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dhmwbl">Diploma Pengurusan Perhotelan (DHM-WBL)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dcawbl">Diploma Seni Kulinari (DCA-WBL)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/decwbl">Diploma Pendidikan Awal Kanak-kanak (DEC-WBL)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dacmwbl">Diploma Pengurusan Kargo Udara (DACM-WBL)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/daomwbl">Diploma Pengurusan Operasi Penerbangan (DAOM-WBL)</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dasmwbl">Diploma Teknologi Pembaikan Struktur Pesawat - Kepingan Logam (DASM-WBL)</a>
                                    </div>
                                </div>
                            </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>



                        
                        <NavigationMenuItem>
                            <button className="lg:flex hidden text-white group h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium   disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                            <a className="" href="../article">Artikel</a>
                                </button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <button className="lg:flex hidden text-white group h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium   disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                            <a className="" href="../testimoni">Testimoni</a>
                                </button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <button className="lg:flex hidden text-white group h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium   disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                            <a className="" href="../career">Karier</a>
                                </button>
                        </NavigationMenuItem>
                        
                        <NavigationMenuItem>
                            <button className="lg:flex hidden text-white group h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium   disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                            <a className="" href="../enroll">Enroll</a>
                                </button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <button className="lg:flex hidden text-white group h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium   disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                            <a className="" href="/">PDPT-YEG</a>
                                </button>
                        </NavigationMenuItem>
                        </NavigationMenuList>
                </NavigationMenu>
                </div>
                
                <NavigationMenu>
                <NavigationMenuList>
                            <button className=" bg-yellow-600 hover:bg-yellow-500 duration-300 text-white group inline-flex h-7 w-max items-center justify-center rounded bg-background px-4 py-2 text-sm font-medium   disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                <a className="" href="../borangyeg">Hubungi Kami</a>
                                </button>
                    </NavigationMenuList>
                </NavigationMenu>       
                 
                </div>
            </div>
    </nav>
  )
}

export default Navbar


