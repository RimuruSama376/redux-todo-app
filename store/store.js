import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./todo";
export const store = configureStore({
  reducer: {
    currentTasks: tasksReducer,
  },
});
