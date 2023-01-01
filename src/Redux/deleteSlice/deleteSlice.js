import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// GET_ACTION
import { getCompletedAsync, getTodoAsync } from "../todoSlice";

export const deleteTodoAsync = createAsyncThunk(
  "deleteTodo/deleteTodoAsync",
  async (id, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      await fetch(`https://todo-api-f07r.onrender.com/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(getTodoAsync());
      dispatch(getCompletedAsync());
      return id;
    } catch (error) {}
  }
);

const deleteSlice = createSlice({
  name: "deleteTodo",
  initialState: {
    currentTodo: null,
    show: false,
  },
  reducers: {
    // UI_DELETE_BUTTON_REDUCER
    confirmDelete: (state, action) => {
      state.currentTodo = action.payload;
      state.show = true;
    },
    cancelModal: state => {
      state.show = false;
    },
  },
  extraReducers: {
    // MODAL_DELETE_BUTTON_REDUCER
    [deleteTodoAsync.pending]: state => {
      state.loading = true;
    },
    [deleteTodoAsync.fulfilled]: state => {
      state.show = false;
      state.loading = false;
    },
  },
});
export const { confirmDelete, cancelModal } = deleteSlice.actions;
export default deleteSlice.reducer;
