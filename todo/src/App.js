import React, { useState, useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';
import { initialList, reducer } from './reducers/reducers';

// STEP 2 - Set up state in your component
// Build a function that will dispatch an action to add a new todo

function App() {
	const [ state, dispatch ] = useReducer(reducer, initialList);
	console.log('useReducer=state', state);
	console.log('useReducer=dispatch', dispatch);
	const [ taskInput, setTaskInput ] = useState('');

	const inputChange = (event) => {
		event.preventDefault();
		setTaskInput(event.target.value);
	};

	const taskSubmit = (event) => {
		event.preventDefault();
		dispatch({ type: 'ADD_TASK', payload: taskInput });
	};

	const toggleItem = (item) => {
		dispatch({ type: 'TOGGLE_IT', payload: item });
	};

	const clearCompleted = (event) => {
		event.preventDefault();
		dispatch({ type: 'CLEAR_ALL' });
	};

	return (
		<div className="App">
			<div className="header">
				<h1>Drake's ToDo List</h1>
				<TodoForm
					info={state}
					taskSubmit={taskSubmit}
					clearCompleted={clearCompleted}
					inputChange={inputChange}
				/>
			</div>
			<TodoList info={state} toggleItem={toggleItem} />
		</div>
	);
}

export default App;
