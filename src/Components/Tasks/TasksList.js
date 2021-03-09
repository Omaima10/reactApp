import React from "react";

const TasksList = ({ content }) => {
  if (!content)
    return (
      <h1 className="text-center  font-weight-normal font-italic">
        Add or Select a User to fill your to-do List with Tasks{" "}
      </h1>
    );
  if (!content.userTasks.length)
    return (
      <h1 class="text-center font-weight-normal font-italic">Add your Tasks</h1>
    );

  return (
    <div className="w-50">
      <ul>
        {content.userTasks.map((task, index) => {
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
