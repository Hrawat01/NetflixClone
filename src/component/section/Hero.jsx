import React from 'react'
import { useState } from 'react';
import OverLay from '../header/OverLay';

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
        src={data[randomNumber]?.image?.original}
        alt={data[randomNumber]?.name}
          className="h-[560px] w-[100%] object-cover z-1 "
        />
      )}






{/* hero-inner summary */}

      {data.length > 0 && (
  <div className="absolute left-[14vw] top-[30vh] ">
    <h1 className="text-5xl font-bold mb-4">{data[randomNumber]?.name}</h1>
<h2 
className="text-[15px] flex-wrap flex h-[20%] w-[40%] -tracking-tighter [word-spacing:0.1rem] gap-y-2 gap-x-2 "
    dangerouslySetInnerHTML={{ __html: data[randomNumber]?.summary
       ?.replace(/<[^>]+>/g, "") //for remove the tags to protect from html injection
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
       {data[randomNumber]?.genres?.map((type , idx)=>(
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

<OverLay data={data} id={randomNumber} showOverlay={showOverlay} setShowOverlay={setShowOverlay} />



</div>
  )
}

export default Hero
