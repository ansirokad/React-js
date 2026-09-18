import logo from "../assets/dominos-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav-box">

      <div className="logo-box">
        <img width={200} src={logo} alt="Domino's Logo" />
      </div>

      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/cheese-volcano">Cheese Volcano</Link>
        </li>

        <li>
          <Link to="/cheese-burst">Cheese Burst Pizza</Link>
        </li>

        <li>
          <Link to="/garlic-bread">Garlic Breads & Dips</Link>
        </li>

        <li>
          <Link to="/big-pizza">Big Big Pizza</Link>
        </li>

        <li>
          <Link to="/desserts">Desserts</Link>
        </li>
      </ul>

    </div>
  );
}

export default Header;