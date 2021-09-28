import React from "react"
import TodoItem from "./TodoItem"
import { useSelector } from "react-redux"

import './TodoList.scss'

export default function TodoList() {

  const todos = useSelector((state) => state.todos)

  return (
    <ul className="todo-list">
      {
        todos.map((todo, index) => <TodoItem key={index} id={todo.id} title={todo.title} completed={todo.completed} />)
      }
    </ul>
  )
}
