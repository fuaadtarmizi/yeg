'use client'
import Image from "next/image"
import React from 'react'
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"

export default function article() {
  return (
    <main>
    <title>YEG Academy - article 7</title>
        <nav className="hidden lg:block sticky top-0 ">
            <Navbar/>
        <div className="lg:hidden">
            <Sidebar/>
        </div>
        </nav>
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 container pt-6">
            <div className="space-y-4 p-4 container">
              <div>
                <h className="text-base text-red-500 font-bold">Conferences·Brainstorm Health</h>
              </div>
              <div>
                <h className="font-serif font-bold text-2xl lg:text-5xl">YEG Academy, bergerak memberi makanan kepada gelandangan tanpa rasa kekangan oleh pihak kerajaan</h>
              </div>
              <div className="grid">
                <h className="text-sm">by Fuaad Tarmizi</h>
                <h className="text-sm">Oct 2, 2024 at 7:24 AM GMT+8</h>
              </div>
            </div>
            <div className="">
            <div className="max-w-full lg:px-3 justify-center grid">
              <div className="">
              <Image 
              className=""
              src="/suap.jpg"
              alt="suaphomeless"
              width="850"
              height="10"
              style={{
                objectFit:"contain",
              }}
            />
              </div>
              <div>
                <h className="font-serif text-sm">Dr. Michelle Gourdine, senior vice president of CVS Health and chief medical officer of CVS Caremark, speaks about the lack of trust in the health care system at Fortune's Brainstorm Health conference in Dana Point, Calif., Monday, May 20, 2024</h>
              </div>
            </div>
            </div>
          </div>
        </section>
        <div className="py-6"></div>
        <section>
          <div className="flex justify-center w-full ">
          <div className="container lg:w-2/3  grid space-y-8 py-8">
            <h className=" text-black font-serif">YEG Academy, 1-10-2024 – Di tengah kesibukan dan perkembangan pesat bandar kita, isu gelandangan sering kali terpinggir daripada perhatian. Dalam usaha untuk memberikan sokongan kepada golongan ini, YEG Academy dengan bangga melancarkan kempen "CSR(Corperate Social Responsibility)", bertujuan untuk menyediakan makanan berkhasiat kepada gelandangan di sekitar kawasan bandar</h>
            <h className="text-black font-serif">Kempen ini bertujuan untuk meningkatkan kesedaran masyarakat tentang pentingnya solidariti dan keprihatinan terhadap golongan yang memerlukan. Gelandangan bukan sahaja menghadapi ketiadaan tempat tinggal, tetapi juga berdepan dengan masalah kesihatan dan kebajikan.</h>
          </div>
          </div>
        </section>
        <section>
          <div className="grid justify-center py-8">
          <div className="w-fit lg:w-[900px]">
            <video
              controls
              autoPlay
              className="">
              <source src="/csr.mp4" type="video/mp4" />
            </video>
          </div>
          </div>
        </section>
        <div className="flex justify-center py-4">
        <div className="container lg:w-2/3 grid space-y-8">
          <h className="font-serif ">Kempen "CSR(Corperate Social Responsibility)" merangkumi beberapa aktiviti menarik. Pertama, orang ramai digalakkan untuk menyumbang makanan dan bahan mentah yang akan digunakan untuk menyediakan hidangan. Sukarelawan akan berkumpul untuk memasak hidangan berkhasiat, memberikan mereka peluang untuk belajar kemahiran baru sambil menyumbang. Selepas memasak, sukarelawan akan keluar ke jalanan untuk mengagihkan makanan kepada gelandangan, membawa sedikit keceriaan kepada mereka. Selain itu, sesi penerangan akan diadakan untuk meningkatkan kesedaran tentang isu gelandangan dan cara-cara untuk memberi sokongan.</h>
          <h className="font-serif ">YEG Academy mengajak semua lapisan masyarakat untuk terlibat dalam kempen ini. Anda boleh menyumbang makanan, sertai pasukan sukarelawan untuk membantu memasak dan mengagihkan makanan, serta menyebarkan maklumat tentang kempen ini di media sosial untuk menarik lebih ramai orang untuk menyertai.</h>
          <h className="font-serif ">Kempen "CSR(Corperate Social Responsibility)" adalah satu usaha penting dalam membantu golongan gelandangan dan memberi mereka harapan. Setiap sumbangan dan tindakan kecil anda mampu memberikan impak yang besar. Mari kita bersama-sama menyumbang kepada perubahan positif dalam masyarakat.</h>
        </div>
        </div>
        
        
    
    <div>
    

      <Footer/>
    </div>
    </main>
  )
}

