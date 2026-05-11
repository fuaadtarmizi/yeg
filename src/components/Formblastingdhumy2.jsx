"use client"
import React, { useState } from 'react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);

  const [alertMessage, setAlertMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // ✅ FIX 1: All toggle/handler functions moved OUTSIDE Submit() to component scope
  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const handleItemClick2 = (item) => {
    setSelectedItem2(item);
    setIsOpen2(false);
  };

  function Submit(e) {
    e.preventDefault();

    // ✅ FIX 2: Validate dropdowns before submitting
    if (!selectedItem) {
      alert('Sila pilih program terlebih dahulu.');
      return;
    }
    if (!selectedItem2) {
      alert('Sila pilih negeri terlebih dahulu.');
      return;
    }

    const emailValue = e.target.elements.Email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      setEmailError('Email must be in a valid format.');
      alert('Email is incorrect!');
      return;
    }

    // Send form-encoded data so Apps Script can read e.parameter
   const formEl = e.target.elements;

const params = new URLSearchParams();
params.append('Name', formEl.Name.value);
params.append('NumberPhone', formEl.NumberPhone.value);
params.append('Email', formEl.Email.value);
params.append('Age', formEl.Age.value);
params.append('ParentName', formEl.ParentName.value);
params.append('ParentNumber', formEl.ParentNumber.value);
params.append('Program', selectedItem);
params.append('State', selectedItem2);


fetch("https://script.google.com/macros/s/AKfycbx1PzONNROiUoCBzinvzXJzTMs-eWo7GDozzTgh2X7kbbX4rbxOiNAyFteM-HbyIlbt/exec", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: params.toString()
})
    
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          setAlertMessage('Form submitted successfully!');
          setShowSuccessModal(true);
        } else {
          setShowErrorModal(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setShowErrorModal(true);
      });
  }

  return (
    <main>
      <div className="bg-white">
        <div className="hidden lg:block">j</div>

        <div className="p-4 lg:flex justify-center">
          <div className="lg:w-1/3">
            <form className="backdrop-blur-lg w-full p-6 border space-y-5 rounded-lg shadow-lg" onSubmit={(e) => Submit(e)}>
              <div className="py-6 text-black text-3xl font-bold">
              </div>

              <div className="grid space-y-4">
                <div className="grid rounded-md space-y-1">
                  {/* ✅ FIX 4: Replaced invalid <h> tags with <label> */}
                  <label className="">Nama Pelajar</label>
                  <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Name" type="text" />
                </div>
                <div className="grid space-y-1">
                  <label>Nombor Telefon Pelajar</label>
                  <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="NumberPhone" type="text" />
                </div>
              </div>

              <div className="grid space-y-4">
                <div className="grid rounded-md space-y-1">
                  <label>Email</label>
                  <input
                    className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md"
                    placeholder=""
                    name="Email"
                    type="text"
                  />
                </div>
                <div className="grid space-y-1">
                  <label>Umur</label>
                  <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Age" type="text" />
                </div>
              </div>

              <div className="relative inline-block text-left">
                <div>Pilihan Program</div>
                <button
                  onClick={toggleDropdown}
                  name="Program"
                  type="button"
                  className="bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full py-2 text-sm font-medium text-black border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
                >
                  {selectedItem ? selectedItem : "Select Program"}
                </button>

                {isOpen && (
                  <div className="w-full right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5">

                    <div className="pl-6 text-sm bg-white">
                      <p
                        className="px-4 py-2 cursor-pointer hover:bg-white-400 rounded-md"
                        onClick={() => handleItemClick("Diploma + Degree")}
                      >
                        DIPLOMA + DEGREE PENGURUSAN HAJI & UMRAH (MQA/FA 11377 | MQA /PA 18797)
                      </p>
                    </div>

                    <div className="pl-6 text-sm bg-slate-600 text-white">
                      <p
                        className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
                        onClick={() => handleItemClick("Sijil Profesional")}
                      >
                        Sijil Profesional Pengurusan Haji & Umrah (SPHU) (MQA/PA 18798)
                      </p>
                    </div>

                    <div className="pl-6 text-sm bg-white-400">
                      <p
                        className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded-md"
                        onClick={() => handleItemClick("Master")}
                      >
                        IJAZAH PENGURUSAN HAJI & UMRAH (MQA/PA 18799)
                      </p>
                    </div>

                    <div className="pl-6 text-sm bg-white">
                      <p
                        className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded-md"
                        onClick={() => handleItemClick("PhD")}
                      >
                        PhD PENGURUSAN HAJI & UMRAH (MQA/PA 18800)
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid space-y-1">
                <label>Nama Penjaga</label>
                <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="ParentName" type="text" />
              </div>

              <div className="grid space-y-1">
                <label>Nombor Penjaga</label>
                <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="ParentNumber" type="text" />
              </div>

              <div className="grid text-left">
                <p className="py-1 text-white">Negeri</p>
                <button
                  onClick={toggleDropdown2}
                  name="Negeri"
                  type="button"
                  className="bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full px-8 py-2 text-sm font-medium text-black border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
                >
                  {selectedItem2 ? selectedItem2 : "Select State / Country"}
                </button>

                {isOpen2 && (
                  <div className="w-full right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="text-sm bg-yellow-500">
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Johor")}>Johor</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Kedah")}>Kedah</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Kelantan")}>Kelantan</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Kuala Lumpur")}>Kuala Lumpur</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Labuan")}>Labuan</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Melaka")}>Melaka</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Negeri Sembilan")}>Negeri Sembilan</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Pahang")}>Pahang</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Perak")}>Perak</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Perlis")}>Perlis</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Pulau Pinang")}>Pulau Pinang</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Putrajaya")}>Putrajaya</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Sabah")}>Sabah</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Sarawak")}>Sarawak</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Selangor")}>Selangor</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Terengganu")}>Terengganu</p>
                      <div className="bg-slate-800 w-full flex justify-center text-white">International</div>
                      {/* ✅ FIX 5: Singapore and Brunei now correctly pass their own names */}
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Singapore")}>Singapore</p>
                      <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md" onClick={() => handleItemClick2("Brunei")}>Brunei</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <button className="px-6 py-2 border rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-md duration-300" name="Submit" type="submit">Submit</button>
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

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Berjaya!</h2>
            <p className="text-gray-700 mb-4">Penghantaran Berjaya! Pegawai kami akan menghubungi anda secepat mungkin.</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Ralat!</h2>
            <p className="text-gray-700 mb-4">Penghantaran gagal. Sila cuba lagi.</p>
            <button
              onClick={() => setShowErrorModal(false)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
