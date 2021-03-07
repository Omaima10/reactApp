import React from "react";
import "./TasksList.css";

const TasksList = ({ content }) => {
  if (!content)
    return <h1>Add or Select a User to fill your to-do List with Tasks </h1>;
  if (!content.userTasks.length) return <h1>Add your Tasks</h1>;

  return (
    <div>
      <ul>
        {content.userTasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
};

export default TasksList;
