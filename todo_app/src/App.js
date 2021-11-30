import React, { useState, useEffect } from 'react';
import './App.scss';
import ToDoComponent from './components/ToDoComponent/ToDoComponent';
import AddButton from './components/AddButton/AddButton';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:8000/todos/`
})

function App() {
//Creating useStates 
  const [inputText, setInputText] = useState('');
  const [dateText, setDateText] = useState([]);
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');

  //Creating function to fetch data from REST API
  const getData = async (request,response) => {
    // const response = await api.get('/');
  

    console.log(response.data);
    return response.data;
    // .then(res => {
    // console.log(res.data)
  };
//Using useEffect to implement fetch
  useEffect(() => {
    // const getAllToDos = async () => {
    //   const allTodos = await getData();
    //   if (allTodos) {
    //     setTodos(allTodos)
    //   }
    // };
    // getAllToDos();
    fetch('http://localhost:8000/todos/')
    .then(response => response.json())
    .then(data => setTodos(data))
  }, []);


  return (
    <div>
      <header>To-Do List</header>
      <AddButton inputText={inputText} time={time} setTime={setTime} description={description} setDescription={setDescription} dateText={dateText} todos={todos} setTodos={setTodos} setInputText={setInputText} setDateText={setDateText} />
      {/* <AddToDo inputText={inputText} time={time} setTime={setTime} description={description} setDescription={setDescription} dateText={dateText} todos={todos} setTodos={setTodos} setInputText={setInputText} setDateText={setDateText}></AddToDo> */}
      <ToDoComponent setTodos={setTodos} todos={todos} ></ToDoComponent>
    </div>
  );
}

export default App;
