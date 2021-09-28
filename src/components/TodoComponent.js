import React, { useState } from "react"
import TodoList from "./TodoList"
import { useDispatch } from "react-redux";
import { addedTodo } from "../store/todos";

import "./Todo.scss"

export default function TodoForm() {

  const [value, setValue] = useState('');
  const dispatch = useDispatch()

  const onSubmit = (e) => {
		e.preventDefault();
		console.log('user entered: ', value);
    dispatch(addedTodo({ title: value }))
    setValue(''); // clear input filed after submit
	};

  return (
    <div className="todo">
      <div className="todo__wrapper">
        <h1 className="todo__main-title">Teletabis Todo List</h1>
        <TodoList />
        <form onSubmit={onSubmit} className="todo__form">
          <input
            type="text"
            className="todo__form-input"
            placeholder="Add todo..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="todo__form-add-btn">
            Add new todo
          </button>
        </form>
        
      </div>
    </div>
  )
}
