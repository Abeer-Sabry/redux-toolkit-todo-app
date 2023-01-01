import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// GET_ACTION
import { getCompletedAsync, getTodoAsync } from "../todoSlice";

// UPDATE_TODO
export const updateTodoAsync = createAsyncThunk(
  "update/updateTodoAsync",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      await fetch(`https://todo-api-f07r.onrender.com/todos/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });

      dispatch(getTodoAsync());
      dispatch(getCompletedAsync());
      return { ...data };
    } catch (error) {}
  }
);
const updateSlice = createSlice({
  name: "update",
  initialState: {
    updateTodo: {},
    updatingModal: false,
    // complete
    completedTodo: [],
    showComplete: false,
  },
  reducers: {
    // UPDATE_TODO_UI
    updateRequest: (state, action) => {
      state.updateTodo = action.payload;
      state.updatingModal = true;
    },
    // CANCEL_UPDATE_TODO_MODAL_BUTTON
    cancelUpdate: state => {
      state.updatingModal = false;
    },
  },
  extraReducers: {
    // MODAL_UPDATE_BUTTON_REDUCER
    [updateTodoAsync.pending]: state => {
      state.loading = true;
    },
    [updateTodoAsync.fulfilled]: state => {
      state.updatingModal = false;
      state.loading = false;
    },
  },
});
export const { cancelUpdate, updateRequest } = updateSlice.actions;
export default updateSlice.reducer;
