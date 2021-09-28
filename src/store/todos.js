import { createSlice } from "@reduxjs/toolkit";
import todosData from "../todosStaticData/data"

const slice = createSlice({
  name: 'todos',
  initialState: todosData,
  reducers: {
    // Here goes reducers
    addedTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }
      state.push(newTodo)
    },
    toggledCompletedTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].completed = action.payload.completed
    },
    deletedTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    }
  }
})

export const { addedTodo, toggledCompletedTodo, deletedTodo } = slice.actions
export default slice.reducer;