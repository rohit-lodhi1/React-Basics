
function TodoList() {

    let taskName = "React Turtorial";
    let date = "07-04-2024"

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
                    <tr>
                        <th scope="row">1</th>
                        <td>{taskName}</td>
                        <td>{date}</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}

export default TodoList;