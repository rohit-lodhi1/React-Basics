import { Link, NavLink } from "react-router-dom"

export const Sidebar = () => {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar" style={{ width: "280px" }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                    <span className="fs-4">Sidebar</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink to="" className={`nav-link  text-white `} activeclassname="active" aria-current="page">
                            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                            Home
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/create-post" activeclassname="active" className="nav-link  text-white ">
                            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                            Create Post
                        </NavLink>
                    </li>

                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="/profile" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>mdo</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}