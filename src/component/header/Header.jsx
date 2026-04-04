import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.q.value);
    const query = e.target.elements.q.value;
    navigate(`/search?q=${query}`);
  };

  return (
    <nav className="fixed h-auto md:h-[75px] py-4 md:py-0 w-full flex flex-wrap justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
      <img
        className="h-[40px] md:h-[65px] w-auto ml-4 md:ml-[100px]"
        src="imgi_2_Netflix_Logo_PMS.png"
        alt=""
      />

         {/* only visible when we are in search page */}
        {location.pathname == "/search" ? (
          <>
            {/* home icon */}
            <button
              onClick={() => {
                navigate("/mainlook");
              }}
              className="absolute left-6 ml-3 mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#D9232E"
                className="md:h-[44px] md:w-[37px]"
              >
                <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
              </svg>
            </button>
          </>
        ) : null}




      {/* Search */}
      {(location.pathname == "/mainlook" || location.pathname == "/search") && (
        <form onSubmit={handleSubmit} className="flex items-center mt-2 md:mt-0 px-4 md:px-0 order-3 md:order-2 w-full md:w-auto">
          <input
            className="bg-black/50 border border-gray-200 rounded-2xl text-lg md:text-2xl text-white p-2 h-[40px] md:h-[5vh] flex-grow md:w-[27vw] mr-2 md:mr-5"
            type="text"
            placeholder="Search "
            name="q"
          />
          <button className="border border-gray-500 rounded-2xl text-sm md:text-xl text-white px-3 md:px-4 py-1 bg-red-600 whitespace-nowrap">
            Search
          </button>
        </form>
      )}


    

      <div className="mr-4 md:mr-[100px] bg-inherit flex items-center mt-0 md:mt-4 order-2 md:order-3">
        <select
          className="bg-black rounded-[5px] border border-gray-500 h-[35px] md:h-[5vh] w-[100px] md:w-[18vh] text-center text-[12px] md:text-[15px] text-emerald-50"
          name=""
          id=""
        >
          <option value="">
            English
          </option>
          <option value="">
            Hindi
          </option>
        </select>

       
       


  {/* logout */}
        {(location.pathname == "/mainlook" ||
          location.pathname == "/search") && (
          <>
            <button
              className="text-sm md:text-xl ml-2 md:ml-4 bg-red-800 px-3 md:px-4 h-[35px] md:h-[5vh] rounded-2xl flex items-center justify-center whitespace-nowrap"
              onClick={() => {
                localStorage.removeItem("token"); //remove the tokens in localStorage
                navigate("/");
              }}
            >
              Logout
            </button>
          </>
        )}

        {/* hide when we are in signIn page */}

        {location.pathname == "/" && (
          <Link
            className="rounded-[5px] border border-gray-500 h-[35px] md:h-[5vh] w-auto px-4 ml-2 md:ml-[5px] bg-red-600 text-[12px] md:text-[13px] flex items-center justify-center text-white"
            to={"/signin"}
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
