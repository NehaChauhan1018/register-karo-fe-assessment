import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between w-[80%] m-auto p-1'>
      <img src='/appLogo.png' />
      <div className='flex items-center justify-between gap-4 font-montserrat text-[#212121] font-semibold'>
        <span>Home</span>
        <span>Product</span>
        <span>Pricing</span>
        <span>Contact</span>
        <button className='bg-[#23A6F0] p-5 rounded-md text-white font-bold'>
          Enquire now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
