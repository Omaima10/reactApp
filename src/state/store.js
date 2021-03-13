import React, { useContext } from "react";

const Store = React.createContext(null);
const initialState = {
  tasks: {},
  users: [],
  selectedUser: "",
};

const UserSelector = (selector) => {
  const { state } = useContext(Store);
  return state[selector];
};
const UserDispatch = () => {
  const { dispatch } = useContext(Store);
  return dispatch;
};
export { initialState, Store, UserSelector, UserDispatch };
