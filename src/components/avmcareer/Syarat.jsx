import React from 'react'

function Syarat() {
  return (
    <>
    <div className="py-4"></div>
    <div className="bg-red-700 text-white py-4">
    <p className="pb-4" style={{color: '#FFFFFF', letterSpacing:'3.5px', fontFamily: '"anton", Sans-serif', fontSize: '23px', textAlign: 'center'}}>Syarat kelayakan</p>
      <div className=" text-center text-lg font-bold">
      <li>Lepasan SPM</li>
      <li>18 tahun to 28 tahun</li>
      <li>Sihat mental & fizikal (Buta warna)</li>
      <li>Tatoo & parut (Jelas)</li>
      <li>Tiada rekod jenayah</li>
    </div>
    </div>
    <div className="py-4"></div>    
    </>
  )
}

export default Syarat