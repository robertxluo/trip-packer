import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import '../assets/styles/main.css';

import Navbar from './Navbar.jsx';
import Card from './Card.jsx';

const itemsDummy = [
  {
    id: 1,
    content: 'Backpack',
    date: '2019-05-30T17:30:31.098Z',
    checked: false,
  },
  {
    id: 2,
    content: 'Toothbrush',
    date: '2019-05-30T18:39:34.091Z',
    checked: false,
  },
  {
    id: 3,
    content: 'Phone',
    date: '2019-05-30T19:20:14.298Z',
    checked: false,
  },
];

const App = () => {
  const [items, setItems] = useState(itemsDummy);
  const [content, setContent] = useState('');

  const addItem = (event) => {
    event.preventDefault();
    const newItem = {
      content,
      date: new Date(),
      checked: false,
    };
    setItems(items.concat(newItem));
    setContent('');
  };

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto py-10">
        <form className="inline-flex w-full">
          <input
            className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="item"
            type="text"
            autoComplete="off"
            placeholder="Enter an item"
            onChange={(event) => setContent(event.target.value)}
            value={content}
          />
          <button
            type="submit"
            onClick={(event) => addItem(event)}
            className=" items-center bg-green-200 border-0 ml-2 py-2 px-4 focus:outline-none hover:bg-green-300 rounded text-base mt-4 md:mt-0"
          >
            Add
          </button>
        </form>
        <div className="flex py-4 justify-evenly">
          <Card items={items} title="Paris Trip" />
        </div>
      </div>
    </div>
  );
};

export default hot(module)(App);
