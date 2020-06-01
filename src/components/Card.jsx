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
            <li className="flex items-center" key={item.id}>
              {item.content}
              <svg className="ml-2 w-3 h-3 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
              </svg>{' '}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
