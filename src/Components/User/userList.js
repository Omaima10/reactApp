import React from "react";
import { UserSelector, UserDispatch } from "../../state/store";
import * as actionCreators from "../../state/actionCreators";

const UserList = () => {
  const dispatch = UserDispatch();
  const users = UserSelector("users");

  if (users.length === 0) return null;

  const handleChange = ({ target: { value: userId } }) => {
    dispatch(actionCreators.selectUser(userId));
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
