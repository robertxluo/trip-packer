import React from 'react';

const AddItem = ({ handleAdd, content, setContent }) => {
  return (
    <form className="inline-flex flex-col items-center w-full md:flex-row">
      <input
        className="w-3/4 px-3 py-3 mx-4 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="item"
        type="text"
        autoComplete="off"
        placeholder="Enter an item"
        onChange={(event) => setContent(event.target.value)}
        value={content}
      />
      <button
        type="submit"
        onClick={(event) => handleAdd(event)}
        className="items-center hidden px-5 py-3 mt-4 ml-2 text-base text-white bg-green-400 border-0 rounded-lg shadow-md hover:bg-green-300 active:bg-green-500 md:block focus:outline-none md:mt-0"
      >
        Add
      </button>
      <button
        type="submit"
        onClick={(event) => handleAdd(event)}
        className="items-center w-3/4 px-3 py-3 mx-4 mt-1 text-white bg-green-400 rounded shadow-md hover:bg-green-500 md:hidden"
      >
        Add
      </button>
    </form>
  );
};

export default AddItem;
