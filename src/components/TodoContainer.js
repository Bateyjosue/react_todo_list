import React, { Component } from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map((todo) => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    })
  }

  addTodoItem = (item) => {
    const newTodo = {
      id: uuidv4(),
      title:item,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
    })

  }

  render() {
    return (
      <div>
        <Header />
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} handleDelete={this.delTodo} />
      </div>
    );
  }
}

export default TodoContainer;
