import React from 'react';

const Title = ({ text }) => {
  return <h1 className="font-bold text-xl mb-2 text-center">{text}</h1>;
};

const Card = ({ items, title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
      <div className="px-6 py-4">
        <Title text={title} />
        <ul>
          {items.map((item) => (
            <li>{item.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
