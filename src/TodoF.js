import React, { useState } from 'react';

function TodoF(props){
    const [input, setText] = useState('');

    const handleInput = event =>{
        setText(event.target.value);
    };

    const handleSubmit = event =>{
        event.preventDefault();

        props.onSubmit({
            key: Date.now(),
            text: input
        });
        setText('');
    };

    return(
        <div>
            <form id="todoF" onSubmit={handleSubmit} > 
                <input type='text'
                placeholder='Create a task'
                value={input} 
                onChange={handleInput} 
               />
                <button type="submit">  Add </button>
            </form>
        </div>
    )
}

export default TodoF;