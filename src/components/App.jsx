import React from 'react';
import { hot } from 'react-hot-loader';
import nextId from 'react-id-generator';
import '../assets/styles/main.css';

import Navbar from './Navbar.jsx';
import MainContainer from './MainContainer.jsx';

const itemsDummy = [
  {
    id: nextId(),
    content: 'Backpack',
    date: '2019-05-30T17:30:31.098Z',
    checked: false,
    edit: false,
    isHovering: false,
  },
  {
    id: nextId(),
    content: 'Toothbrush',
    date: '2019-05-30T18:39:34.091Z',
    checked: false,
    edit: false,
    isHovering: false,
  },
  {
    id: nextId(),
    content: 'Phone',
    date: '2019-05-30T19:20:14.298Z',
    checked: false,
    edit: false,
    isHovering: false,
  },
];

const App = () => {
  return (
    <div className="">
      <Navbar />
      <MainContainer itemsDummy={itemsDummy} />
    </div>
  );
};

export default hot(module)(App);
