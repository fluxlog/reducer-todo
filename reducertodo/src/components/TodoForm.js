import React, {useState, useReducer } from 'react';
import { dataList, todoReducer } from '../reducers/Reducer';

export const TodoForm = props => {
    const [state, dispatch] = useReducer (todoReducer, dataList);
    const [input, setInput] = useState('');
    
    const handleChanges = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payLoad: input})
    };

    const handleRemove = e => {
        e.preventDefault();
        dispatch({ type: 'REMOVE_TODO', payLoad: input})
    }



return (
    <div>
        <h1>Add stuff</h1>
        <input
        className="input"
        type="text"
        value={input}
        name="input"
        onChange={handleChanges}
        />
        <button onClick={handleSubmit}>Add</button>
        <button onClick={handleRemove}>Remove</button>
    </div>
)


}


