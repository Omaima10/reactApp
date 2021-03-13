import React from "react";
import { UserSelector } from "../../state/store";

const TasksList = () => {
  const selectedUser = UserSelector("selectedUser");
  const tasks = UserSelector("tasks");

  if (!selectedUser)
    return (
      <h2 className="text-center  font-weight-normal font-italic">
        Add or Select a User to fill your to-do List with Tasks{" "}
      </h2>
    );
  if (!tasks.hasOwnProperty(selectedUser.id))
    return (
      <h2 class="text-center font-weight-normal font-italic">Add your Tasks</h2>
    );

  return (
    <div className="w-50">
      <ul>
        {tasks[selectedUser.id].map((task, index) => {
          return (
            <li
              className="list-group-item list-group-item-primary w-50"
              key={index}
            >
              {task}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TasksList;
