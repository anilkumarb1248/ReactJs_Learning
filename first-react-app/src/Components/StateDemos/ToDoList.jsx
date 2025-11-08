import { useState } from "react";


function ToDoList(){

    const [todos, setToDos] = useState(['Learn React', 'Learn AWS']);

    const addTodos = () =>{
        setToDos([...todos, "Learn AI"]);
    };

    return(
        <div>
            <h2>ToDos: <span> <button onClick={addTodos}> Add Todo </button> </span></h2>
            <ul>
                {todos.map((todo, index) =>(
                    <li key={index}> {todo} </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;