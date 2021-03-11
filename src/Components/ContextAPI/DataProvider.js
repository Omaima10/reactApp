import React, { useState, createContext } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [state, setState] = useState({
    tasks: {},
    users: [],
    selectedUser: null,
    selectedTasksUser: [],
  });

  return (
    <DataContext.Provider value={{ state, setState }}>
      {children}
    </DataContext.Provider>
  );
};
