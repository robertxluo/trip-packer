import React from 'react';

const Header = () => {
  return (
    <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b-2">
      <a className="flex title-font font-medium items-center text-green-400 mb-4 md:mb-0">
        <span className="ml-3 text-3xl">trip packer</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
      <button className="inline-flex items-center bg-green-200 border-0 py-2 px-4 focus:outline-none hover:bg-green-300 rounded text-base mt-4 md:mt-0">
        Button
      </button>
    </div>
  );
};

export default Header;
