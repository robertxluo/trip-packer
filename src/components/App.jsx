import React from 'react';
import { hot } from 'react-hot-loader';
import '../assets/main.css';

import Navbar from './Navbar.jsx';
import Card from './Card.jsx';

const items = [
  {
    id: 1,
    content: 'Backpack',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Toothbrush',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'Razor',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
];

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto py-10">
        <input
          className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter an item"
        />
        <div className="flex py-4 justify-evenly">
          <Card items={items} title="Paris Trip" />
        </div>
      </div>
    </div>
  );
};

export default hot(module)(App);
