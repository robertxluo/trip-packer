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
      isHovering: false,
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

  const handleMouseHover = (itemId, hover) => {
    const itemsCopy = [...items];
    const item = itemsCopy.find((obj) => obj.id === itemId);
    const itemIndex = itemsCopy.map((obj) => obj.id).indexOf(item.id);
    itemsCopy[itemIndex].isHovering = hover;
    setItems(itemsCopy);
  };

  const handleDestinationChange = (event) => {
    setNewDestination(event.target.value);
  };

  const handleDestinationSubmit = (event) => {
    event.preventDefault();
    setDestination(newDestination);
    setNewDestination('');
  };

  if (items.length || destination) {
    return (
      <div className="container py-10 mx-auto">
        <AddItem handleAdd={addItem} content={content} setContent={setContent} />
        <div className="flex py-4 mt-10 justify-evenly">
          <Card
            items={items}
            title={destination}
            handleHover={handleMouseHover}
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
      <div className="flex justify-center w-4/5 max-w-md mx-auto mt-24">
        <form onSubmit={handleDestinationSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded-lg shadow-md">
          <label htmlFor="destination" className="block mb-2 text-lg font-bold text-gray-700">
            Where will your next destination be?
            <br className="m-0" />
            <span className="text-xs font-normal leading-none text-gray-700">You can always edit this later!</span>
          </label>
          <input
            onChange={handleDestinationChange}
            autoComplete="off"
            id="destination"
            name="destination"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow-sm appearance-none dow focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Location"
          />
          <button
            onClick={(e) => handleDestinationSubmit(e)}
            className="w-full py-2 mt-4 text-white bg-green-400 rounded shadow-md hover:bg-green-500"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
};

export default MainContainer;
