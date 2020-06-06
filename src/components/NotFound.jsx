import React from 'react';

import Image404 from '../assets/images/404_image.svg';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="object-cover w-1/3 h-auto mt-20 center" src={Image404} />
      <h1 className="mt-20 text-4xl">There is nothing here</h1>
    </div>
  );
};

export default NotFound;
