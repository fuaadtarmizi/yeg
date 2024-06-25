"use client"
import React, { useState, useEffect  } from 'react';


export default function App() {
  const [age, setAge] = useState('');

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem1, setSelectedItem1] = useState("Ads");

    const [alertMessage, setAlertMessage] = useState('');
    const [emailError, setEmailError] = useState('');


    useEffect(() => {
      if (selectedItem1 === 'Whatsup') {
        Submit();
      }
    }, [selectedItem1]);


    const handleChange = (e) => {
      const value = e.target.value;
      if (value === '' || (value >= 18 && value <= 35)) {
        setAge(value);
      }
    };
  

    


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
    formDatab.append("Source", selectedItem1);


    fetch(

      "https://script.google.com/macros/s/AKfycbwJpoVoP3w0qrCX111QUwNbrbDUFZeNFYuFKEzayfHssaEy4sUpvb_PN0I4brKlWXvT/exec",
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
    


  return (
    <main>
    <div className="bg-white">
    <div className=" hidden lg:block"></div>
        <div className="p-4  lg:flex justify-center  ">     
      <div className="lg:w-1/3 ">
      <form className=" backdrop-blur-lg w-full p-6 border space-y-5 rounded-lg shadow-lg" onSubmit={(e) => Submit(e)}>
      <div className="py-6 text-black text-3xl font-bold">
             <h>Borang Pertanyaan</h>
         </div>
            <div className=" grid space-y-4">
      <div className="grid rounded-md space-y-1 ">
        <h className="">Nama</h>
      <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md " placeholder="" name="Name" type="text" />
      </div>
          <div className="grid space-y-1">
          <h>Nombor Telefon </h>
          <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="NumberPhone" type="text" />
          </div>
          </div>

          <div className="grid space-y-4">

      <div className="grid rounded-md space-y-1 ">
        <h>Email</h>
      <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md " 
        placeholder="" 
        name="Email" 
        type="text" />
      </div>

          <div className="grid space-y-1">
          <h>Umur</h>
          <input
                    className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md"
                    placeholder=""
                    name="Age"
                    type="number"
                    value={age}
                    onChange={handleChange}
                    min="18"
                    max="35"
                  />
          </div>
          </div>

         
          {/* <div className="grid space-y-1">
          <h>Nama Penjaga</h>
          <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="ParentName" type="text" />
          </div>

          <div className="grid space-y-1">
          <h>Nombor Penjaga</h>
          <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="ParentNumber"  type="text" />
          </div> */}

          
    <div className="pt-4">
    <button className="px-6 py-2 border rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-md duration-300" name="Submit" type="submit" >Submit</button>
    </div>
        </form>
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
    </div>
    </div> 
    </div>
    
   
    </main>
  );
}















