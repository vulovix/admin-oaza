import { PropsWithChildren } from "react";
import { ImRocket } from "react-icons/im";
import { Link } from "react-router-dom";

import "./style.scss";
import { LogoProps } from "./types";

export default function Logo(props: PropsWithChildren<LogoProps>): JSX.Element {
  return (
    <div className="oasis-logo">
      <Link to={props.to || "/"} className={`logo-title`}>
        <img className="invert" src="/favicon64x64.png"/>
        <h1>Oasis</h1>
      </Link>
    </div>
  );
}
