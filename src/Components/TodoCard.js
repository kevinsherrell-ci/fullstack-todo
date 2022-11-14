

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
const TodoCard = (props)=>{
    const {todo} = props;
    const {_id,title, description, isComplete,priority, creationDate, lastModified, completedDate } = todo;
    return (
        <div className="todo-card">
            <h2>{title}</h2>
            <p>{_id}</p>
            <p>{description}</p>
            <p>{isComplete}</p>
            <p>{priority}</p>
            <p>{creationDate}</p>
            <p>{lastModified}</p>
            {completedDate && <p>completedDate</p>}
        </div>
    )
}
export default TodoCard;