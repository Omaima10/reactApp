import React from "react";
import "./TasksList.css";

const TasksList = (props) => {
  if (!props.user)
    return <h1>Add or Select a User to fill your to-do List with Tasks </h1>;
  if (!props.tasks.length) return <h1>Add your Tasks</h1>;

  return (
    <div>
      <ul>
        {props.tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
};

export default TasksList;
