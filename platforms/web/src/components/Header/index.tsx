import { Link } from "react-router-dom";
import "./style.scss";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@web/providers/Auth/selectors";

export default function Header(): JSX.Element {
  const user = useSelector(selectAuthUser);
  return (
    <header className="header">
      <div className="header-content">
        <div></div>
        <Link to="/" className="logo">
          <img className="invert" src="/favicon.png" alt="Logo" />
          <h1>Oasis</h1>
          <h2><span className="wings"></span> August 24, 2023 <span className="wings"></span>  </h2>
        </Link>
        <div>{user?.email}</div>
        {/* <ul className="nav">
          <li>
            <Link to="/about">
              <BiLayer /> About
            </Link>
          </li>
        </ul> */}
      </div>
    </header>
  );
}
