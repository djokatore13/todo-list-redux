import React, { useState } from "react"
import TodoList from "./TodoList"

import "./Todo.scss"

export default function TodoForm() {

  const [value, setValue] = useState('');

  const onSubmit = (event) => {
		event.preventDefault();
		console.log('user entered: ' + value);
	};

  return (
    <div className="todo">
      <div className="todo__wrapper">
        <h1 className="todo__main-title">Teletabis Todo List</h1>
        <form onSubmit={onSubmit} className="todo__form">
          <input
            type="text"
            className="todo__form-input"
            placeholder="Add todo..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />

          <button type="submit" className="todo__form-add-btn">
            Add new todo
          </button>
        </form>
        <TodoList />
      </div>
    </div>
  )
}
