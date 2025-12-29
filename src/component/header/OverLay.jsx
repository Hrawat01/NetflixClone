import React from 'react'

const OverLay = ({data,id,showOverlay, setShowOverlay }) => {
  return (
   <>
      {showOverlay && (
        <div className="fixed z-20 h-[100%] w-[100%] bg-black bg-opacity-70 flex  justify-center text-black">
          <div className="relative bg-white shadow-lg w-[60%] h-auto rounded-3xl mt-10 mb-10">
            <img
        src={data[id].image.original}
        alt={data[id].name}
          className="rounded-3xl h-[100%] w-[100%] object-cover"
        />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/90 to-black rounded-3xl border border-gray-800" /> {/* filter */} 



<div className='absolute top-[40%] left-4 text-4xl font-thin text-white w-[95%] h-auto '> 

  <h2 className='font-bold'>{data[id].name}</h2>

  <div className='flex text-sm gap-2 mb-7 mt-3 font-thin'>
   <p className="rounded-2xl h-5 w-auto px-2 border border-white/30 text-[12px] text-center text-white backdrop-blur-md bg-white/10"> ⭐ {data[id].rating.average}</p>
    <p className="rounded-2xl h-5 w-auto px-2 border border-white/30 text-[12px] text-center text-white backdrop-blur-md bg-white/10">{data[id].premiered}</p>
    <p className="rounded-2xl h-5 w-auto px-2 border border-white/30 text-[12px] text-center text-white backdrop-blur-md bg-white/10">{data[id].language}</p>
     {data[id].genres.map((type , idx)=>(
       <button key={idx} className="rounded-2xl h-5 w-auto px-2 border border-white/30 text-[12px] text-center text-white backdrop-blur-md bg-white/10">
        {type}
 </button>
))}

  </div>

  <p className="text-sm mb-5 overflow-y-auto max-h-40 break-words"
 dangerouslySetInnerHTML={{ __html: data[id].summary}} ></p>

  <div className='text-sm flex  flex-col gap-8'>

    <div className='flex justify-between '>
      <div>
        <div className='text-gray-400'>Network:</div>
        <div>{data[id].name}</div>
        </div>


      <div>
        <div className='text-gray-400'>Status:</div>
        <div>{data[id].status}</div>
        </div>


    </div>

    <div className='flex justify-between' >
      <div>
        <div className='text-gray-400'>Runtime:</div>
        <div>{data[id].runtime} min</div>
        </div>


      {(data[id].network.officialSite) && (<div>
        <div className='text-gray-400'>Site:</div>
        <a className='text-red-400 hover:text-red-300 font-bold' href={data[id].network.officialSite} target="_blank" rel="noopener noreferrer">{data[id].network.officialSite}</a>
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
      </>
  )
}

export default OverLay
