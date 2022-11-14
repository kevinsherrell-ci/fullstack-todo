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
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <TodoContext.Provider value={{
            todos: todos,
            getAllTodos: getAllTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => {
    return useContext(TodoContext);
}