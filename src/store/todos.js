import { createSlice } from "@reduxjs/toolkit";
import todosData from "../todosStaticData/data"

const slice = createSlice({
  name: 'todos',
  initialState: todosData,
  reducers: {
    // Here goes reducers
  }
})

// Uncommnt this line when we create reducers, and export them inside parentheses
// export const {} = slice.actions
export default slice.reducer;