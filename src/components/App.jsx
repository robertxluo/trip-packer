import React from 'react';
import { Router } from '@reach/router';
import { hot } from 'react-hot-loader';
import '../assets/styles/main.css';

import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import MainContainer from './MainContainer.jsx';
import NotFound from './NotFound.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Router>
        <Home path="/" />
        <MainContainer path="main" />
        <NotFound default />
      </Router>
    </div>
  );
};

export default hot(module)(App);
