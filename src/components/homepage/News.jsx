import React from 'react'
import Image from 'next/image'

// --- 1. DATA DEFINITIONS (REQUIRED FOR THE APP COMPONENT TO WORK) ---

const newsItems = [
    // Previously commented-out items (Cards 1, 2, 4)
   
    {
        id: 4,
        title: "YEG ACADEMY, IUC KERJASAMA PERKENAL PROGRAM SARJANA MUDA PENGURUSAN HAJI DAN UMRAH, PENERBANGAN - MALAYSIAGAZETTE",
        date: "DECEMBER 17, 2024",
        imageUrl: "/newss8.jpeg",
        link: "https://malaysiagazette.com/2024/12/17/yeg-academy-uic-kerjasama-perkenal-program-sarjana-muda-pengurusan-haji-dan-umrah/",
    },
    // Items from the active JSX (Cards 5, 6, 8)
    {
        id: 5,
        title: "PELUANG KERJAYA CERAH BIDANG TVET MARITIM - KOSMO",
        date: "JANUARY 8, 2024",
        imageUrl: "/newss9.jpg",
        link: "https://www.kosmo.com.my/2023/12/25/peluang-kerjaya-cerah-bidang-tvet-maritim/",
    },
    {
        id: 6,
        title: "YEG ACADEMY SASAR 3,000 LEPASAN SPM SERTAI WBL - KOSMO",
        date: "JANUARI 18, 2024",
        imageUrl: "/newss11.jpg",
        link: "https://www.kosmo.com.my/2024/01/19/yeg-academy-sasar-3000-lepasan-spm-sertai-wbl/",
    },
    {
        id: 7,
        title:"YEG ACADEMY: A CAREER BUILDING PLATFOR IN THE FIELD - GOOD NEWS",
        date: "MARCH 2, 2023",
        imageUrl: "/newss5.jpg",
        link: "https://www.goodnews.com.my/story/yeg-academy-a-career-building-platform-in-the-field-of-aviation/",
    },
];

const carouselData = {
  slides: [
    { 
      id: 1, 
      index: 0, // This is useful for dot navigation (index 0 corresponds to dot 1)
      title: "Selangor Aerospace Summir 2025", 
      date: "OCT 9, 2025", 
      imageUrl: "aerospace01.png", 
      link: "https://www.instagram.com/p/DPoI_3LEamF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
    },
    { 
      id: 2, 
      index: 1, 
      title: "LIMA 2025", 
      date: "DEC 1, 2024", 
      imageUrl: ["Lima01.jpg" ],
      link: "https://www.instagram.com/reel/DJ4Rks4pfSj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
    },
    { 
      id: 3, 
      index: 2, 
      title: "Majlis Mutawwif Profesional 4.0", 
      date: "DEC 15, 2024", 
      imageUrl: "mmp01.jpg", 
      link: "https://www.instagram.com/p/DKTop14Tt4P/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
    },
  ],
  // You might also include metadata like the currently active slide index
  activeIndex: 0 
};


// --- 2. INTRO COMPONENT (NOW EMPTY, BUT WILL CALL APP) ---
// The original Intro JSX is kept below, but contained within a function to prevent immediate return.

function Intro() {
    
    // START OF ORIGINAL INTRO JSX CONTENT - CONVERTED TO A VARIABLE AND WILL BE IGNORED
    const oldIntroContent = (
        <section12>
          <div className="w-full h-full px-4 lg:px-28 ">
            <div className="w-full h-full grid justify-center space-y-2 py-4">
            <h className="font-semibold text-lg text-center text-yellow-600">WHAT'S ON</h>
              <h className="font-bold font-sans text-6xl text-slate-700">YEG NEWS & EVENTS</h>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto border border-gray-100">

         
          </div>
            {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-md">
            // ... (rest of commented cards)
            </div>*/}
            
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 py-3 rounded-md">
            <card5 className=" transition w-full h-full flex justify-center  items-center rounded-md hover:shadow-xl group" style={{ backgroundImage: 'url("/newss9.jpg")', backgroundSize: 'cover', backgroundPosition: 'fit' }}>
              <div className="py-44 ">
              </div>
              <div className="h-full grid items-end ">
                <a href="https://www.kosmo.com.my/2023/12/25/peluang-kerjaya-cerah-bidang-tvet-maritim/"
                className="text-left group-hover:bg-white p-2 group-hover:-translate-y-3 transition duration-500">
                <h className="text-yellow-500 font-semibold grid ">JANUARY 8,2024</h>
                <h className="text-slate-800 font-semibold ">PELUANG KERJAYA CERAH BIDANG TVET MARITIM - KOSMO</h>
                </a>
                </div>
            </card5>
            <card6 className=" transition w-full h-full flex justify-center items-center rounded-md hover:shadow-xl group" style={{ backgroundImage: 'url("/newss11.jpg")', backgroundSize: 'cover', backgroundPosition: 'fit' }}>
              <div className="py-44 ">
              </div>
              <div className="h-full grid items-end ">
                <a href="https://www.kosmo.com.my/2024/01/19/yeg-academy-sasar-3000-lepasan-spm-sertai-wbl/"
                className="text-left group-hover:bg-white p-2 group-hover:-translate-y-3 transition duration-500">
                <h className="text-yellow-500 font-semibold grid ">JANUARI 18,2024</h>
                <h className="text-slate-800 font-semibold ">YEG ACADEMY SASAR 3,000 LEPASAN SPM SERTAI WBL - KOSMO</h>
                </a>
                </div>
            </card6>
            <card3 className=" transition w-full h-full flex justify-center  items-center rounded-md hover:shadow-xl group" style={{ backgroundImage: 'url("/newss10.jpg")', backgroundSize: 'cover', backgroundPosition: 'fit' }}>
              <div className="py-44 ">
              </div>
              <div className="h-full grid items-end ">
                <a href="https://www.utusan.com.my/nasional/2023/03/misa-renaco-marine-jalin-kerjasama-lahir-tenaga-mahir/"
                className="text-left group-hover:bg-white p-2 group-hover:-translate-y-3 transition duration-500 ">
                <h className="text-yellow-500 font-semibold grid ">MARCH 13,2023</h>
                <h className="text-slate-800 font-semibold ">MISA, RANACO MARINE JALIN KERJASAMA LAHIR TENAGA MAHIR MISA - UTUSAN MALAYSIA</h>
                </a>
                </div>
            </card3>
            <card8 className=" transition w-full h-full flex justify-center  items-center rounded-md hover:shadow-xl group" style={{ backgroundImage: 'url("/newss8.jpeg")', backgroundSize: 'cover', backgroundPosition: 'fit' }}>
              <div className="py-44">
              </div>
              <div className="h-full grid items-end ">
                <a href= "https://malaysiagazette.com/2024/12/17/yeg-academy-uic-kerjasama-perkenal-program-sarjana-muda-pengurusan-haji-dan-umrah/"
                className="text-left group-hover:bg-white p-2 group-hover:-translate-y-3 transition duration-500">
                <h className="text-yellow-500 font-semibold grid ">DECEMBER 17,2024</h>
                <h className="text-slate-800 font-semibold ">YEG ACADEMY, IUC KERJASAMA PERKENAL PROGRAM SARJANA MUDA PENGURUSAN HAJI DAN UMRAH, PENERBANGAN - MalaysiaGazette</h>
                </a>
                </div>
            </card8>
            </div>
          </div>
        </section12>
    );
    // END OF ORIGINAL INTRO JSX CONTENT
    
    // The original return statement is removed, and replaced with the App component call.

    // --- 3. REUSABLE COMPONENT: NEWS CARD (Must be defined before App) ---
    const NewsCard = ({ title, date, imageUrl,link }) => {
      return (
        <article
          className="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl group transition-all duration-500 bg-gray-200 cursor-pointer"
          style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Dark overlay for contrast, fades slightly on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-500"></div>

          {/* Content container aligned to the bottom (items-end) */}
          <div className="h-full grid items-end p-4">
            {/* Link container with background and translate lift on hover */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-left p-3 transition duration-500 transform translate-y-0 group-hover:-translate-y-3 group-hover:bg-white rounded-md block w-full shadow-lg"
            >
              {/* Date (Yellow text) */}
              <p className="text-yellow-400 font-semibold text-xs mb-1 uppercase leading-none group-hover:text-yellow-600 transition-colors duration-300">
                {date}
              </p>
              {/* Title (White text, Slate on hover) */}
              <h3 className="text-white font-bold text-sm leading-snug group-hover:text-slate-800 transition-colors duration-300">
                {title}
              </h3>
            </a>
          </div>
        
        </article>
         
      );
   

    };

    // --- 4. REUSABLE COMPONENT: EVENT CARD (Must be defined before App) ---
    const EventCard = ({ title, date, imageUrl, imageUrl1, link }) => {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <article
              className="relative w-full aspect-[100%/3] overflow-hidden rounded-xl shadow-xl group transition-all duration-500 bg-gray-200 cursor-pointer"
              style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-500"></div>

              {/* Content container aligned to the bottom-left */}
              <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
                {/* Date (Yellow text) */}
                <p className="text-sm font-semibold text-yellow-300 mb-1 uppercase tracking-wide">
                  {date}
                </p>
                {/* Title (White text) */}
                <h3 className="text-xl font-bold leading-snug drop-shadow-md">
                  {title}
                </h3>
                {/* Call to action (lifted on hover) */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <span className="inline-block px-4 py-1 text-xs font-bold text-slate-900 bg-yellow-400 rounded-full shadow-md">
                        View Details
                    </span>
                </div>
              </div>
            </article>
        </a>
      );
    };


    // --- 5. MAIN APP COMPONENT (Must be defined before its final use) ---
    const App = () => {
      return (
        <section className="font-sans bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-inner">
          {/* Header Section */}
          <div className="w-full max-w-7xl mx-auto">
            <div className="w-full grid justify-items-center space-y-2 py-4 text-center">
              <h3 className="font-semibold text-lg text-yellow-600 uppercase tracking-widest">WHAT'S ON</h3>
              <h2 className="font-extrabold text-4xl sm:text-6xl text-slate-800 tracking-tight">YEG NEWS & EVENTS</h2>
            </div>
          </div>

          {/* LATEST NEWS ARTICLES Grid */}
          <div className="max-w-7xl mx-auto mt-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-yellow-500 inline-block pb-1">NEWS ARTICLES</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-3">
              {newsItems.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  imageUrl={item.imageUrl}
                  link={item.link}
                />
              ))}
            </div>
          </div>

          {/* UPCOMING EVENTS Slider (Responsive Scrollable List) */}
          <div className="max-w-7xl mx-auto mt-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-yellow-500 inline-block pb-1">EVENTS</h3>

            <div className="relative">
                {/* Custom CSS to hide the scrollbar for a cleaner look */}
                <style jsx="true">{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none; /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
                `}</style>

                {/* The inner flex container enables horizontal scrolling/swiping */}
                <div className="flex overflow-x-scroll snap-x snap-mandatory space-x-6 pb-4 scrollbar-hide">
                    {carouselData.slides.map((item) => (
                        // Responsive width for 1, 2, or 3 cards visible at a time
                        <div
                            key={item.id}
                            id={`event-${item.id}`} // Used for snap targets
                            className="w-[90%] sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.3333%-1rem)] flex-shrink-0 snap-start"
                        >
                            <EventCard
                                title={item.title}
                                date={item.date}
                                imageUrl={item.imageUrl}
                                link={item.link}
                            />
                        </div>
                    ))}
                    {/* Dummy div to provide final padding/gap */}
                    <div className="flex-shrink-0 w-0.5"></div>
                </div>
            </div>

             
            
          </div>
    
        </section>
      );
    };

    // THIS IS THE FINAL RETURN OF THE INTRO FUNCTION, WHICH RENDERS THE APP COMPONENT
    return <App />;
}

// The original export remains unchanged
export default Intro