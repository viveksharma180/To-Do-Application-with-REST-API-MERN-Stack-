import React, { useState } from 'react';
import axios from 'axios';
import Description from './Description';
import EditTodo from '../EditTodo/EditTodo';

//Creating axios link to comunicate with database.
const api = axios.create({
    baseURL: `http://localhost:8000/todos/`
})


const Todo = ({ title, description, dueDate, dueTime, todos, setTodos, todo }) => {

    const [showDescription, setShowDescription] = useState(false);
    const [showDateTime, setShowDateTime] = useState(false);
    const [showEdit,setShowEdit] = useState(false);

    // Creating descriptionHandler
    const descriptionHandler = () => {
        setShowDescription(!showDescription);
        setShowDateTime(!showDateTime);
    }

    const editHandler = () => {
        setShowEdit(!showEdit);
    }

    // Creating delete element handler
    const deleteHandler = async () => {
        setTodos(todos.filter((el) => el.id !== todo.id));

        // await api.delete(`/${todo.id}`);

        deleteData(`http://localhost:8000/todos/${todo.id}`);
    }

    // Creating mark complete handler
    const completeHandler = async () => {

        setTodos(todos.map(el => {
            if (el.id === todo.id) {
                return {
                    ...el, completed: !el.completed
                };
            }
            return el;
        })
        )

        // PUT request for updating the todo complete or uncomplete in the database
        // await api.put(`/${todo.id}`, { id: todo.id, completed: !todo.completed })
        const request = {
            id: todo.id,
            completed: !todo.completed,
        };

        putData(`http://localhost:8000/todos/${todo.id}`,request)
        // .then(data => {
        //     setTodos([...todo,data]);
        // })
    }

    async function putData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
      async function deleteData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }


    return (
        <div className="todo">
            <div className="todo-1">
                <li className={`todo-item ${todo.completed ? "completed" : ""} `}>{title}</li>
                <button onClick={descriptionHandler} className="arrow-btn">View</button>
                <button onClick={editHandler} className="edit-btn">Edit</button>
                <button onClick={completeHandler} className="complete-btn">
                    <i className="fas fa-check">Completed</i>
                </button>
                <button onClick={deleteHandler} className="delete-btn">
                    <i className="fas fa-trash">Delete</i>
                </button>
            </div>
            <div className="todo-2">
                {showDescription ? <Description description={description} todos={todos} setTodos={setTodos} todo={todo}></Description> : null}
                {/* <li className={`todo-description ${todo.completed ? "completed" : ""}`}>{description}</li> */}
                {showDateTime ? <li className={`todo-date ${todo.completed ? "completed" : ""}`}>Due on {dueDate} {dueTime}</li> : null}
                {/* <li className={`todo-date ${todo.completed ? "completed" : ""}`}>Due on {dueDate} {dueTime}</li> */}
            </div>
            <div>
                {showEdit ? <EditTodo todo={todo} todos={todos} setTodos={setTodos} /> : null}
            </div>
        </div>
    );
}

export default Todo;