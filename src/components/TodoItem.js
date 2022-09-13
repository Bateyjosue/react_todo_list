import React from 'react';
import styles from "./TodoItem.module.css";

/* eslint-disable-next-line arrow-body-style */
const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

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

  const {completed, id, title} = props.todo;

  return (
    <li className={styles.item} style={item}>
      {/* eslint-disable-next-line react/destructuring-assignment, react/prop-types */}
      <input 
        type="checkbox" 
        className={styles.checkbox}
        checked={completed} 
        onChange={()=> props.handleChangeProps(id)}
        style={check}
        />
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
      <button onClick={() => props.handleDelete(id)} style={btnStyle}>Delete</button>
    </li>
  );
};



export default TodoItem;
