

// {
//     id: "4387f4d8-aeac-4559-9f1b-3c5d537c955c",
//         title: "Implement Fullstack ToDo List",
//     description: "Implement the fullstack todo list application.",
//     isComplete: false,
//     priority: "High",
//     creationDate: new Date(),
//     lastModified: new Date(),
//     completedDate: null
// }
import {useContext} from "react";
import {TodoContext} from "../Context/Todo";

const TodoCard = (props)=>{
    const todoData = useContext(TodoContext);
    const {deleteTodo, updateTodo} = todoData;

    const {todo} = props;
    const {_id,title, description, isComplete,priority, creationDate, lastModified, completedDate } = todo;
    return (
        <div className="todo-card">
            {completedDate && <p>"COMPLETED"</p>}
            <h2>{title}</h2>
            <p>{_id}</p>
            <p>{description}</p>
            <p>{isComplete}</p>
            <p>{priority}</p>
            <p>{creationDate}</p>
            <p>{lastModified}</p>
            {completedDate && <p>completedDate</p>}
            <button onClick={()=>deleteTodo(todo._id)}>Delete</button>
            <button onClick={()=>{
                const data = {completedDate: new Date()}
                updateTodo(data, todo._id);
            }}>Complete</button>
        </div>
    )
}
export default TodoCard;