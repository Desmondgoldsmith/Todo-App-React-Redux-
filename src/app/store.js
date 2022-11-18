import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../Slices/todoSlice"
export const store = configureStore({
  reducer: {
    todo : todoReducer,
  },
});
