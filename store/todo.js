import { createSlice } from "@reduxjs/toolkit";

const currentTasks = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    activeTask: null,
  },
  reducers: {
    addTask: (state, action) => {
      if (action.payload.title.trim() === "") return state;
      if (state.tasks.length === 0) state.activeTask = action.payload;
      state.tasks.push(action.payload);
    },
    removeAllTasks: (state, action) => {
      state.activeTask = null;
      state.tasks = [];
    },
    setActiveTask(state, action) {
      state.activeTask = action.payload;
    },
  },
});

export const addTask = currentTasks.actions.addTask;
export const removeAllTasks = currentTasks.actions.removeAllTasks;
export const setActiveTask = currentTasks.actions.setActiveTask;

export default currentTasks.reducer;
