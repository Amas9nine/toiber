import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/slice";

export const reducers = combineReducers({
  user: userReducer
});

export const store = configureStore({
  reducer: reducers
});
