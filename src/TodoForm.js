import React, { useState } from 'react';

function TodoForm(props){
    const [currentTask, setCurrentTask] = useState('');

    const handleInput = event =>{
        setCurrentTask(event.target.value);
    };

    const handleSubmit = event =>{
        event.preventDefault();

        props.onSubmit({
            key: Date.now(),
            text: currentTask
        });
        setCurrentTask('');
    };

    return(
        <div>
            <form id="todoF" onSubmit={handleSubmit} > 
                <input type='text'
                placeholder='Create a task'
                value={currentTask} 
                onChange={handleInput} 
               />
                <button type="submit">  Add </button>
            </form>
        </div>
    )
}

export default TodoForm;
