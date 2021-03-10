import "./App.css";
import React, { useState } from "react";
import TasksList from "../Tasks/TasksList";
import UsedForms from "../TodoForm/UsedForms";
import UserList from "../User/userList";

function App() {
  const [tasks, setTasks] = useState({});
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const addUsers = (userName) => {
    const id = users.length;
    setUsers([...users, { id, userName }]);
  };
  const selectUser = (user) => {
    setSelectedUser(user);
  };

  const addTasks = (text) => {
    const user = selectedUser;
    if (!user) {
      alert("Please select a user to add a Task !");
      return;
    }
    setTasks({ ...tasks, [user.id]: [...(tasks[user.id] || []), text] });
  };

  return (
    <div className="DoApp">
      <h1 id="p1">To-do List</h1>
      <div>
        <UsedForms name="User" action={addUsers} label="Add User" />
        <UsedForms name="Task" action={addTasks} label="Add Task" />
      </div>
      <div>
        <div>
          <UserList
            users={users}
            selectUser={selectUser}
            selectedUser={selectedUser}
          />
          <div>
            <TasksList
              user={selectedUser}
              tasks={tasks[selectedUser.id] || {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
