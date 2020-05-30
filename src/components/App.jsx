import React from 'react';
import { hot } from 'react-hot-loader';
import '../assets/main.css';

import Navbar from './Navbar.jsx';

const App = () => {
  return (
    <div className="">
      <Navbar />
    </div>
  );
};

export default hot(module)(App);
