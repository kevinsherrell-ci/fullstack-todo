import {createBrowserRouter} from "react-router-dom";
import GlobalLayout from "../Layouts/GlobalLayout";
import HomePage from "./HomePage";
import React, {useContext, useState} from "react";
import {TodoContext} from "../Context/Todo";

const TodoFormPage = () => {
    const todoData = useContext(TodoContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [priority, setPriority] = useState('');
    console.log(title);
    console.log(description);
    console.log(isComplete);
    console.log(priority);

    const data = {
        title: title,
        description: description,
        isComplete: isComplete,
        priority: priority
    }

    return (
        <div>
            <label htmlFor="">Title:</label>
            <input type="text" onChange={(e)=>{
                setTitle(e.target.value);
            }}/>


            <label htmlFor="">Description: </label>
            <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{
                setDescription(e.target.value);
            }}></textarea>

            <div onChange={(e)=>{
                let value = e.target.value === 'false' ? false : true;
                setIsComplete(value);
            }}>
                <label htmlFor="">isComplete: </label>
                <div>
                    <label htmlFor="">false</label><input type="radio" name={'priority'} value={'false'}/>
                </div>
                <div>
                    <label htmlFor="">true</label>
                    <input type="radio" name={'priority'} value={'true'}/>
                </div>
            </div>


            <label htmlFor="">Priority: </label>
            <select name="" id="" onChange={(e)=>{
                setPriority(e.target.value);
            }}>
                <option value=""></option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button onClick={()=>todoData.createTodo(data)}>submit</button>
        </div>
    )
}

export default TodoFormPage;