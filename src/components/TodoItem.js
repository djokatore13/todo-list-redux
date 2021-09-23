import React from "react"

export default function TodoItem({ id, title, completed }) {
  return (
    <li className={`todo-list__item ${completed && 'todo-list__item--success'}`}>
			<div className="todo-list__item-wrapper">
				<span className="todo-list__item-text">
					<input 
            type="checkbox" 
            className="todo-list__item-checkbox"
            checked={completed} 
          />
					{title}
				</span>
				<button className="todo-list__item-btn">Delete</button>
			</div>
		</li>
  )
}
