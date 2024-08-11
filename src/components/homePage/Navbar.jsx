import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-[80%] m-auto p-1">
      <img src="/appLogo.png" />
      <div className="flex items-center justify-between gap-12 font-montserrat text-[#393939] font-normal text-lg">
        <div className="relative group">
          <span className="cursor-pointer flex items-center gap-1">
            Workspace & Services <img src="/icons/dropdownIcon.png" />
          </span>
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-2 rounded-md">
            <span className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Workspace
            </span>
            <span className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Services
            </span>
          </div>
        </div>
        <span className="cursor-pointer ">Get Started</span>
        <div className="relative group">
          <span className="cursor-pointer flex items-center gap-1">
            More <img src="/icons/dropdownIcon.png" />
          </span>
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-2 rounded-md">
            <span className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Option 1
            </span>
            <span className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Option 2
            </span>
          </div>
        </div>

        <span className="cursor-pointer">Help</span>
      </div>
      <div className="flex items-center gap-6">
        <img src="/icons/navCall.png" alt="Phone" className="cursor-pointer" />
        <div className="h-6 border-l border-gray-300"></div>
        <img src="/icons/navUser.png" alt="User" className="cursor-pointer" />
        <button className="bg-[#2962FF] px-6 py-3 rounded-full text-white font-medium">
          Enquire now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
