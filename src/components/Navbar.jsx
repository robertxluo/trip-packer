import React from 'react';
import { Link } from '@reach/router';

const Navbar = () => {
  const text = localStorage.getItem('destination') ? 'My Trip' : 'Start Planning';

  return (
    <nav className="flex md:flex-row flex-col flex-wrap items-center mx-auto sm:p-0 md:p-5 border-b-2">
      <Link to="/" className="flex items-center mb-4 md:mb-0 font-medium text-green-400 cursor-pointer title-font">
        <span className="ml-3 text-3xl">trip packer</span>
      </Link>
      <nav className="flex flex-wrap justify-center items-center md:ml-auto text-base"></nav>
      <Link to="main">
        <button className="inline-flex items-center bg-green-400 hover:bg-green-300 active:bg-green-500 shadow-lg md:my-0 mt-0 mb-4 px-5 py-3 border-0 rounded-full focus:shadow-outline focus:outline-none font-semibold text-gray-100 text-sm">
          {text}
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
