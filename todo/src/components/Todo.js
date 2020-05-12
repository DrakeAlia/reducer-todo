import React from 'react'
import './Todo.css';

// STEP 4 - Toggle the completed field
const Todo = props => {
    console.log("item",props)
    return (
        <div 
        className={
            `item ${props.item.finished ? 'finished' : ''}`}
            onClick={()=> props.toggleItem(props.item.id)}
            >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;