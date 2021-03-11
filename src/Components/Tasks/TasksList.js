import React, { useContext } from "react";
import { DataContext } from "../../state/DataProvider";

const TasksList = () => {
  const {
    state: { selectedTasksUser, selectedUser },
  } = useContext(DataContext);

  if (!selectedUser)
    return (
      <h2 className="text-center  font-weight-normal font-italic">
        Add or Select a User to fill your to-do List with Tasks{" "}
      </h2>
    );
  if (selectedTasksUser.length === 0)
    return (
      <h2 class="text-center font-weight-normal font-italic">Add your Tasks</h2>
    );

  return (
    <div className="w-50">
      <ul>
        {selectedTasksUser.map((task, index) => {
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
