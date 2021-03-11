import React, { useState, useContext } from "react";
import { DataContext } from "../ContextAPI/DataProvider";

const UsedForms = ({ action, label, name }) => {
  const [value, setValue] = useState("");

  const {
    state,
    state: { tasks, users, selectedUser },
    setState,
  } = useContext(DataContext);

  const actionObj = {
    addTasks: (text) => {
      const user = selectedUser;
      if (!user) {
        alert("please select user");
        return false;
      }
      setState({
        ...state,
        tasks: {
          ...tasks,
          [user.id]: [...(tasks[user.id] || []), text],
        },
        selectedTasksUser: [...(tasks[user.id] || []), text],
      });
      return true;
    },
    addUsers: (userName) => {
      const id = users.length;
      setState({ ...state, users: [...users, { id, userName }] });
      return true;
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      alert("Please fill the form before submitting");
      return;
    }
    const actionPassed =
      action === "addTask" || "addUser" ? actionObj[action](value) : false;

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
