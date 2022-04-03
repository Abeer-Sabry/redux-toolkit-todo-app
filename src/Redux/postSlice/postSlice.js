import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// GET_ACTION //
import { getTodoAsync } from "../todoSlice";

export const postTodoAsync = createAsyncThunk("createTodo/postTodoAsync", async (payload, thunkAPI) => {
  const { rejectWithValue, dispatch, getState } = thunkAPI;
  try {
    console.log("getState", getState());
    const res = await fetch(`https://abeer-sabry-rest-api.herokuapp.com/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: payload.title,
        completed: false,
      }),
    });

    const items = getState().todo.todoItems;
    const exists = items.find(item => item.title === payload.title);
    if (exists) {
      alert("YOUR TODO ALREADY EXITS");
      return;
    }
    const todo = await res.json();
    dispatch(getTodoAsync());
    return todo;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
// Slice
const postTodoSlice = createSlice({
  name: "createTodo",
  initialState: { showCreateModal: false },
  reducers: {
    createTodo: state => {
      state.showCreateModal = true;
    },
    CancelCreateModal: state => {
      state.showCreateModal = false;
    },
  },
  extraReducers: {
    [postTodoAsync.fulfilled]: state => {
      state.showCreateModal = false;
    },
  },
});
export const { createTodo, CancelCreateModal } = postTodoSlice.actions;
export default postTodoSlice.reducer;
