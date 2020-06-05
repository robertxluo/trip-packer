import React from 'react';
import { Link } from '@reach/router';

import travel from './../assets/images/travel_mode.svg';

const Home = () => {
  return (
    <section>
      <div className="flex flex-col items-center xl:flex-row md:justify-center">
        <div className="flex flex-col items-center xl:items-start md:flex-col">
          <h1 className="px-8 mt-8 text-4xl font-bold text-center text-gray-800">Never Forget Your Stuff</h1>
          <p className="max-w-md px-8 my-4 text-lg font-semibold text-center text-gray-700 md:text-left">
            Going on a business trip in Los Angeles, visiting the temples in Kyoto, or going on a road trip-no matter where you want to go. We have
            the perfect trip packer for you.
          </p>
          <Link to="main">
            <button className="px-6 py-4 mx-8 my-4 mb-4 text-base font-semibold text-gray-100 bg-green-400 border-0 rounded-lg center focus:outline-none hover:bg-green-500">
              Get Started
            </button>
          </Link>
        </div>
        <img className="hidden object-cover w-auto h-auto mt-8 md:inline-block" src={travel} alt="Person dragging Suitcase" />
      </div>
      <img className="object-cover w-full h-auto px-4 mt-8 md:hidden" src={travel} alt="Person dragging Suitcase" />
    </section>
  );
};

export default Home;
