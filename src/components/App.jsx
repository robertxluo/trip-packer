import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import nextId from 'react-id-generator';
import '../assets/styles/main.css';

import Navbar from './Navbar.jsx';
import AddItem from './AddItem.jsx';
import Card from './Card.jsx';

const itemsDummy = [
  {
    id: nextId(),
    content: 'Backpack',
    date: '2019-05-30T17:30:31.098Z',
    checked: false,
    edit: false,
    isHovering: false,
  },
  {
    id: nextId(),
    content: 'Toothbrush',
    date: '2019-05-30T18:39:34.091Z',
    checked: false,
    edit: false,
    isHovering: false,
  },
  {
    id: nextId(),
    content: 'Phone',
    date: '2019-05-30T19:20:14.298Z',
    checked: false,
    edit: false,
    isHovering: false,
  },
];

const App = () => {
  const [items, setItems] = useState(itemsDummy);
  const [content, setContent] = useState('');

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
    <div className="">
      <Navbar />
      <div className="container mx-auto py-10">
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
    </div>
  );
};

export default hot(module)(App);
