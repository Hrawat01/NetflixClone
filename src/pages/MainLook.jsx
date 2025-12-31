import Hero from "../component/section/Hero";
import Rows from "../component/section/Rows";
import Header from "../component/header/Header";
import { useNavigate } from "react-router-dom";


const MainLook = ({data}) => {
const navigate =  useNavigate();
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


    </div>
     :
       <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">
        Need To Login
      </h1>

      <p className="text-gray-600 mb-6">
        Please login to continue
      </p>

      <button
        onClick={()=>{
          navigate('/');
        }}   // you already have navigation
        className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-2xl text-3xl font-bold"
      >
        Go to Login
      </button>
    </div>
  );
};

export default MainLook;
