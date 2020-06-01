import React from 'react';

const AddItem = ({ handleAdd, content, setContent }) => {
  return (
    <form className="inline-flex w-full">
      <input
        className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        className=" items-center bg-green-200 border-0 ml-2 py-2 px-4 focus:outline-none hover:bg-green-300 rounded text-base mt-4 md:mt-0"
      >
        Add
      </button>
    </form>
  );
};

export default AddItem;
