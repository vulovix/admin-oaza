import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@web/providers/Auth/selectors";

export default function Header(): JSX.Element {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-nav">
          <ul>
              {/* {isLoggedIn ? <>
                  <li><NavLink to="/publish">Publish</NavLink></li>
                  <li><NavLink to="/notes">Notes</NavLink></li>
                  <li><NavLink to="/ai">AI</NavLink></li>
              </> : <></>} */}
          </ul>
        </div>
        <Link to={isLoggedIn ? "/": "/sign-in"} className="logo">
          <img className="invert" src="/favicon.png" alt="Logo" />
          <h1>Oasis</h1>
          {/* <h2><span className="wings"></span> August 24, 2023 <span className="wings"></span>  </h2> */}
        </Link>
        <div className="header-nav">
          {/* <ul>
              {isLoggedIn ? <li><NavLink to="/sign-out">Sign out</NavLink></li> : <></>}
          </ul> */}
        </div>
      </div>
    </header>
  );
}
