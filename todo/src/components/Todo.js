import React, { useState, useReducer } from 'react';


const Todo = () => {
    const [todoState, dispatch] = useReducer(todoReducer, initialTodo);
    const [newTodo, setNewToDo] = useState("");


    const handleChange = (e) => {
        setNewToDo(e.target.value);
    }

    const handleCompleted = (itemId) => {
        dispatch ({ type: "TODO_CLICKER", payload: itemId });
    }

    const handleClearList = (e) => {
        dispatch({ type: "CLEAR-COMPLETED" });
    }
    return (
        <>
        <form 
        onSubmit={(e) => {
        e.preventDefault();
        }}
        >
        <label htmlFor='inputToDo'>
            Enter your Todo
            <Input 
            id='inputToDo'
            type='text'
            name='inputSelect'
            value={newTodo}
            onChange={handleChange}
            />
        </label>
        <button 
        onClick={() => {
            dispatch({ type: "ADDED_TODO",  payload: newTodo });
            setNewToDo("");
        }}
        >
            Add
        </button>
        <button name='clearButton' onClick={handleClearList}>
        Clear
        </button>
        </form>
        <TodoList />
        </>
    )
};

export default Todo