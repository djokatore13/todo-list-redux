import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos"

export default configureStore({
  reducer: {
    // todo
    todos: todoReducer
  }
})