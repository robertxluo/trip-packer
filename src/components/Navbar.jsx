import React from 'react';
import { Link } from '@reach/router';

const Navbar = () => {
  const text = localStorage.getItem('destination') ? 'Launch' : 'Sign In';

  return (
    <nav className="flex flex-col flex-wrap items-center mx-auto border-b-2 md:p-5 sm:p-0 md:flex-row">
      <Link to="/" className="flex items-center mb-4 font-medium text-green-400 cursor-pointer title-font md:mb-0">
        <span className="ml-3 text-3xl">trip packer</span>
      </Link>
      <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto"></nav>
      <Link to="main">
        <button className="inline-flex items-center px-5 py-3 mt-0 mb-4 text-sm font-semibold text-gray-100 bg-green-400 border-0 rounded-full shadow-lg focus:outline-none focus:shadow-outline hover:bg-green-300 active:bg-green-500 md:my-0">
          {text}
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
