import React from 'react';

const AddItem = ({ handleAdd, content, setContent }) => {
  return (
    <form className="inline-flex w-full">
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
        className="items-center px-4 py-2 mt-4 ml-2 text-base bg-green-200 border-0 rounded focus:outline-none hover:bg-green-300 md:mt-0"
      >
        Add
      </button>
    </form>
  );
};

export default AddItem;
