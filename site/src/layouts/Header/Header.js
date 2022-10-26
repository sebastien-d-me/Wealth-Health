import "./Header.css";
import Logo from "../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";


function Header() {
    // Template
    return (
        <nav>
            {/* Header Logo */}
            <div className="nav-logo-title">
                <img alt="Logo" className="nav-logo" src={Logo} />
                <h1 className="nav-title">HRnet</h1>
            </div>


            {/* Menu */}
            <div className="nav-links">
                <NavLink className="nav-link" to="/create">
                    <i className="nav-icon ri-add-circle-line"></i>
                    <span>Create a new employee</span>
                </NavLink>
                <NavLink className="nav-link" to="/list">
                    <i className="nav-icon ri-list-check"></i>
                    <span>View current employee(s)</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Header;