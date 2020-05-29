import React from 'react';

const Header = () => {
  return (
    <div class="text-gray-700 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl">Trip Packer</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
        <button class="inline-flex items-center bg-green-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
          Button
        </button>
      </div>
    </div>
  );
};

export default Header;
