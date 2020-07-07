import React from 'react';

const Item = ({ todo, toggleCompleted }) => (
  <li className={todo.completed ? 'complete' : 'uncompleted'}>
    <button onClick={toggleCompleted} className="done">
      &#10003;
    </button>
    <span>{todo.name}</span>
    <button className="delete">&#128465;</button>
  </li>
);

export default Item;
