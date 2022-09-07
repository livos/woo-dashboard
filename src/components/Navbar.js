import { Link } from "react-router-dom";
import logo from "../logo.webp";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="Woo Dashboard" className="logo"></img>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/image-edition">Images</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
