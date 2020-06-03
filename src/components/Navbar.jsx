import React from 'react';

const Navbar = () => {
  return (
    <div className="flex flex-col flex-wrap items-center p-5 mx-auto border-b-2 md:flex-row">
      <a className="flex items-center mb-4 font-medium text-green-400 title-font md:mb-0">
        <span className="ml-3 text-3xl">trip packer</span>
      </a>
      <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto"></nav>
      <button className="inline-flex items-center px-4 py-2 mt-4 text-base bg-green-300 border-0 rounded-full focus:outline-none hover:bg-green-300 text md:mt-0">
        Sign Up
      </button>
    </div>
  );
};

export default Navbar;
