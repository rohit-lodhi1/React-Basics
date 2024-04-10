import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsStore";

function EmptyMessage() {

    let { show }: any = useContext(TodoItemsContext)

    return show && <>  <p>No Todo</p></>
}

export default EmptyMessage;