import React, { useState } from 'react'
import OverLay from '../header/OverLay'

const Rows = ({data,title}) => {
  const [showOverlay, setShowOverlay] = useState(false);
 const [selectedIndex, setSelectedIndex] = useState(null);


  return (
   <>
    <h2 className="relative text-lg md:text-xl font-bold ml-4 md:ml-[14vw] mt-4 md:mt-0">{title} </h2>
      <div className="flex flex-col items-center relative mb-6 md:mb-10 "  >
       
          {/* <p className="text-xl">{data[0].name}</p> */}

           
        <div className="overflow-x-auto w-[95%] md:w-[73%] scrollbar-hide ">
          <ul className="flex flex-row ">
            {data.map((show,idx) => (
              <li key={idx} className="flex-shrink-0 p-2 cursor-pointer " onClick={()=>{
                setShowOverlay(true);
                setSelectedIndex(idx);
                console.log(idx);
            }}>
              
                <img
                  src={show.image?.medium}
                  alt={show.name}
                  className="h-[180px] md:h-[260px] w-[120px] md:w-[170px] object-cover rounded-xl"
                  />
                <div className="text-[10px] md:text-sm font-bold truncate w-[120px] md:w-[170px]">{show.name}</div>
                <div className="text-[10px] md:text-[12px] font-thin "> ⭐{show.rating?.average}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>


  
            {showOverlay &&  selectedIndex !== null && <OverLay data={data} id={selectedIndex} showOverlay={showOverlay} setShowOverlay={setShowOverlay} />}
   </>
  )
}

export default Rows
