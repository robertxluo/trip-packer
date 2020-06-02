import React from 'react';

const Title = ({ text }) => {
  return <h1 className="font-bold text-xl mb-2 text-center">{text}</h1>;
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
    <div className="max-w-full rounded overflow-hidden shadow-lg bg-gray-100">
      <div className="px-6 py-4">
        <Title text={title} />
        <ul>
          {items.map((item) => {
            {
              item.content === '' && !item.edit && deleteIfEmpty(item.id);
            }
            const lineThrough = item.checked ? 'line-through cursor-pointer' : 'cursor-pointer';
            return (
              <li
                onMouseEnter={() => handleHover(item.id, true)}
                onMouseLeave={() => handleHover(item.id, false)}
                className="flex items-center mb-2"
                key={item.id}
              >
                <input className="mr-2 leading-tight cursor-pointer" type="checkbox" checked={item.checked} onChange={() => toggleCheck(item.id)} />
                {!item.edit && (
                  <div onClick={() => toggleEditInput(item.id)} className={lineThrough}>
                    {item.content}
                  </div>
                )}
                {item.edit && (
                  <input
                    autoFocus
                    className="shadow w-full appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={item.content}
                    onKeyPress={(event) => handleKeyPress(event, item.id)}
                    onChange={() => handleEdit(item.id, event)}
                  />
                )}
                {(item.isHovering || item.edit) && (
                  <>
                    <svg
                      onClick={() => toggleEditInput(item.id)}
                      className="ml-2 w-3 h-3 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                    </svg>

                    <svg
                      onClick={() => handleDelete(item.id)}
                      className="ml-2 w-3 h-3 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
                    </svg>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
