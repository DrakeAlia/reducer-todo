import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
	// console.log("props",props.info)
	// const [state, dispatch] = useReducer(reducer, initialList)

	// console.log("state", state)
	return (
		<div className="todo-list">
			{props.info.todo.map((todo) => {
				return (
					<div
						key={todo.id}
						// onClick={() => {
						// 	props.toggleItem(todo.id);
						// }}
						className={`todo${todo.finished ? 'finished' : ''}`}
					>
						{/* <p>{todo.task}</p> */}
                        <Todo
                        item={todo}
                        toggleItem={props.toggleItem}
                        />
					</div>
				);
			})}

		</div>
	);
};
export default TodoList;
