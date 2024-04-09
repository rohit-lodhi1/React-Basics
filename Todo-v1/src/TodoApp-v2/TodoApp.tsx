import AddTodo from "./components/AddTodo";
import { AppName } from "./components/AppName";
import TodoList from "./components/TodoList";
import "./TodoApp.css"
import { useState } from "react";
import EmptyMessage from "./components/EmptyMessage";
import { TodoItemsContext } from "./store/TodoItemsStore";

function TodoAppV2() {

    var intialTodos: any[] = [];

    const [todoList, setTodoList] = useState(intialTodos);

    const onAdd = (itemName: any, todoDate: any) => {
        // let list = [...todoList, { taskName: itemName, date: todoDate }]
        setTodoList((currentValue) => [...currentValue, { taskName: itemName, date: todoDate }]);
    }

    const onDelete = (id: any) => {
        console.log(id);
        let newList = [...todoList];
        newList.splice(id - 1, 1);

        setTodoList(newList);

    }

    let show = todoList.length == 0;


    return <>
        <TodoItemsContext.Provider value={{ items: todoList, addNewItem: onAdd, deleteItem: onDelete }} >
            <center className='todo-container'><AppName></AppName></center>
            <div className="container text-center">

                <AddTodo addTodo={onAdd}></AddTodo>
                <EmptyMessage show={show}></EmptyMessage>
                <TodoList deleteTodo={onDelete}></TodoList>
            </div>
        </TodoItemsContext.Provider>
    </>
}

export default TodoAppV2;