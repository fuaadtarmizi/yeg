'use client'
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   
  export default function AccordionDemo() {
    return (
        <div className="w-full flex justify-center">
        <div className="w-full p-3">
          <div>
          FREQUENTLY ASKED QUESTIONS (FAQ)
          </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Kempen akan berjalan secara fizikal atau atas talian?</AccordionTrigger>
          <AccordionContent>
          Kempen akan dijalankan secara fizikal dan atas talian secara serentak. Penyertaan secara fizikal adalah terhad kepada 500 orang terawal sahaja.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Bagaimana nak sertai kempen Melahirkan Mutawwif Profesional 3.0?</AccordionTrigger>
          <AccordionContent>
          Anda hanya perlu menekan link di bio sosial media (Facebook: Pengurusan Haji dan Umrah, Instagram: @dhumy.official, Tiktok: @dhumy.official) dan mengisi borang yang disediakan. Pegawai bertugas kendalian penganjur akan menghubungi anda untuk maklumat lanjut.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Apa yang peserta akan dapat dengan menyertai kempen ini?</AccordionTrigger>
          <AccordionContent>
          Peserta yang menghadiri kempen MMP 3.0 secara fizikal akan diberikan lanyard, kad peserta, kad doa’ dan sedikit makanan ringan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Apa yang peserta akan dapat dengan menyertai kempen ini?</AccordionTrigger>
          <AccordionContent>
          Peserta yang menghadiri kempen MMP 3.0 secara fizikal akan diberikan lanyard, kad peserta, kad doa’ dan sedikit makanan ringan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Apa yang peserta akan dapat dengan menyertai kempen ini?</AccordionTrigger>
          <AccordionContent>
          Peserta yang menghadiri kempen MMP 3.0 secara fizikal akan diberikan lanyard, kad peserta, kad doa’ dan sedikit makanan ringan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Apa yang peserta akan dapat dengan menyertai kempen ini?</AccordionTrigger>
          <AccordionContent>
          Peserta yang menghadiri kempen MMP 3.0 secara fizikal akan diberikan lanyard, kad peserta, kad doa’ dan sedikit makanan ringan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Apa yang peserta akan dapat dengan menyertai kempen ini?</AccordionTrigger>
          <AccordionContent>
          Peserta yang menghadiri kempen MMP 3.0 secara fizikal akan diberikan lanyard, kad peserta, kad doa’ dan sedikit makanan ringan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Apa yang peserta akan dapat dengan menyertai kempen ini?</AccordionTrigger>
          <AccordionContent>
          Peserta yang menghadiri kempen MMP 3.0 secara fizikal akan diberikan lanyard, kad peserta, kad doa’ dan sedikit makanan ringan.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
      </div>
    )
  }