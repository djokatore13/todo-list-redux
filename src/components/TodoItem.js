import React from "react"
import { useDispatch } from "react-redux"

import { toggledCompletedTodo, deletedTodo } from "../store/todos";
import deleteImg from "../assets/images/delete.png"


export default function TodoItem({ id, title, completed }) {

  const dispatch = useDispatch();

  // Toggle between completed and uncompleted todo
  const handleToggledCompletedTodos = () => {
    dispatch(toggledCompletedTodo({ id, completed: !completed }))
  }

  // Handle deleted todo
  const handleDeletedCompletedTodos = () => {
    dispatch(deletedTodo({ id }))
  }

  return (
    <li className={`todo-list__item ${completed && 'todo-list__item--success'}`}>
			<div className="todo-list__item-wrapper">
				<span className="todo-list__item-text">
					<input 
            type="checkbox" 
            className="todo-list__item-checkbox"
            checked={completed} 
            onChange={handleToggledCompletedTodos}
          />
					{title}
				</span>
				<button 
          className="todo-list__item-btn"
          onClick={handleDeletedCompletedTodos}
        >
          <img src={deleteImg} alt="Delete" />
        </button>
			</div>
		</li>
  )
}
