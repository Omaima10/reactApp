import React from "react";

const userList = ({ users, selectUser, selectedUser }) => {
  if (users.length === 0) return null;

  const handleChange = ({ target: { value } }) => {
    selectUser(users[value]);
  };

  return (
    <div className="w-50 " align="center">
      {" "}
      <br />
      <select
        class="custom-select custom-select-lg bg-secondary text-center"
        onChange={handleChange}
      >
        <option class=" bg-light" selected>
          Choose User
        </option>
        {users.map((user, index) => {
          return (
            <option class=" bg-light" value={user.id} key={index}>
              {user.userName}
            </option>
          );
        })}
      </select>
      <br />
    </div>
  );
};

export default userList;
