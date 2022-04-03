import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// GET_ASYNC
export const getTodoAsync = createAsyncThunk("todo/getTodoAsync", async (isCompleted = false, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    // const res = await fetch("https://abeer-sabry-rest-api.herokuapp.com/todos");
    const res = await fetch(`https://abeer-sabry-rest-api.herokuapp.com/todos?completed=${isCompleted}`);
    const todoList = await res.json();
    return todoList;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
export const getCompletedAsync = createAsyncThunk("todo/getCompletedAsync", async (isCompleted = true, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(`https://abeer-sabry-rest-api.herokuapp.com/todos?completed=${isCompleted}`);
    const todoList = await res.json();
    return todoList;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
// SEARCH_ASYNC
export const getSearchAsync = createAsyncThunk("todo/getSearchAsync", async (title, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(`http://localhost:5000/todos?title=${title}`);
    const todoList = await res.json();
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
  },
});
export default todoSlice.reducer;
