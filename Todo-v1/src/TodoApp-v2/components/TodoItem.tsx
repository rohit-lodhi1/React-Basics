import { MdDeleteSweep } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItemsStore";
import { useContext } from "react";

function TodoItem({ id, taskName, date }: { id: any, taskName: any, date: any, deleteTodo?: any }) {
    // console.log(taskName);


    let { deleteItem }: any = useContext(TodoItemsContext);

    function deleteTodo(id: any) {
        deleteItem(id);
    }

    return <>
        <tr>
            <th scope="row">{id}</th>
            <td>{taskName}</td>
            <td>{date}</td>
            <td><button className="btn btn-danger" onClick={() => deleteTodo(id)}><MdDeleteSweep /></button></td>
        </tr>
    </>
}
export default TodoItem;