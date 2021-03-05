import React from 'react';
import './ListTasks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 function ListTasks(props){
     const {deleteTask, tasks} = props;
     console.log(tasks)
     return(
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
     )
 }
 export default ListTasks;