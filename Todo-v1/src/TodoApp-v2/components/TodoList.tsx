import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/TodoItemsStore";

function TodoList() {
    let line = 1;
    let { items }: any = useContext(TodoItemsContext);
    let { deleteItem }: any = useContext(TodoItemsContext);
    if (items.length == 0)
        return <></>


    function onDelete(id: any) {
        deleteItem(id);
    }

    return <>
        <div className="row">

            <table className="table table-striped items">
                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Task</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item: any) => (
                        <TodoItem deleteTodo={onDelete} key={line} id={line++} taskName={item.taskName} date={item.date}></TodoItem>
                    ))}
                </tbody>
            </table>
        </div>
    </>
}

export default TodoList;