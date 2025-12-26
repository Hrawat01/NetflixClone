import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../component/section/Hero";

const MainLook = () => {
  //   api
  const [data, setData] = useState([]);
  const API_BASE = "https://api.tvmaze.com";

  const getData = async () => {
    const response = await axios.get(`${API_BASE}/shows?page=0`);
    // setData(response.data.splice(0,10));   
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <div className="bg-black text-white h-[100%] w-[99vw] flex flex-col overflow-hidden">






<Hero data = {data} />










      {/* rows */}
      <div className="flex flex-col items-center relative">
      <h2 className="text-xl font-bold">Trending Now </h2>
          {/* <p className="text-xl">{data[0].name}</p> */}

        <div className="overflow-x-auto w-[73%] ">
          <ul className="flex flex-row ">
            {data.map((show) => (
              <li key={show.id} className="flex-shrink-0 p-2 ">
                <img
                  src={show.image.medium}
                  alt={show.name}
                  className="h-[260px] w-[170px] object-fill hover:object-none rounded-xl"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLook;
