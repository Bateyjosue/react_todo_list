import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => (
  <div>
    <ul>
      {
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      }
    </ul>
  </div>
);

export default TodoList;
