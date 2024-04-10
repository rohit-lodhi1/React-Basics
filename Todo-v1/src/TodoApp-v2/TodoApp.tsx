import AddTodo from "./components/AddTodo";
import { AppName } from "./components/AppName";
import TodoList from "./components/TodoList";
import "./TodoApp.css"
import { useReducer, useState } from "react";
import EmptyMessage from "./components/EmptyMessage";
import { TodoItemsContext, TodoItemsContextProvider } from "./store/TodoItemsStore";



function TodoAppV2() {


    // const [todoList, setTodoList] = useState(intialTodos);


    return <>
        <TodoItemsContextProvider>
            <center className='todo-container'><AppName></AppName></center>
            <div className="container text-center">

                <AddTodo ></AddTodo>
                <EmptyMessage ></EmptyMessage>
                <TodoList ></TodoList>
            </div>
        </TodoItemsContextProvider>
    </>
}

export default TodoAppV2;