import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: []
  },
  reducers: {}
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
