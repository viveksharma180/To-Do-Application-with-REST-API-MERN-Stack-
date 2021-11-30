import React from "react";

// Description element
function Description({ description, todos, setTodos, todo }) {
    return (
        <li className={`todo-description ${todo.completed ? "completed" : ""}`}>Description: {description}</li>
    )
}

export default Description;