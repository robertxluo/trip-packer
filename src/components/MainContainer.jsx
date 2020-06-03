import React, { useState, useEffect } from 'react';
import nextId from 'react-id-generator';

import AddItem from './AddItem.jsx';
import Card from './Card.jsx';

const MainContainer = ({ itemsDummy }) => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || itemsDummy);
  const [content, setContent] = useState('');

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
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
  return (
    <div className="container py-10 mx-auto">
      <AddItem handleAdd={addItem} content={content} setContent={setContent} />
      <div className="flex py-4 justify-evenly">
        <Card
          items={items}
          title="Paris Trip"
          handleHover={handleMouseHover}
          handleEdit={handleItemEdit}
          handleDelete={handleItemDelete}
          toggleEditInput={toggleEditInput}
          toggleCheck={toggleCheck}
        />
      </div>
    </div>
  );
};

export default MainContainer;
