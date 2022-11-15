import {useContext, useState} from "react";
import {TodoContext} from "../Context/Todo";
import TodoCard from "../Components/TodoCard";

const HomePage = (props) => {
    const todoData = useContext(TodoContext);
    const {todos} = todoData;

    const mapTodos = todos.map(todo => {
        return <TodoCard key={todo._id} todo={todo}/>
    })

    return (
        <div className="home">
            <h1>Fullstack TODO Application</h1>
            {mapTodos}
        </div>
    )
}
export default HomePage;