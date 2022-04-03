import { configureStore } from "@reduxjs/toolkit";
// Slice
import todo from "./todoSlice";
import post from "./postSlice/postSlice";
import update from "./updateSlice/updateSlice";
import deleteTodo from "./deleteSlice/deleteSlice";
const store = configureStore({
  reducer: {
    todo,
    post,
    update,
    deleteTodo,
  },
});
export default store;
