import { createSlice } from "@reduxjs/toolkit";

const currentTasks = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload.task);
    },
    removeAllTasks: (state, action) => {
      state.tasks = [];
    },
  },
});

export const addTask = currentTasks.actions.addTask;
export const removeAllTasks = currentTasks.actions.removeAllTasks;

export default currentTasks.reducer;
