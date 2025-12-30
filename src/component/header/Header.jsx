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
    <nav className="fixed h-[75px] w-full  flex  flex-wrap justify-between items-center z-20 ">
      <img
        className="h-[65px] w-[155px] ml-[100px]"
        src="imgi_2_Netflix_Logo_PMS.png"
        alt=""
      />

      {/* Search */}
      {(location.pathname == "/mainlook" || location.pathname == "/search") && (
        <form onSubmit={handleSubmit}>
          <input
            className="bg-transparent border border-gray-200  rounded-2xl text-2xl text-white p-2 h-[5vh] w-[27vw] mr-5 "
            type="text"
            placeholder="Search "
            name="q"
          />
          <button className="border border-gray-500  rounded-2xl text-xl text-white px-4 py-1 bg-red-600">
            Search
          </button>
        </form>
      )}

      <div className="mr-[100px] bg-inherit flex-wrap flex  items-center mt-4">
        <select
          className="bg-inherit rounded-[5px] border border-gray-500 h-[5vh] w-[18vh] text-center bg-black text-[15px] text-emerald-50 "
          name=""
          id=""
        >
          <option className=" bg-black" value="">
            {" "}
            English
          </option>
          <option className=" bg-black" value="">
            Hindi
          </option>
        </select>

        {/* only visible when we are in search page */}
        {location.pathname == "/search" ? (
          <button
            onClick={() => {
              navigate("/mainlook");
            }}
            className="text-xl ml-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="44px"
              viewBox="0 -960 960 960"
              width="35px"
              fill="#D9232E"
            >
              <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
            </svg>
          </button>
        ) : null}

        {/* hide when we are in signIn page */}

        {location.pathname == "/" && (
          <Link
            className="rounded-[5px] border border-gray-500 h-[25vh] w-[13vw] ml-[5px] bg-red-600 text-[13px] p-2 text-white"
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
