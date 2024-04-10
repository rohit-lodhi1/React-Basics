import { useState, useRef, useContext } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItemsStore";

function AddTodo() {

    let [todoName, setTodoName] = useState("");
    let [todoDate, setTodoDate] = useState("");
    let noOfUpdates = useRef(0);
    const todoNameElement: any = useRef();
    const todoDateElement: any = useRef();
    let { addNewItem }: any = useContext(TodoItemsContext);

    function setData(event: any) {
        event.preventDefault();
        let name = todoNameElement.current.value;
        let date = todoDateElement.current.value;
        addNewItem(name, date);
        todoNameElement.current.value = '';
        todoDateElement.current.value = '';
        noOfUpdates.current++;

    }
    // used for on change in input tag
    function handleNameChange(event: any) {
        setTodoName(event.target.value);
    }
    // used for on change in input tag
    function handleTodoDate(event: any) {
        setTodoDate(event.target.value)
        console.log(noOfUpdates.current);

    }


    return <>
        <form onSubmit={(event) => setData(event)} >
            <div className="row">
                <div className="col-4">
                    <input type="text" ref={todoNameElement} placeholder='Enter Todo Here' />
                    {/* <input type="text" value={todoName} onChange={handleNameChange} placeholder='Enter Todo Here' />   */}
                </div>
                <div className="col-4">
                    <input type="date" ref={todoDateElement} />
                    {/* <input type="date" value={todoDate} onChange={handleTodoDate} /> */}
                </div>
                <div className="col-4">
                    <button className="btn btn-info todo-button"><MdOutlineAddBox />
                    </button>
                </div>

            </div>
        </form>
    </>
}

export default AddTodo;