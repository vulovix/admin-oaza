import { BiLayer } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header-content">
        <div></div>
        <Link to="/" className="logo">
          <img className="invert" src="/favicon.png" alt="Logo" />
          <h1>Oasis</h1>
          <h2><span className="wings"></span> August 24, 2023 <span className="wings"></span>  </h2>
        </Link>
        <div></div>
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
