import React, { useState } from 'react'
import OverLay from '../header/OverLay'

const Rows = ({data,title}) => {
  const [showOverlay, setShowOverlay] = useState(false);
 const [selectedIndex, setSelectedIndex] = useState(null);


  return (
   <>
    <h2 className="relative text-xl font-bold ml-[14vw]">{title} </h2>
      <div className="flex flex-col items-center relative mb-10 "  >
       
          {/* <p className="text-xl">{data[0].name}</p> */}

           
        <div className="overflow-x-auto w-[73%] scrollbar-hide ">
          <ul className="flex flex-row ">
            {data.map((show,idx) => (
              <li key={idx} className="flex-shrink-0 p-2 " onClick={()=>{
                setShowOverlay(true);
                setSelectedIndex(idx);
                console.log(idx);
            }}>
              
                <img
                  src={show.image?.medium}
                  alt={show.name}
                  className="h-[260px] w-[170px] object-fill hover:object-none rounded-xl"
                  />
                <div className="text-sm font-bold ">{show.name}</div>
                <div className="text-[12px] font-thin "> ⭐{show.rating?.average}</div>
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
