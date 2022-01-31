import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav_box">
        <ul className="Nav_wrapper">
          <li className="Nav_item">
            <Link to="home">Home</Link>
          </li>
          <li className="Nav_item">
            <Link to="amazon">Amazon</Link>
          </li>
          <li className="Nav_item">
            <Link to="apple">Apple</Link>
          </li>
          <li className="Nav_item">
            <Link to="facebook">Facebook</Link>
          </li>
          <li className="Nav_item">
            <Link to="google">Google</Link>
          </li>
          <li className="Nav_item">
            <Link to="microsoft">Microsoft</Link>
          </li>
          <li className="Nav_item">
            <Link to="tesla">Tesla</Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
