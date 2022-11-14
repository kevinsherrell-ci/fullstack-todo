import logo from './logo.svg';
import './App.css';
import React, {useEffect, useContext} from "react";
import {TodoContext} from './Context/Todo';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import TodoFormPage from "./Pages/TodoFormPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GlobalLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: 'TodoFormPage',
                element: <TodoFormPage/>
            }
        ]
    }
])

function App(props) {
    const todoData = useContext(TodoContext);
    console.log(todoData);
    useEffect(() => {
        todoData.getAllTodos();
    }, [])
    const data = {
        title: "Front end test",
        description: "Create an express route that will respond with the mock todo list.",
        isComplete: false,
        priority: "High",
    }
    const handleCreate = () => {
        console.log("handle create");
    }
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
