import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="wrapper">
      <button
        onClick={() =>
          setTodos([{ name: 'Buy apples', completed: false }, ...todos])
        }
      >
        Add todo
      </button>

      <form>
        <input type="text" className="todo-input" placeholder="Add item..." />
        <button className="todo-button" type="submit">
          +
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="complete">
            <button className="done">&#10003;</button>
            <span>{todo.name}</span>
            <button className="delete">&#128465;</button>
          </li>
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
