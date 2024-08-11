import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-[80%] m-auto p-1">
      <img src="/appLogo.png" />
      <div className="flex items-center justify-between gap-4 font-montserrat text-[#212121] font-semibold">
        <Link href={"/homepage"}>Home</Link>
        <Link href={"/homepage"}>Product</Link>
        <Link href={"/homepage"}>Pricing</Link>
        <Link href={"/homepage"}>Contact</Link>
        <button className="bg-[#23A6F0] p-5 rounded-xl text-white font-bold">
          Enquire now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
