import React from "react";

const MainHome = () => {
  return (
    <section className="w-full h-screen bg-[url('/mainHomeBg.png')] bg-no-repeat bg-cover flex flex-col items-center justify-center text-white gap-6">
      <div className="text-center mb-8"> 
        <h3 className="text-xl">
          From a single desk to a whole building. The choice is yours.
        </h3>
        <h1 className="text-5xl font-bold mt-4">
          Discover the Ultimate Workspace Solution
        </h1>
      </div>

      <div className="bg-[#F4F3F0] p-4 rounded-lg flex items-center w-[90%] max-w-2xl relative">
        <input
          type="text"
          placeholder="Search city"
          className="flex-grow bg-white outline-none text-black placeholder-gray-600 p-4 relative"
        />
        <span className="text-[#2962FF] underline cursor-pointer ml-2 bg-white absolute right-" >
          Search Nearby
        </span>
        <button className="bg-[#2962FF] text-white font-medium px-6 py-2 rounded-full ml-4">
          Search
        </button>
      </div>

      {/* Trending Cities */}
      <div className="mt-12 text-center">
        <h4 className="text-base mb-4 text-left">Trending Cities</h4>
        <div className="grid grid-cols-6 gap-6">
          {["delhi", "noida", "banglore", "mumbai", "hyderabad", "chennai"].map(
            (city, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={`/icons/${city}.png`}
                  alt={city}
                  className="w-16 h-20"
                />
                {/* <span className="text-sm mt-2">{city}</span> */}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MainHome;
