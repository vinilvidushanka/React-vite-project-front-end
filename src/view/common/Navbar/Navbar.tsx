import './Navbar.css';
import {Link} from "react-router-dom";
import logo from "../../../assets/react.svg"

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="logo" className="navbar-logo"/>
                <p className="navbar-title">LUXYwatch</p>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/shopping-cart">My Cart</Link></li>
            </ul>
            <button>
                <Link to="/login">Login</Link>
            </button>
        </nav>
    );
}