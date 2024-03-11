// // slices/tasksSlice.ts
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ITask } from "../types/tasks"; // Update the import path according to your structure

// interface TasksState {
//   tasks: ITask[];
// }

// const initialState: TasksState = {
//   tasks: [],
// };

// export const tasksSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     setTasks: (state, action: PayloadAction<ITask[]>) => {
//       state.tasks = action.payload;
//     },
//     addTask: (state, action: PayloadAction<ITask>) => {
//       state.tasks.push(action.payload);
//     },
//     editTask: (state, action: PayloadAction<ITask>) => {
//       const index = state.tasks.findIndex(
//         (task) => task.id === action.payload.id
//       );
//       if (index !== -1) {
//         state.tasks[index] = action.payload;
//       }
//     },
//     deleteTask: (state, action: PayloadAction<string>) => {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     },
//   },
// });

// // Actions
// export const { setTasks, addTask, editTask, deleteTask } = tasksSlice.actions;

// // Reducer
// export default tasksSlice.reducer;
