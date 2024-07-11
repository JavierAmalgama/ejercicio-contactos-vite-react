import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/logout"}>Logout</Link>
        </li>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
