import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav_box">
        <ul className="Nav_wrapper">
          <li className="Nav_item">
            <Link to="home">Quick Search</Link>
          </li>
          <li className="Nav_item">
            <Link to="portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
