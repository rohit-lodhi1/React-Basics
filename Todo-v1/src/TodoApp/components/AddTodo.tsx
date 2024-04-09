
function AddTodo() {
    return <>
        <div className="row">
            <div className="col-4">
                <input type="text" placeholder='Enter Todo Here' />
            </div>
            <div className="col-4">
                <input type="date" />
            </div>
            <div className="col-4">
                <button className="btn btn-info todo-button">Add</button>
            </div>

        </div>
    </>
}

export default AddTodo;