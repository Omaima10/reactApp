import React, { useState } from "react";
import TasksList from "../Tasks/TasksList";
import UsedForms from "../TodoForm/UsedForms";
import UserList from "../User/userList";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container">
      <h1 class=" text-center display-4 font-italic font-weight-bold text-primary">
        To-do List
      </h1>
      <div className=" card-body p-4 bg-primary">
        <div className="bg-secondary text-dark card-body  text-center">
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
            <div className="card-body flex-row-reverse ">
              <TasksList
                user={selectedUser}
                tasks={tasks[selectedUser.id] || {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
