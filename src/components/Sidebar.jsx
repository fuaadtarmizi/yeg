"use client"
// src/components/Navbar.js
import React, { useState } from 'react';
import Image from "next/image"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);       // main hamburger
  const [isProgram, setIsProgram] = useState(false); // Program dropdown
  const [isFphu, setIsFphu] = useState(false);       // Fakulti Pengurusan Haji & Umrah dropdown

  const toggleNavbar  = () => setIsOpen(!isOpen);
  const toggleProgram = () => { setIsProgram(!isProgram); setIsFphu(false); };
  const toggleFphu    = () => setIsFphu(!isFphu);

  return (
    <nav className="bg-gray-800 p-3 lg:hidden">
      {/* ── Top bar: logo + hamburger ── */}
      <div className="flex items-center justify-between">
        <a href="/" className="text-white font-bold text-xl">
          <Image
            src="/logoyeg.svg"
            alt="logoyeg"
            height="120"
            width="120"
            style={{ objectFit: "contain" }}
          />
        </a>
        <button
          className="text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          <Image
            src="/menu.svg"
            alt="menu"
            height="25"
            width="25"
            style={{ objectFit: "contain" }}
          />
        </button>
      </div>

      {/* ── Slide-down menu ── */}
      {isOpen && (
        <div className="mt-4 flex flex-col">

          {/* Program */}
          <button
            onClick={toggleProgram}
            className="flex items-center justify-between text-white py-2 px-4 hover:bg-gray-700 text-left"
          >
            <span>Program</span>
            <span>{isProgram ? "▲" : "▼"}</span>
          </button>

          {isProgram && (
            <div className="bg-yellow-700 flex flex-col">

              {/* Fakulti Pengurusan Haji & Umrah */}
              <button
                onClick={toggleFphu}
                className="flex items-center justify-between text-white py-2 px-6 hover:bg-yellow-600 text-left"
                href="../kursuskerjaya/sphu/shum"
              >
                <span>Fakulti Pengurusan Haji &amp; Umrah</span>
                <span>{isFphu ? "▲" : "▼"}</span>
              </button>

              {isFphu && (
                <div className="bg-yellow-500 flex flex-col">
                  {/* Undergraduate */}
                  <a
                    className="text-white py-2 px-8 hover:bg-yellow-400"
                    href="../kursuskerjaya/sphu/bhum"
                  >
                    Diploma + Degree Pengurusan Haji &amp; Umrah
                  </a>
                  {/* Postgraduate */}
                  <a
                    className="text-white py-2 px-8 hover:bg-yellow-400"
                    href="/kursuskerjaya/sphu/mhum"
                  >
                    Master Hajj &amp; Umrah Management
                  </a>
                  <a
                    className="text-white py-2 px-8 hover:bg-yellow-400"
                    href="/kursuskerjaya/sphu/phd"
                  >
                    PhD Hajj &amp; Umrah Management
                  </a>
                </div>
              )}

              {/* Aviation Career Malaysia */}
              <a
                className="text-white py-2 px-6 hover:bg-yellow-600"
                href="/kursuskerjaya/acm"
              >
                Aviation Career Malaysia (ACM)
              </a>

            </div>
          )}

          {/* Top-level links */}
          <a className="text-white py-2 px-4 hover:bg-gray-700" href="/careyeg">
            Artikel
          </a>
          <a className="text-white py-2 px-4 hover:bg-gray-700" href="/testimoni">
            Testimoni
          </a>
          <a className="text-white py-2 px-4 hover:bg-gray-700" href="/career">
            Career
          </a>
          <a
            className="rounded-sm bg-yellow-600 hover:bg-yellow-500 duration-300 text-white py-2 px-4 mt-1"
            href="/borangyeg"
          >
            Contact Us
          </a>

        </div>
      )}
    </nav>
  );
};

export default Sidebar;


// ─────────────────────────────────────────────────────────────────────────────
// LEGACY / COMMENTED-OUT CODE (preserved for reference)
// ─────────────────────────────────────────────────────────────────────────────

// Previous full implementation with Diploma & WBL Diploma dropdowns:
//
// <button onClick={toggleNavbar6} ...>Diploma Courses</button>
// {isOpen6 && (
//   <div ...>
//     <a href="../kursusdiploma/dhumy">Diploma Pengurusan Haji & Umrah (DHUMY)</a>
//     <a href="../kursusdiploma/dle">Diploma Penguatkuasa Undang-Undang (DLE)</a>
//     <a href="../kursusdiploma/dnur">Diploma Kejururawatan (DNUR)</a>
//     <a href="../kursusdiploma/dacm">Diploma Pengurusan Kargo Udara (DACM)</a>
//     <a href="../kursusdiploma/daom">Diploma Pengurusan Operasi Penerbangan (DAOM)</a>
//     <a href="../kursusdiploma/damt">Diploma Penyelenggaraan teknologi Pesawat (DAMT)</a>
//     <a href="../kursusdiploma/amt">Sijil Kemahiran Malaysia Operasi Penyelenggaraan Pesawat (AMT)</a>
//     <a href="../kursusdiploma/dtmmea">Diploma Pengurusan Pelancongan (DTM-MEA)</a>
//   </div>
// )}
//
// <button onClick={toggleNavbar2} ...>WBL Diploma Courses</button>
// {isOpen2 && (
//   <div ...>
//     <a href="../kursusdiplomawbl/dhumywbl">Diploma Pengurusan Haji & Umrah (DHUMY)</a>
//     <a href="../kursusdiplomawbl/dhmwbl">Diploma Pengurusan Perhotelan (DHM-WBL)</a>
//     <a href="./kursusdiplomawbl/dcawbl">Diploma Seni Kulinari (DCA-WBL)</a>
//     <a href="../kursusdiplomawbl/decwbl">Diploma Pendidikan Awal Kanak-Kanak (DEC-WBL)</a>
//     <a href="../kursusdiplomawbl/dacmwbl">Diploma Pengurusan Kargo Udara (DACM-WBL)</a>
//     <a href="../kursusdiplomawbl/daomwbl">Diploma Pengurusan Operasi Penerbangan (DAOM-WBL)</a>
//     <a href="../kursusdiplomawbl/dasmwbl">Diploma Teknologi Pembaikan Struktur Pesawat - Kepingan Logam (DASM-WBL)</a>
//   </div>
// )}
//
// Previous top-level links also included:
//   <a href="/">PTPD-YEG</a>
//   <a href="../borangyeg">Enrole</a>