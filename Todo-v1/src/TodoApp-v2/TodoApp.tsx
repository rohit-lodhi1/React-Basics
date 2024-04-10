import AddTodo from "./components/AddTodo";
import { AppName } from "./components/AppName";
import TodoList from "./components/TodoList";
import "./TodoApp.css"
import { useReducer, useState } from "react";
import EmptyMessage from "./components/EmptyMessage";
import { TodoItemsContext } from "./store/TodoItemsStore";

// pure function
const reducer = (currentValue: any, action: any) => {
    let newState = currentValue;
    if (action.type == "ADD_ITEM") {
        newState = [...currentValue, { taskName: action.payload.name, date: action.payload.date }];
    }
    else if (action.type == "DELETE_ITEM") {
        // newState = [...currentValue];
        newState = currentValue.splice(action.payload.deleteId - 1, 1);
        // newState = currentValue;
    }
    console.log("isnide reducer", action);

    return newState;
}

function TodoAppV2() {

    var intialTodos: any[] = [];

    // const [todoList, setTodoList] = useState(intialTodos);

    const [todoList, dispatch] = useReducer(reducer, intialTodos);

    const onAdd = (itemName: any, todoDate: any) => {
        // let list = [...todoList, { taskName: itemName, date: todoDate }]
        // setTodoList((currentValue) => [...currentValue, { taskName: itemName, date: todoDate }]);
        let newAction = {
            type: "ADD_ITEM",
            payload: {
                name: itemName,
                date: todoDate
            }
        }
        dispatch(newAction);
    }

    const onDelete = (id: any) => {
        // console.log(id);
        // let newList = [...todoList];
        // newList.splice(id - 1, 1);

        // setTodoList(newList);
        let newAction = {
            type: "DELETE_ITEM",
            payload: {
                deleteId: id
            }
        }
        dispatch(newAction);
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