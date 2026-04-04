import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import OverLay from "./OverLay";

const Search = ({ data }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q")?.toLowerCase() || "";

  const filteredData = data.filter((show) =>
    show.name.toLowerCase().includes(query),
  );

  const token = localStorage.getItem("token");

  return token ? (
    <div className="bg-black min-h-screen w-full text-white flex flex-col overflow-x-hidden">
      <Header className="w-full" />

      <div className="relative top-[120px] md:top-[20vh] left-4 md:left-[10vw] w-[90%] md:w-[83%] h-auto text-3xl md:text-5xl p-4">
        {/* Print the query */}
        <div className="mb-4 text-xl md:text-2xl">
          Search query: <span className="font-bold">{query}</span>
        </div>

        {/* Render filtered results */}
        <div className="flex flex-wrap gap-2 md:gap-4">
          {filteredData.length > 0 ? (
            filteredData.map((list, idx) => (
              <div
                key={idx}
                className="bg-gray-500 text-black px-3 py-1 md:p-2 rounded text-sm md:text-lg cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setShowOverlay(true);
                  setSelectedIndex(idx);
                  console.log(idx);
                }}
              >
                {list.name}
              </div>
            ))
          ) : (
            <div className="text-red-600 text-lg md:text-xl">No results found</div>
          )}
        </div>
      </div>
      {showOverlay && selectedIndex !== null && (
        <OverLay
          data={filteredData}
          id={selectedIndex}
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
      )}
    </div>
  ) : (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Need To Login</h1>

      <p className="text-gray-600 mb-6">Please login to continue</p>

      <button
        onClick={() => {
          navigate("/");
        }} // you already have navigation
        className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-2xl text-3xl font-bold"
      >
        Go to Login
      </button>
    </div>
  );
};

export default Search;
