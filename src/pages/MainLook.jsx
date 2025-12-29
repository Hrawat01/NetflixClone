import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../component/section/Hero";
import Rows from "../component/section/Rows";
import Header from "../component/header/Header";

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

 <Header />
<Hero data = {data} />










      {/* rows */}
    <Rows data={data} title={"All Shows"} />
     <Rows data={data.filter(show => show.rating?.average >= 8.0)} title={"Top Rated"} />
      <Rows data={data.filter(show => show.genres.includes("Action"))} title={"Action"} />
      <Rows data={data.filter(show => show.genres.includes("Drama"))} title={"Drama"} />
      <Rows data={data.filter(show => show.genres.includes("Comedy"))} title={"Comedy"} />
      <Rows data={data.filter(show => show.genres.includes("Science-Fiction"))} title={"Science-Fiction"} />
      <Rows data={data.filter(show => show.genres.includes("Thriller"))} title={"Thriller"} />



      
    </div>
  );
};

export default MainLook;
