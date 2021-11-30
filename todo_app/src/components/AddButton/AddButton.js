import React, { useState } from 'react';
import AddToDo from '../AddToDo/AddToDo';


function AddButton({ setInputText, todos, setTodos, inputText, setDateText, dateText, setDescription, description, time, setTime }) {
    
    //Using useState to enable show/hide of AddToDo Component
    const [addState, setAddState] = useState(false);

    //Creating Handler for show.hide of AddToDo Component
    const addHandler = () => {
        setAddState(!addState);
    }

    return (
        <div>
            <button onClick={addHandler} className="add-btn">Add Task</button>
            {/* Creating ternary operator for show/hide of AddToDo Component */}
            {addState ? <AddToDo addState={addState} setAddState={setAddState} inputText={inputText} time={time} setTime={setTime} description={description} setDescription={setDescription} dateText={dateText} todos={todos} setTodos={setTodos} setInputText={setInputText} setDateText={setDateText} /> : null}
        </div>
    )

}

export default AddButton;