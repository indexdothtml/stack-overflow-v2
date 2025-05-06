import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  message: "",
  severity: "success",
};

export const notifySlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    showNotify: (state, action) => {
      state.show = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    hideNotify: (state) => {
      state.show = false;
      state.message = "";
      state.severity = "success";
    },
  },
});

// Action creators are generated for each case reducer function
export const { showNotify, hideNotify } = notifySlice.actions;

export default notifySlice.reducer;
