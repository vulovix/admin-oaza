// import { BsList } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { selectIsLoggedIn } from "@web/providers/Auth/selectors";
import { useSelector } from "react-redux";

export default function Nav(): JSX.Element {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return <div className="oasis-nav">
        <ul>
            {isLoggedIn ? <>
                <li><NavLink to="/publish">Publish</NavLink></li>
                {/* <li><NavLink to="/notes">Notes</NavLink></li> */}
                {/* <li><NavLink to="/ai">AI</NavLink></li> */}
            </> : <>
                <li><NavLink to="/sign-in">Sign In</NavLink></li>
            </>}
        </ul>
        <ul className="align-right">
            {isLoggedIn ? <li><NavLink to="/sign-out">Sign out</NavLink></li> : <li><NavLink to="/sign-up">Sign Up</NavLink></li>}
        </ul>
    </div>
}