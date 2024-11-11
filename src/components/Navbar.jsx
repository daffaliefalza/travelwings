import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Link to="/" className="logo">
          <span className="colored">T</span>ravelWings
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
