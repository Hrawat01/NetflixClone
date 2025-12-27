import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../component/section/Hero";
import Rows from "../component/section/Rows";

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
     <Rows data={data} title={"All Shows"} />
     <Rows data={data} title={"Top Rated"} />
     <Rows data={data} title={"Action"} />
     <Rows data={data} title={"Drama"} />
     <Rows data={data} title={"Comedy"} />
     <Rows data={data} title={"Science-Friction"} />
     <Rows data={data} title={"Thriller"} />



      
    </div>
  );
};

export default MainLook;
