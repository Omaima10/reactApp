import React, { useContext } from "react";
import { DataContext } from "../ContextAPI/DataProvider";

const UserList = () => {
  const {
    state,
    state: { tasks, users },
    setState,
  } = useContext(DataContext);

  if (users.length === 0) return null;

  const handleChange = ({ target: { value: id } }) => {
    setState({
      ...state,
      selectedUser: { ...users[id] },
      selectedTasksUser: [...(tasks[id] || [])],
    });
  };

  return (
    <div className="w-50 " align="center">
      {" "}
      <br />
      <select
        class="custom-select custom-select-lg bg-secondary text-center"
        onChange={handleChange}
      >
        <option class=" bg-light" selected disabled>
          Choose User
        </option>
        {users.map((user, index) => {
          return (
            <option class=" bg-light" value={user.id} key={user.id}>
              {user.userName}
            </option>
          );
        })}
      </select>
      <br />
    </div>
  );
};

export default UserList;
