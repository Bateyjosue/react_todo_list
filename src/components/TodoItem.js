import React from 'react';

/* eslint-disable-next-line arrow-body-style */
const TodoItem = (props) => {
  return (
    <li>
      {/* eslint-disable-next-line react/destructuring-assignment, react/prop-types */}
      <input type="checkbox" checked={props.todo.completed} onChange={()=> props.handleChangeProps(props.todo.id)}/>{props.todo.title}
      <button onClick={() => props.handleDelete(props.todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
