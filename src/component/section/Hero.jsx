import React from 'react'
import { useState } from 'react';

const Hero = (props) => {
    const data = props.data ;
    // const randomNumber = Math.floor(Math.random() * 240); it causes the re-render
    // const randomNumber = React.useMemo(() => Math.floor(Math.random() * 240), []); use anyone = usestate or useMemo
    const [randomNumber] = useState(() => Math.floor(Math.random() * 240));
    console.log(randomNumber);


    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div className="flex flex-col items-end mb-5 flex-wrap">
          {/* Hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/90 to-black/100 flex-wrap" />         
       <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/10 to-black/10   flex-wrap" />
       
       
       {/* hero-image */}
      {data.length > 0 && (
        <img
        src={data[randomNumber].image.original}
        alt={data[randomNumber].name}
          className="h-[560px] w-[100%] object-cover z-1 "
        />
      )}






{/* hero-inner summary */}

      {data.length > 0 && (
  <div className="absolute left-[14vw] top-[30vh] ">
    <h1 className="text-5xl font-bold mb-4">{data[randomNumber].name}</h1>
<h2 
className="text-[15px] flex-wrap flex h-[20%] w-[40%] -tracking-tighter [word-spacing:0.1rem] gap-y-2 gap-x-2 "
    dangerouslySetInnerHTML={{ __html: data[randomNumber].summary
       .replace(/<[^>]+>/g, "") //for remove the tags to protect from html injection
        .split(" ") // split into words
        .slice(0,35)  // take first 40 words
        .join(" ")+"..."  // join back and add ellipsis
    }} 
  /> 

  {/* inner action button */}
  <div className="flex mt-4">
  <button className="border text-[15px] bg-white text-black p-2 rounded h-[5vh] w-[5vw] justify-center items-center font-bold mr-3">Play</button>
  <button className="border-gray-100 text-[15px] bg-[#2D2D2F] text-white p-2 rounded h-[5vh] w-[7vw] justify-center items-center font-bold"
   onClick={() => setShowOverlay(true)}>More Info</button>
 </div> 


{/* genres */}
 <div className="text-white">
   {data.length > 0 && (
   <div>
       {data[randomNumber].genres.map((type , idx)=>(
 <button key={idx} className="rounded-2xl h-5 border border-gray-500 text-[10px] m-1 pb-1 pt-1 px-2 text-center text-gray-400">
        {type}
 </button>
))}
   </div>
   )}


 </div>
  </div>
)}




{/* Overlay Page */}

   {showOverlay && (
        <div className="fixed z-10 h-[100%] w-[100%] bg-black bg-opacity-70 flex  justify-center text-black">
          <div className="relative bg-white shadow-lg w-[60%] h-auto rounded-3xl mt-10 mb-10">
            <img
        src={data[randomNumber].image.original}
        alt={data[randomNumber].name}
          className="rounded-3xl h-[100%] w-[100%] object-cover"
        />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/90 to-black rounded-3xl border border-gray-800" /> {/* filter */} 



<div className='absolute top-[40%] left-4 text-4xl font-thin text-white w-[95%] h-auto '> 

  <h2 className='font-bold'>{data[randomNumber].name}</h2>

  <div className='flex text-sm gap-2 mb-7 mt-3 font-thin'>
   <p className="rounded-2xl h-5 w-auto px-2 border border-white/30 text-[12px] text-center text-white backdrop-blur-md bg-white/10"> ⭐ {data[randomNumber].rating.average}</p>
    <p className="rounded-2xl h-5 w-auto px-2 border border-white/30 text-[12px] text-center text-white backdrop-blur-md bg-white/10">{data[randomNumber].premiered}</p>
    <p className="rounded-2xl h-5 w-auto px-2 border border-white/30 text-[12px] text-center text-white backdrop-blur-md bg-white/10">{data[randomNumber].language}</p>
     {data[randomNumber].genres.map((type , idx)=>(
       <button key={idx} className="rounded-2xl h-5 w-auto px-2 border border-white/30 text-[12px] text-center text-white backdrop-blur-md bg-white/10">
        {type}
 </button>
))}

  </div>

  <p className="text-sm mb-5 overflow-y-auto max-h-40 break-words"
 dangerouslySetInnerHTML={{ __html: data[randomNumber].summary}} ></p>

  <div className='text-sm flex  flex-col gap-8'>

    <div className='flex justify-between '>
      <div>
        <div className='text-gray-400'>Network:</div>
        <div>{data[randomNumber].name}</div>
        </div>


      <div>
        <div className='text-gray-400'>Status:</div>
        <div>{data[randomNumber].status}</div>
        </div>


    </div>

    <div className='flex justify-between' >
      <div>
        <div className='text-gray-400'>Runtime:</div>
        <div>{data[randomNumber].runtime} min</div>
        </div>


      {(data[randomNumber].network.officialSite) && (<div>
        <div className='text-gray-400'>Site:</div>
        <a className='text-red-400 hover:text-red-300 font-bold' href={data[randomNumber].network.officialSite} target="_blank" rel="noopener noreferrer">{data[randomNumber].network.officialSite}</a>
        </div>)}


    </div>
  </div>

</div>

{/* cross btn */}
            <button
              onClick={() => setShowOverlay(false)}
              className=" absolute mt-4 p-2 bg-gray-600 rounded-3xl text-xl top-0 right-5" >
              <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
          </div>
        </div>
      )}



</div>
  )
}

export default Hero
