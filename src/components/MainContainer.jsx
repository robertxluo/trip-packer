import React, { useState, useEffect } from 'react';
import nextId from 'react-id-generator';

import AddItem from './AddItem.jsx';
import Card from './Card.jsx';

const MainContainer = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [content, setContent] = useState('');
  const [destination, setDestination] = useState(localStorage.getItem('destination') || '');
  const [newDestination, setNewDestination] = useState('');

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('destination', destination);
  }, [items]);

  const addItem = (event) => {
    event.preventDefault();
    const newItem = {
      id: nextId(),
      content,
      date: new Date(),
      checked: false,
      edit: false,
    };
    setItems(items.concat(newItem));
    setContent('');
  };

  const handleItemEdit = (itemId, event) => {
    const itemsCopy = [...items];
    const item = itemsCopy.find((obj) => obj.id === itemId);
    const itemIndex = itemsCopy.map((obj) => obj.id).indexOf(item.id);
    itemsCopy[itemIndex].content = event.target.value;
    setItems(itemsCopy);
  };

  const handleItemDelete = (itemId) => {
    const itemsCopy = [...items];
    const filteredItems = itemsCopy.filter((obj) => obj.id !== itemId);
    setItems(filteredItems);
  };

  const toggleEditInput = (itemId) => {
    const itemsCopy = [...items];
    const item = itemsCopy.find((obj) => obj.id === itemId);
    const itemIndex = itemsCopy.map((obj) => obj.id).indexOf(item.id);

    // If we are currently editing and the content is empty, delete the item
    if (item.edit && item.content.trim() === '') {
      handleItemDelete(itemId);
      return;
    }

    itemsCopy[itemIndex].edit = !itemsCopy[itemIndex].edit;
    setItems(itemsCopy);
  };

  const toggleCheck = (itemId) => {
    const itemsCopy = [...items];
    const item = itemsCopy.find((obj) => obj.id === itemId);
    const itemIndex = itemsCopy.map((obj) => obj.id).indexOf(item.id);
    itemsCopy[itemIndex].checked = !itemsCopy[itemIndex].checked;
    setItems(itemsCopy);
  };

  /* handleMouseHover function removed */

  const handleDestinationChange = (event) => {
    setNewDestination(event.target.value);
  };

  const handleDestinationSubmit = (event) => {
    event.preventDefault();
    setDestination(newDestination);
    localStorage.setItem('destination', newDestination);
    setNewDestination('');
  };

  if (items.length || destination) {
    return (
      <div className="mx-auto py-10 container">
        <AddItem handleAdd={addItem} content={content} setContent={setContent} />
        <div className="flex justify-evenly mt-10 py-4">
          <Card
            items={items}
            title={destination}
            handleEdit={handleItemEdit}
            handleDelete={handleItemDelete}
            toggleEditInput={toggleEditInput}
            toggleCheck={toggleCheck}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center mx-auto mt-24 w-4/5 max-w-md">
        <form onSubmit={handleDestinationSubmit} className="bg-white shadow-md mb-4 px-8 pt-6 pb-8 rounded-lg">
          <label htmlFor="destination" className="block mb-2 font-bold text-gray-700 text-lg">
            Where will your next destination be?
            <br className="m-0" />
            <span className="font-normal text-gray-700 text-xs leading-none">You can always edit this later!</span>
          </label>
          <input
            onChange={handleDestinationChange}
            autoComplete="off"
            id="destination"
            name="destination"
            className="shadow-sm px-3 py-2 border rounded focus:shadow-outline focus:outline-none w-full text-gray-700 leading-tight appearance-none dow"
            type="text"
            placeholder="Location"
          />
          <button
            onClick={(e) => handleDestinationSubmit(e)}
            className="bg-green-400 hover:bg-green-500 shadow-md mt-4 py-2 rounded w-full text-white"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
};

export default MainContainer;
