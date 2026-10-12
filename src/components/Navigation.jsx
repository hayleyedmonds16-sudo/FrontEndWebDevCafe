import { Link, Outlet } from "react-router-dom";
import "../../index.css";

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Food Ordering
                    </Link>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/orders">
                                Order Food
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    );
};

export default Navigation;
