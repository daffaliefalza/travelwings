import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <a href="#" className="logo">
          <span className="colored">T</span>ravelWings
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
