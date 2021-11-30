import React from 'react';
import Todo from './Todo';

function ToDoComponent({ todos, setTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* Mapping each todo with Todo class. */}
                {todos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        todo={todo}
                        title={todo.title}
                        description={todo.description}
                        dueDate={todo.dueDate}
                        dueTime={todo.dueTime}
                        completed = {todo.completed} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoComponent;