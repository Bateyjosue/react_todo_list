import React from 'react';

/* eslint-disable-next-line arrow-body-style */
const TodoItem = (props) => {
  return (
    <li>
      {/* eslint-disable-next-line react/destructuring-assignment, react/prop-types */}
      {props.todo.title}
    </li>
  );
};

export default TodoItem;
