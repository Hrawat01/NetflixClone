import Hero from "../component/section/Hero";
import Rows from "../component/section/Rows";
import Header from "../component/header/Header";
import { Link } from "react-router-dom";

const MainLook = ({data}) => {
 let token = localStorage.getItem("token");


  return (
    // checking the token
    (token=="abc@123") ? <div className="bg-black text-white h-[100%] w-[99vw] flex flex-col overflow-hidden">  
      <Header data={data} />
      <Hero data={data} />

      {/* rows */}
      <Rows data={data} title={"All Shows"} />

      <Rows
        data={data.filter((show) => show.rating?.average >= 8.0)}
        title={"Top Rated"}
      />

      <Rows
        data={data.filter((show) => show.genres.includes("Action"))}
        title={"Action"}
      />

      <Rows
        data={data.filter((show) => show.genres.includes("Drama"))}
        title={"Drama"}
      />

      <Rows
        data={data.filter((show) => show.genres.includes("Comedy"))}
        title={"Comedy"}
      />

      <Rows
        data={data.filter((show) => show.genres.includes("Science-Fiction"))}
        title={"Science-Fiction"}
      />

      <Rows
        data={data.filter((show) => show.genres.includes("Thriller"))}
        title={"Thriller"}
      />


    </div> : <div>Firstly Login your account</div>
  );
};

export default MainLook;
