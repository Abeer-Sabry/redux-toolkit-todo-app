import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: { openModal: false },
  reducers: {
    showModal: state => {
      state.openModal = true;
    },
    closeModal: state => {
      state.openModal = false;
    },
  },
});
export const { showModal, closeModal } = modelSlice.actions;
export default modelSlice.reducer;
