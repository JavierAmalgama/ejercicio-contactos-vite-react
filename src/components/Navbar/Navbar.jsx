import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/images/Logo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
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
