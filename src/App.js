import logo from './logo.svg';
import './App.css';
import {useEffect, useContext} from "react";
import {TodoContext} from './Context/Todo';
function App(props) {
    const todoData = useContext(TodoContext);
    console.log(todoData);
    useEffect(() => {
        todoData.getAllTodos();
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
