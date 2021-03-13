import React from "react";
import TasksList from "../Tasks/TasksList";
import UsedForms from "../TodoForm/UsedForms";
import UserList from "../User/userList";
import "bootstrap/dist/css/bootstrap.min.css";
import * as actionTypes from "../../state/actionTypes";
import DataProvider from "../../state/DataProvider";

function App() {
  return (
    <DataProvider>
      <div className="container">
        <h1 class=" text-center display-4 font-italic font-weight-bold text-primary">
          To-do List
        </h1>
        <div className=" card-body p-4 bg-primary">
          <div className="bg-secondary text-dark card-body  text-center">
            <UsedForms
              name="User"
              actionType={actionTypes.add_User}
              label="Add User"
            />
            <UsedForms
              name="Task"
              actionType={actionTypes.add_Task}
              label="Add Task"
            />
          </div>
          <div>
            <div>
              <UserList />
              <div className="card-body flex-row-reverse ">
                <TasksList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
