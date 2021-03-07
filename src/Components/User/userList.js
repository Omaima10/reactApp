import React from "react";
import "../User/userList.css";

const userList = ({ users, selectUser, selectedUser }) => {
  return (
    <div>
      <ul>
        {users.map((user, index) => {
          return (
            <li
              className={
                selectedUser && user.id === selectedUser.id
                  ? "selected user"
                  : "user"
              }
              key={index}
              onClick={() => selectUser(user)}
            >
              {user.userName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default userList;
