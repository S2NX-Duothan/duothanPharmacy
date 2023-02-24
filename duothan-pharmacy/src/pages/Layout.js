import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import "../styles/Layout.css";

const Layout = () => {
    return (<>
        <div className="main">
            <div className="header">Duothan Pharmacy</div>
            <div className="sub">
                <nav className="menu">
                    <ul>
                        <li>
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/inventory">Inventory</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                </nav>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </div>
    </>);
}

export default Layout;