import {createContext, useContext, useState} from 'react';

export const TodoContext = createContext('default');
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

export const TodoProvider = (props) => {
    const {children} = props;
    const [todos, setTodos] = useState([]);
    console.log(todos);
    const getAllTodos = () => {
        fetch(`/todo/all`)
            .then((response) => response.json())
            .then(response => {
                setTodos(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const createTodo = (data) => {
        console.log("create todo");
        fetch('/todo/add', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => setTodos([...todos, response.inserted]))
            .catch(err => {
                console.log(err);
            })
    }
    const updateTodo = (data, id) => {
        console.log("update todo");
        fetch(`/todo/update/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response=>response.json())
            .then((response)=>{
                let todoCopy = [...todos];
                const originalTodo = todoCopy.find(todo=>todo._id === response.data._id);
                console.log("ORIGINAL TODO", originalTodo);
                Object.assign(originalTodo, response.data);
                setTodos(todoCopy);
            })
            .catch(err=>{
                console.log(err);
            })
    }
    const deleteTodo = (id) => {
        fetch(`/todo/delete/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            },
        })
            .then(response => response.json)
            .then(() => {
                setTodos(todos.filter(todo => todo._id.toString() !== id)
                )
            })
            .catch(err => console.log(err));
    }
    return (
        <TodoContext.Provider value={{
            todos: todos,
            getAllTodos: getAllTodos,
            createTodo: createTodo,
            deleteTodo: deleteTodo,
            updateTodo: updateTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => {
    return useContext(TodoContext);
}