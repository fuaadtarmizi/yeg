"use client"
import React, {useState} from 'react'
import Image from "next/image"

export default function page() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem1, setSelectedItem1] = useState(null);

    const [alertMessage, setAlertMessage] = useState('');
    const [emailError, setEmailError] = useState('');


    function Submit(e) {

      const emailValue = e.target.elements.Email.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  
      if (!emailRegex.test(emailValue)) {
        setEmailError('Email must be in a valid format.');
        alert('Email is incorrect!');
        return;
      }

      const formEle = document.querySelector("form");
      const formDatab = new FormData(formEle);
  
      formDatab.append("Program", selectedItem);
      formDatab.append("State", selectedItem1);
      
  
      fetch(
        "https://script.google.com/macros/s/AKfycbyBpXWUk9eFBVFq8VyGmvdzuXgkEGWkg7sf8dYAh1WaPPlvlCi1MTRrb30NwpS2li8-/exec",
        {
          method: "POST",
          body: formDatab
        }
        
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
  
        
  
        setAlertMessage('Form submitted successfully!');
        alert('Penghantaran Berjaya!, Pegawai kami akan menghubungi anda secepat mungkin');
    }


    // program yeg
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  //state  
    const toggleDropdown1 = () => {
      setIsOpen1(!isOpen1);
    };


    // program yeg
    const handleItemClick = (item) => {
      setSelectedItem(item);
      setIsOpen(false);
    };
  //state
    const handleItemClick1 = (item) => {
        setSelectedItem1(item);
        setIsOpen1(false);
      };

  



  return (
    <main>
        <title>YEG Academy - mqa</title>
        
    <div className="w-full h-full" style={{ backgroundImage: "url('wblbackground.png')", backgroundSize: 'cover', backgroundPosition: 'center',  }}>
    <div className="">
          <Image
              className="w-full"
              src="/wbl1.png"
              alt="career1"
              width="200"
              height="200"
              style={{
              objectFit:"cover",
              }}
          />
            </div>
            </div>
            <div>
            <div className="px-4 lg:px-16 ">
      <div className="w-full h-full bg-slate-100 grid grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
        <card1 className="">
          <div className="">
          <Image
            src="./hajilogo.svg"
            alt="malaysia"
            width="350"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>  
          
        </card1>
        <card2 className="">
          <div className="">
          <Image
            src="./avmlogo.svg"
            alt="malaysia"
            width="380"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>  
          
        </card2>
        <card3 className="">
          <div className="">
          <Image
            src="./ppulogo.svg"
            alt="malaysia"
            width="400"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>  
          
        </card3>
        <card4 className="">
          <div className="">
          <Image
            src="./mahstech.png"
            alt="malaysia"
            width="400"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>  
        </card4>
        <card5 className="">
          <div className="">
          <Image
            src="./mhmep.png"
            alt="malaysia"
            width="400"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>  
        </card5>
        
         
        </div>  
      </div>
            </div>
            <div className="py-3"></div>
            <div className="space-y-10">
            <div className="flex justify-center">
          <Image
            className=""
            src="./wbl5.png"
            alt="wbl5"
            width="1000"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="flex justify-center">
          <Image
            className=""
            src="./wbl6.png"
            alt="wbl6"
            width="1000"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          </div>
          <div className="py-4 flex justify-center">
          <video
            controls
            autoPlay  // Add this attribute for autoplay
            className=""
            width="1000"
            height="10"
            style={{
              objectFit:"contain",}}
          >
            <source src="videowbl.mp4" type="video/mp4" />
          </video>
          </div>
          <div className="lg:hidden flex justify-center">
            <iframe
              width="1000"
              height="250" // Adjust height as needed
              src="https://www.youtube.com/embed/dJ1v9E-FNUQ"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="hidden lg:block">
          <div className="flex justify-center">
            <iframe
              width="1000"
              height="550" // Adjust height as needed
              src="https://www.youtube.com/embed/dJ1v9E-FNUQ"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          </div>
          <div className="py-8"></div>
          <div className="p-4  lg:flex justify-center  ">
          <div className="lg:w-1/3 ">
          <form className="bg-slate-600 w-full p-6 border space-y-5 rounded-lg shadow-xl" onSubmit={(e) => Submit(e)}>
      <div className="py-3 text-white">
             <h>Borang YEG Academy Work Based Learning (WBL) </h>
         </div>
         
            <div className=" grid space-y-4">
      <div className="grid rounded-md space-y-1 ">
        <h className="text-white">Nama Pelajar (Lepasan Pelajar)</h>
      <input className="px-3 py-2 hover:shadow-md duration-500 rounded-md " placeholder="Nama Pelajar" name="Name" type="text" />
      </div>
          <div className="grid space-y-1">
          <h className="text-white">Nombor Telefon </h>
          <input className="px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="Nombor Telefon Pelajar " name="NumberPhone" type="text" />
          </div>
          </div>

          <div className="grid space-y-4">

      <div className="grid rounded-md space-y-1 ">
        <h className="text-white">Email</h>
      <input className="px-3 py-2 hover:shadow-md duration-500 rounded-md " 
        placeholder="Email" 
        name="Email" 
        type="text" />
      </div>

          <div className="grid space-y-1">
          <h className="text-white">Umur</h>
          <input className="px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="Umur" name="Age" type="text" />
          </div>
          </div>
          
          <div>
          <div className="relative inline-block text-left">
            <div className="text-white">Pilihan Program Diploma, Kerjaya atau Work Based Learning (WBL)</div>
      <button
        onClick={toggleDropdown} 
        name="Program"
        type="button"
        className="bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
      >
        {selectedItem ? selectedItem : "Select Programs"}
      </button>

      {isOpen && (
        <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
        
          <p
            className="px-4 text-md py-2 cursor-pointer bg-yellow-500 font-bold"
          >
            Work Based Learning
          </p>
          <div className="pl-6 text-sm bg-yellow-500">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick(" DIPLOMA PENGURUSAN HAJI & UMRAH (DHUMY-WBL)")}
          >
            DIPLOMA PENGURUSAN HAJI & UMRAH (DHUMY-WBL) 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN PERHOTELAN (DHM-WBL)")}
          >
            DIPLOMA PENGURUSAN PERHOTELAN (DHM-WBL)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA SENI KULINARI (DCA-WBL)")}
          >
            DIPLOMA SENI KULINARI (DCA-WBL)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENDIDIKAN AWAL KANAK-KANAK (DEC-WBL)")}
          >
            DIPLOMA PENDIDIKAN AWAL KANAK-KANAK (DEC-WBL)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN KARGO UDARA (DACM-WBL)")}
          >
            DIPLOMA PENGURUSAN KARGO UDARA (DACM-WBL)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN OPERASI PENERBANGAN (DAOM-WBL)")}
          >
            DIPLOMA PENGURUSAN OPERASI PENERBANGAN (DAOM-WBL)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA TEKNOLOGI PEMBAIKAN STRUKTUR PESAWAT - KEPINGAN LOGAM (DASM-WBL)")}
          >
            DIPLOMA TEKNOLOGI PEMBAIKAN STRUKTUR PESAWAT - KEPINGAN LOGAM (DASM-WBL)
          </p>
          </div>


          <p className="px-4 text-md font-bold py-2 hover:bg-gray-200 bg-slate-600"  >
            Diploma Kovensional
          </p>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN HAJI & UMRAH (DHUMY)")}
          >
            DIPLOMA PENGURUSAN HAJI & UMRAH (DHUMY) 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN PERHOTELAN (DHM)")}
          >
            DIPLOMA PENGURUSAN PERHOTELAN (DHM)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA KEJURURAWATAN (DNUR)")}
          >
            DIPLOMA KEJURURAWATAN (DNUR)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGUATKUASA UNDANG-UNDANG (DLE)")}
          >
            DIPLOMA PENGUATKUASA UNDANG-UNDANG (DLE)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN KARGO UDARA (DACM)")}
          >
            DIPLOMA PENGURUSAN KARGO UDARA (DACM)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN OPERASI PENERBANGAN (DAOM)")}
          >
            DIPLOMA PENGURUSAN OPERASI PENERBANGAN (DAOM)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA AIRCRAFT MAINTAINANCE TECHNOLOGY (DAMT")}
          >
            DIPLOMA AIRCRAFT MAINTAINANCE TECHNOLOGY (DAMT)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("SIJIL KEMAHIRAN MALAYSIA OPERASI PENYELENGGARAAN PESAWAT (AMT)")}
          >
            SIJIL KEMAHIRAN MALAYSIA OPERASI PENYELENGGARAAN PESAWAT (AMT)
          </p>
          </div>

        </div>
      )}
    </div>     
    </div>


          <div className="grid space-y-1">
          <h className="text-white">Nama Penjaga</h>
          <input className="px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="Nama Penjaga" name="ParentName" type="text" />
          </div>

          <div className="grid space-y-1 text-white">
          <h>Nombor Telefon Penjaga</h>
          <input className="text-black px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="Nombor Penjaga" name="ParentNumber"  type="text" />
          </div>


          <div className="grid  text-left">
        <p className="py-1 text-white">Negeri</p>
      <button
        onClick={toggleDropdown1} 
        name="Negeri"
        type="button"
        className="bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full px-8 py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
      >
        {selectedItem1 ? selectedItem1 : "Select State"}
      </button>

      {isOpen1 && (
        <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
 
          <div className=" text-sm bg-yellow-500">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Johor")}
          >
            Johor
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Kedah")}
          >
            Kedah
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Kelantan")}
          >
            Kelantan
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Kuala Lumpur")}
          >
            Kuala Lumpur
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Labuan")}
          >
            Labuan
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Melaka")}
          >
            Melaka
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Negeri Sembilan")}
          >
            Negeri Sembilan
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Pahang")}
          >
            Pahang
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Perak")}
          >
            Perak
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Perlis")}
          >
            Perlis
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Pulau Pinang")}
          >
            Pulau Pinang
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Putrajaya")}
          >
            Putrajaya
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Sabah")}
          >
            Sabah
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Serawak")}
          >
            Serawak
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Selangor")}
          >
            Selangor
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Terengganu")}
          >
            Terengganu
          </p>
          </div>     
        </div>
      )}
    </div>

    <div className="pt-4">
    <button className="px-6 py-2 border rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-md duration-300" name="Submit" type="submit" >Submit</button>
    </div>
  
        </form>
        </div>
        </div>
        

        {emailError && (
        <div className="alert">
          {emailError}
        </div>
      )}

      {alertMessage && (
        <div className="alert">
          {alertMessage}
        </div>
        )}


          
          
      

          <div className="py-14"></div>
          <div className=" flex justify-center">
          <Image
            className="w-full"
            src="./wbl7.png"
            alt="wbl7"
            width="100"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          


    </main>
  );
}

