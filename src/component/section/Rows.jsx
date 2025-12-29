import React, { useState } from 'react'
import OverLay from '../header/OverLay'

const Rows = ({data,title,all}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlay, setOverlay] = useState(null)

  return (
   <>
    <h2 className="relative text-xl font-bold ml-[14vw]">{title} </h2>
      <div className="flex flex-col items-center relative mb-10 "  >
       
          {/* <p className="text-xl">{data[0].name}</p> */}

        <div className="overflow-x-auto w-[73%] scrollbar-hide ">
          <ul className="flex flex-row ">
            {data.map((show) => (
              <li key={show.id} className="flex-shrink-0 p-2 " onClick={()=>{
                console.log(show.id);
              setShowOverlay(true);
              setOverlay(show.id);
            }}>
              
                <img
                  src={show.image.medium}
                  alt={show.name}
                  className="h-[260px] w-[170px] object-fill hover:object-none rounded-xl"
                  />
                <div className="text-sm font-bold ">{show.name}</div>
                <div className="text-[12px] font-thin "> ⭐{show.rating.average}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>


  
      {showOverlay &&  overlay !== null && <OverLay data={all} id={overlay} showOverlay={showOverlay} setShowOverlay={setShowOverlay} setOverlay={setOverlay}/>}
   </>
  )
}

export default Rows
