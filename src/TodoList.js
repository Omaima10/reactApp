import React, { useState } from 'react';
import TodoForm from './TodoForm';
import './TodoList.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTrash);

function TodoList(){
    const [tasks, setTasks] = useState([]);
    const addTask = newTask =>{
        setTasks([newTask, ...tasks]);
    }
    const deleteTask = key =>{
        const remainingTasks = [...tasks].filter(task => task.key !== key);
        setTasks(remainingTasks);
      }

    return(
        <div>
            <TodoForm onSubmit={addTask}/>
            <div>
                {tasks.map(item =>
                    <div className="list" key={item.key}> 
                        <p> {item.text} 
                        <span>
                            <FontAwesomeIcon className="icons" icon="trash"  
                            onClick={ () => deleteTask(item.key)
                            }/>
                        </span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default TodoList;