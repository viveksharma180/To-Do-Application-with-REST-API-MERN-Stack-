import React,{useState,useEffect} from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:8000/todos/`
})

function EditTodo({todo,todos,setTodos}) {

    const [editTitle,setEditTitle] = useState(todo.title);
    const [editDescription,setEditDescription] = useState(todo.description);
    const [editDate,setEditDate] = useState(todo.dueDate);
    const [editTime, setEditTime] = useState(todo.dueTime);

    //Creating function to fetch data from REST API

    const editTitleHandler = (e) => {
        setEditTitle(e.target.value);
    }

    const editDescriptionHandler = (e) => {
        setEditDescription(e.target.value);
    }

    const editDateHandler = (e) => {
        setEditDate(e.target.value);
    }

    const editTimeHandler = (e) => {
        setEditTime(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        // creating request for post method
        const request = {
            id: todo.id,
            title: editTitle,
            description: editDescription,
            completed: todo.completed,
            dueDate: editDate.toLocaleString(),
            dueTime: editTime
        };
        //Implementing post method having request.
        // try {
        //     await api.put(`/${todo.id}`, request);
        //     window.location.reload();

        // } catch (error) {
        //     console.log(error.message);
        // }

        try {
        editData(`http://localhost:8000/todos/${todo.id}`,request)
        // .then(data => {
        //     setTodos([...todos,data]);
        // })
        window.location.reload();

        } catch (error) {
            console.log(error.message);
        }
    }

    async function editData(url = '', data = {}) {
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

    
    
    return (
        <form className="form-edit">
            <input onChange={editTitleHandler} defaultValue={todo.title} type="text" className="todo-input-edit"></input>
            <input onChange={editDescriptionHandler} defaultValue={todo.description} type="text" className="description-edit" placeholder="Enter Description" />
            <input onChange={editDateHandler} defaultValue={todo.dueDate} type="date" className="date" min="2021-11-01" max="2030-12-31" />
            <input onChange={editTimeHandler} defaultValue={todo.dueTime} type="time" className="time" />
            <button onClick={submitHandler} className="todo-button-edit" type="submit" >
                <i>Submit</i>
            </button>
        </form>
    )
}

export default EditTodo;