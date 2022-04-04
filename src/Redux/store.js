import { configureStore } from "@reduxjs/toolkit";
// Slice
import todo from "./todoSlice";
import post from "./postSlice/postSlice";
import update from "./updateSlice/updateSlice";
import deleteTodo from "./deleteSlice/deleteSlice";
import model from "./modalSlice/modalSlice";
const store = configureStore({
  reducer: {
    todo,
    post,
    update,
    deleteTodo,
    model,
  },
});
export default store;
