import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// GET_ASYNC
export const getTodoAsync = createAsyncThunk(
  "todo/getTodoAsync",
  async (isCompleted = false, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      // const res = await fetch("https://abeer-sabry-rest-api.herokuapp.com/todos");
      const res = await fetch(`https://todo-api-f07r.onrender.com/todos?completed=${isCompleted}`);
      const todoList = await res.json();
      return todoList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Get CompletedTodo
export const getCompletedAsync = createAsyncThunk(
  "todo/getCompletedAsync",
  async (isCompleted = true, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`https://todo-api-f07r.onrender.com/todos?completed=${isCompleted}`);
      const todoList = await res.json();
      console.log("res", todoList);
      return todoList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// get searchedTodo
export const getSearchedTodo = createAsyncThunk("todo/getSearchedTodo", async (title, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(`https://todo-api-f07r.onrender.com/todos?title=${title}`);
    const todoList = await res.json();
    console.log("res", todoList);
    return todoList;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoItems: [],
    loading: false,
    error: null,
    // completed
    completedItems: [],
    searchedTodo: {},
  },

  extraReducers: {
    // GET_TODO
    [getTodoAsync.pending]: state => {
      state.loading = true;
    },
    [getTodoAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoItems = action.payload;
    },
    [getTodoAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // GET_COMPLETED_TODO
    [getCompletedAsync.pending]: state => {
      state.loading = true;
    },
    [getCompletedAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.completedItems = action.payload;
    },
    [getCompletedAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // getSearchedTodo
    [getSearchedTodo.pending]: state => {
      state.loading = true;
    },
    [getSearchedTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.searchedTodo = action.payload;
      console.log("searched", state.searchedTodo);
    },
    [getSearchedTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default todoSlice.reducer;
