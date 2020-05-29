import React from 'react';
import { hot } from 'react-hot-loader';
import '../assets/main.css';

import Header from './Header.jsx';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
    </div>
  );
};

export default hot(module)(App);