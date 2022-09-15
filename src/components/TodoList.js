/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => (
  <div>
    <ul>
      {
        props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            handleDelete={props.handleDelete}
            setUpdate={props.setUpdate}
          />
        ))
      }
    </ul>
  </div>
);

export default TodoList;
