// // store.ts
// import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper, HYDRATE } from "next-redux-wrapper";
// import tasksReducer from "/Users/elieelkhoury/Desktop/Eurisko/my_todo_app/store/taskSlice"; // Update the import path according to your structure

// const combinedReducer = (
//   state: any,
//   action: { type: string; payload: any }
// ) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       ...action.payload, // apply delta from hydration
//     };
//     return nextState;
//   } else {
//     return tasksReducer(state, action);
//   }
// };

// export const makeStore = () =>
//   configureStore({
//     reducer: combinedReducer,
//   });

// export const wrapper = createWrapper(makeStore, { debug: true });
