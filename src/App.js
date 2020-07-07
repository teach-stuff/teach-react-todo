import React, { useState } from 'react';
import Item from './Item';

function App() {
  const [todos, setTodos] = useState([]);
  const [items, setItems] = useState('');

  function addItem(e) {
    e.preventDefault();
    items !== ''
      ? setTodos([{ name: items, completed: false }, ...todos])
      : alert('Please enter an item');

    setItems('');
    console.log(todos);
  }

  return (
    <div className="wrapper">
      {/* <button
        onClick={() =>
          setTodos([{ name: 'Buy apples', completed: false }, ...todos])
        }
      >
        Add todo
      </button> */}

      <form>
        <input
          type="text"
          onChange={(event) => setItems(event.target.value)}
          value={items}
          className="todo-input"
          placeholder="Add item..."
        />
        <button
          onClick={(event) => addItem(event)}
          className="todo-button"
          type="submit"
        >
          +
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Item
            todo={todo}
            toggleCompleted={() => {
              const updatedItem = { ...todo, completed: !todo.completed };
              setTodos([
                ...todos.slice(0, index),
                updatedItem,
                ...todos.slice(index + 1),
              ]);
            }}
          />
        ))}
      </ul>

      <div className="actions">
        <div className="left total">1 items remaining</div>
        <div className="right">
          <button className="delete-complete">Delete completed items</button>
        </div>
      </div>
    </div>
  );
}

export default App;
