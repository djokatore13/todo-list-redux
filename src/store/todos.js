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
    }
  }
})

export const { addedTodo } = slice.actions
export default slice.reducer;