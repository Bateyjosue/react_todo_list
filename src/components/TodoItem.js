/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import style from './TodoItem.module.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({ editing: true });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const { completed, id, title } = this.props.todo;
    const viewMode = {};
    const editMode = {};
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const btnStyle = {
      fontsSize: '13px',
      background: '#f1f3f4',
      border: 'none',
      cursor: 'pointer',
      float: 'right',
      outline: 'none',
      borderRadius: '100px',
      height: '50px',
      width: '50px',
      margin: '-10px 0 0 10px',
    };

    const check = {
      marginRight: '15px',
    };

    const item = {
      fontSize: '1.2rem',
      listStyleType: 'none',
      padding: '17px 0px',
      borderBottom: '1px solid #eaeaea',
    };

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li className={style.item} style={item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={style.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
            style={check}
          />
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
          <button type="button" onClick={() => this.props.handleDelete(id)} style={btnStyle}>Delete</button>
        </div>
        <input
          type="text"
          className="edit-text"
          style={editMode}
          value={title}
          onChange={(e) => { this.props.setUpdate(e.target.value, id); }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
