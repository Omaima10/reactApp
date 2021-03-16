import React, { useState } from "react";
import * as actionTypes from "../../state/actionTypes";
import * as actionCreators from "../../state/actionCreators";
import { UserSelector, UserDispatch } from "../../state/store";

const UsedForms = ({ actionType, label, name }) => {
  const [value, setValue] = useState("");
  const dispatch = UserDispatch();
  const selectedUser = UserSelector("selectedUser");

  const addTask = (taskText) => {
    if (!selectedUser) {
      alert("please select user");
      return false;
    }
    dispatch(actionCreators.addTask(taskText));
    return true;
  };
  const addUser = (userName) => {
    dispatch(actionCreators.addUser(userName));
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      alert("Please fill the form before submitting");
      return;
    }
    const actionPassed =
      actionType === actionTypes.add_Task ? addTask(value) : addUser(value);
    if (actionPassed) setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div class=" form-group row h-100 justify-content-center align-items-center">
      <form className="w-50" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={value}
          placeholder={name}
        />
        <div>
          <button className="btn btn-dark font-italic font-weight-bold">
            {label}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UsedForms;
