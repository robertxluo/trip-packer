import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex flex-col flex-wrap items-center p-5 mx-auto border-b-2 md:flex-row">
      <a className="flex items-center mb-4 font-medium text-green-400 cursor-pointer title-font md:mb-0">
        <span className="ml-3 text-3xl">trip packer</span>
      </a>
      <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto"></nav>
      <button className="inline-flex items-center px-4 py-2 mt-4 text-base text-gray-100 bg-green-400 border-0 rounded-full focus:outline-none hover:bg-green-500 md:mt-0">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
