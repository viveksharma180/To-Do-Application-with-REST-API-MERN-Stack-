import React from 'react';
import axios from 'axios';

//Creating axios link to comunicate with database.
const api = axios.create({
    baseURL: `http://localhost:8000/todos/`
})

//importing states from app.js
function AddToDo({ addState, setInputText, setAddState, todos, setTodos, inputText, setDateText, dateText, setDescription, description, time, setTime }) {
    //Creating setTitle handler
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    //Creating date handler
    const dateHandler = (e) => {
        setDateText(e.target.value);
    }

    //Creating add button handler
    const submitTodoHandler = async (e) => {
        e.preventDefault();

        if(inputText === ''){
            alert('Title cannot be empty');
            return;
        }
        // setTodos([...todos,{id:Math.random()*1000,title: inputText,dueDate:dateText.toLocaleString(),description:description,dueTime:time, completed: false }]);

        // creating request for post method
        const request = {
            title: inputText,
            description: description,
            completed: false,
            dueDate: dateText.toLocaleString(),
            dueTime: time
        };
        //Implementing post method having request.
        // try {
        //     const response = await api.post('/', request);
        //     setTodos([...todos, response.data]);

        // } catch (error) {
        //     console.log(error.message);
        // }

        try {
            postData('http://localhost:8000/todos/',request)
            .then(data => {
                setTodos([...todos,data]);
            })

        } catch (error) {
            console.log(error.message);
        }

        //Clear the input fields
        setInputText('');
        setDateText('');
        setDescription('');
        setTime('');
        setAddState(false);
    }

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
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

    //Creating description handler
    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    }

    //Creating time handler
    const timeHandler = (e) => {
        setTime(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Enter Title" />
            <input value={description} onChange={descriptionHandler} type="text" className="description" placeholder="Enter Description" />
            <input value={dateText} onChange={dateHandler} type="date" className="date" min="2021-11-01" max="2030-12-31" />
            <input value={time} onChange={timeHandler} type="time" className="time" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit" >
                <i> +  </i>
            </button>
        </form>
    );
}

export default AddToDo;