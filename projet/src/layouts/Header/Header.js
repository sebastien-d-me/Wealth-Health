import "./Header.css";
import Logo from "../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";


function Header() {
    return (
        <nav>
            {/* Header Logo */}
            <div className="nav-logo-title">
                <img alt="Logo" className="nav-logo" src={Logo} />
                <h1 className="nav-title">HRnet</h1>
            </div>


            {/* Menu */}
            <div>
                <NavLink className="nav-link" to="/create">
                    <i className="nav-icon ri-add-circle-line"></i>
                    <span>Create a new employee</span>
                </NavLink>
                <NavLink className="nav-link" to="/list">
                    <i className="nav-icon ri-list-check"></i>
                    <span>View current employees</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Header;