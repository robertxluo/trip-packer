import React from 'react';
import { Link } from '@reach/router';

const Navbar = () => {
  return (
    <nav className="flex flex-col flex-wrap items-center mx-auto border-b-2 md:p-5 sm:p-0 md:flex-row">
      <Link to="/" className="flex items-center mb-4 font-medium text-green-400 cursor-pointer title-font md:mb-0">
        <span className="ml-3 text-3xl">trip packer</span>
      </Link>
      <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto"></nav>
      <Link to="main">
        <button className="inline-flex items-center px-6 py-2 mt-0 mb-4 text-base text-gray-100 bg-green-400 border-0 rounded-full focus:outline-none hover:bg-green-500 md:my-0">
          Sign In
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
