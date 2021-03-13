import * as actionTypes from "./actionTypes";

export const addUser = (userName) => ({
  type: actionTypes.add_User,
  payload: { userName },
});
export const addTask = (taskText) => ({
  type: actionTypes.add_Task,
  payload: { taskText },
});
export const selectUser = (userId) => ({
  type: actionTypes.select_User,
  payload: { userId },
});
