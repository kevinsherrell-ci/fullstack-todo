import {createContext, useContext, useState} from 'react';

export const TodoContext = createContext('default');
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

export const TodoProvider = (props) => {
    const {children} = props;
    const [todos, setTodos] = useState([]);

    const getAllTodos = () => {
        fetch(`/todo/all`)
            .then((response)=>response.json())
            .then(response=>{
                setTodos(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const createTodo = (data)=>{
        console.log("create todo");
        fetch('/todo/add', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response=>response.json())
            .then(response=>setTodos([...todos, response.inserted]))
            .catch(err=>{
                console.log(err);
            })
    }
    const updateTodo = ()=>{

    }
    const deleteTodo = ()=>{

    }
    return (
        <TodoContext.Provider value={{
            todos: todos,
            getAllTodos: getAllTodos,
            createTodo: createTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => {
    return useContext(TodoContext);
}