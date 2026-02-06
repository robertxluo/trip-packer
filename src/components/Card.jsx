import React from 'react';
import Draggable from 'react-draggable';

const Title = ({ text }) => {
  return <h1 className="mb-2 font-bold text-xl text-center">{text}</h1>;
};

const Card = ({ items, title, handleEdit, handleDelete, handleHover, toggleEditInput, toggleCheck }) => {
  const handleKeyPress = (event, itemId) => {
    if (event.key === 'Enter') {
      toggleEditInput(itemId);
    }
  };

  const deleteIfEmpty = (itemId) => {
    handleDelete(itemId);
  };

  return (
    <Draggable>
      <div className="bg-green-200 shadow-lg rounded w-1/2 max-w-full overflow-hidden cursor-pointer">
        <div className="px-6 py-4">
          <form>
            <Title text={title} />
            <ul>
              {items.map((item) => {
                const lineThrough = item.checked ? 'line-through cursor-pointer text-lg' : 'cursor-pointer text-lg';
                return (
                  <li
                    className="group flex items-center mb-2 h-10"
                    key={item.id}
                  >
                    {!item.edit && (
                      <input
                        className="mr-2 leading-tight cursor-pointer"
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => toggleCheck(item.id)}
                      />
                    )}
                    {!item.edit && (
                      <div onClick={() => toggleEditInput(item.id)} className={`flex-grow ${lineThrough}`}>
                        {item.content}
                      </div>
                    )}
                    {item.edit && (
                      <input
                        autoFocus
                        className="shadow px-3 py-1 border rounded focus:shadow-outline focus:outline-none w-full text-gray-700 leading-tight appearance-none"
                        value={item.content}
                        onFocus={(e) => e.target.select()}
                        onKeyDown={(event) => handleKeyPress(event, item.id)}
                        onChange={(event) => handleEdit(item.id, event)}
                        onBlur={() => toggleEditInput(item.id)}
                      />
                    )}
                    {!item.edit && (
                      <div className="invisible group-hover:visible flex items-center ml-auto">
                        <svg
                          onClick={() => toggleEditInput(item.id)}
                          className="ml-2 w-4 h-4 text-gray-600 hover:text-gray-800 cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>

                        <svg
                          onClick={() => handleDelete(item.id)}
                          className="ml-2 w-4 h-4 text-red-600 hover:text-red-800 cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </form>
        </div>
      </div>
    </Draggable>
  );
};

export default Card;
