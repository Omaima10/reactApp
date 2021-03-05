import './App.css';
import React from 'react'
import ListTasks from './ListTasks'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tasks:[],
      CurrentTsak:{
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  
  }
  handleInput(t){
    console.log("test")
    this.setState({
      CurrentTsak: {
        text: t.target.value,
        key: Date.now()
      }
    })
  }
  addTask(t){
    //to prevent the default load of the page when we click the button add
    t.preventDefault();
    const newTask= this.state.CurrentTsak;
    if(newTask.text !==""){ 
      const tasks=[...this.state.tasks, newTask]
      //update state with new task
      this.setState({
        tasks:tasks,
        CurrentTsak:{
          text:'',
          key:''
          }
        })
      }
}
  deleteTask(key){
    const taskTodelete = this.state.tasks.filter(task => task.key !== key);
    this.setState({
      tasks:taskTodelete
    })
  }
  
  render(){
    return (
    <div className="DoApp">
    <header>
      <p id="p1">Todo List</p>
      <form id="todoF" onSubmit={this.addTask}>
        <input type="text" placeholder="Create Task" value={this.state.CurrentTsak.text} onChange={this.handleInput} />
        <button type="submit"> Add </button>
      </form>
    </header>
    <ListTasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
    </div>
    );
  }
}
export default App;
