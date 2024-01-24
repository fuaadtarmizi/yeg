"use client"

// src/components/Navbar.js
import React, { useState } from 'react';
import Image from "next/image"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  
  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleNavbar1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
  };
  const toggleNavbar2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleNavbar3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleNavbar4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleNavbar5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleNavbar6 = () => {
    setIsOpen6(!isOpen6);
  };


  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">
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
        </div>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          <p className="">menu</p>
         
        </button>
      </div>
    

      {/* Responsive Navigation */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          {/* Add your navigation links here */}
          <button 
          onClick={toggleNavbar1}
          className="block text-white py-2 px-4 hover:bg-gray-700">
            Program Kerjaya
          </button>


          {isOpen1 && (
        <div className="lg:hidden mt-4 bg-yellow-700">
          {/* Add your navigation links here */}
            <a 
            onClick={toggleNavbar2}
            className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursuskerjaya/sphu">
              Sijil Profesional Haji & Umrah (SPHU)
            </a>
            <a 
            onClick={toggleNavbar3}
            className="block text-white py-2 px-4 hover:bg-gray-700"href="../kursuskerjaya/acm">
              Aviation Career Malaysia (ACM)
            </a>
            
          <a 
            onClick={toggleNavbar4}
            className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursuskerjaya/misa">
              Malaysia Industry Skill Academy (MISA)
            </a>
           
          
        </div>
          )}
          <button 
            onClick={toggleNavbar6}
            className="block text-white py-2 px-4 hover:bg-gray-700" href="#about">
              Kursus Diploma
            </button>
            {isOpen6 && (
        <div className="lg:hidden mt-4 bg-yellow-700">
          {/* Add your navigation links here */}
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/dhumy">
            Diploma Pengurusan Haji & Umrah (DHUMY)</a>
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/dle">
            Diploma Penguatkuasa Undang-Undang (DLE)</a>
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/dnur">
            Diploma in Nursing (DNUR)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/dacm">
              Diploma Pengurusan Kargo Udara (DACM)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/daom">
              Diploma Pengurusan Operasi Penerbangan (DAOM)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/damt">
              Diploma Penyelenggaraan teknologi Pesawat (DAMT)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/amt">
              Sijil Kemahiran Malaysia Operasi Penyelenggaraan Pesawat (AMT)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/dtmmea">
              DIPLOMA TOURISM MANAGEMENT (DTM-MEA)</a>
        </div>
          )}


<button 
            onClick={toggleNavbar2}
            className="block text-white py-2 px-4 hover:bg-gray-700" href="#about">
              Kursus Diploma - WBL
            </button>
            {isOpen2 && (
        <div className="lg:hidden mt-4 bg-yellow-700">
          {/* Add your navigation links here */}
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/dhumywbl">
            Diploma Pengurusan Haji & Umrah (DHUMY)</a>
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/dhmwbl">
            Diploma Pengurusan Perhotelan (DHM-WBL)</a>
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/dcawbl">
            Diploma in Culinary Arts (DCA-WBL)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/decwbl">
              Diploma in Early Childhood (DEC-WBL)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/dacmwbl">
              Diploma Pengurusan Kargo Udara (DACM-WBL)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/daomwbl">
              Diploma Pengurusan Operasi Penerbangan (DAOM-WBL)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/dasmwbl">
              Diploma Aircraft Sheet Metal - Structure Repair Technology (DASM-WBL)</a>
        </div>
          )}




          <a className="block text-white py-2 px-4 hover:bg-gray-700" href="./article">
          Article</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../testimoni">
              Testimoni</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../career">
              Career</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../enroll">
              Enroll</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../borangyeg">
              Hubungi Kami</a>
        </div>
      )}
      
      


      
      
      
      
    </nav>
    
  );
};

export default Navbar;

