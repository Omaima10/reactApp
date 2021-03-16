import * as actionTypes from "./actionTypes";

const reducer = (state, action) => {
  const { tasks, selectedUser, users } = state;
  const { userId, taskText, userName } = action.payload;

  switch (action.type) {
    case actionTypes.add_Task:
      return {
        ...state,
        tasks: {
          ...tasks,
          [selectedUser.id]: [...(tasks[selectedUser.id] || []), taskText],
        },
      };
    case actionTypes.add_User:
      return {
        ...state,
        users: [...users, { id: users.length, userName: userName }],
      };
    case actionTypes.select_User:
      return {
        ...state,
        selectedUser: { ...users[userId] },
      };
    default:
      return state;
  }
};
export default reducer;
