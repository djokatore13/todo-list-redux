import React from "react"
import TodoItem from "./TodoItem"
import todosData from "../todosStaticData/data"
import './TodoList.scss'

export default function TodoList() {

  return (
    <ul className="todo-list">
      {
        todosData.map((todo, index) => <TodoItem key={index} id={todo.id} title={todo.title} completed={todo.completed} />)
      }
    </ul>
  )
}
