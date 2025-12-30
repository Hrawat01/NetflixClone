import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Search = ({ data }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q")?.toLowerCase() || ""; // normalize to lowercase

  // Filter data based on query
  const filteredData = data.filter((show) =>
    show.name.toLowerCase().includes(query)
  );

  return (
    <>
      <div className="bg-black h-[100vh] w-[100vw] text-white flex flex-col overflow-hidden">
        <Header className="w-full" />

        <div className="relative top-[20vh] left-[10vw] w-[83%] h-auto text-5xl bg-yellow-500 p-4">
          {/* Print the query */}
          <div className="mb-4 text-2xl">
            Search query: <span className="font-bold">{query}</span>
          </div>

          {/* Render filtered results */}
          <div className="flex flex-wrap gap-4">
            {filteredData.length > 0 ? (
              filteredData.map((show, idx) => (
                <div
                  key={idx}
                  className="bg-black text-white p-2 rounded text-lg"
                >
                  {show.name}
                </div>
              ))
            ) : (
              <div className="text-red-600 text-xl">No results found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;