import AddTodo from "./AddTodo";
import { AppName } from "./AppName";
import TodoList from "./TodoList";
import "./TodoApp.css"

function TodoApp() {
    return <>
        <center className='todo-container'><AppName></AppName></center>
        <div className="container text-center">
            <AddTodo></AddTodo>
            <TodoList></TodoList>
        </div>
    </>
}

export default TodoApp;