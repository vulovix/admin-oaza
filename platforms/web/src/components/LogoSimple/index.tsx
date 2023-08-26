import { PropsWithChildren } from "react";

import "./style.scss";
import { LogoProps } from "./types";

export default function LogoSimple(props: PropsWithChildren<LogoProps>): JSX.Element {
  return (
    <div className="oasis-logo">
      <img className="invert" src="/favicon64x64.png"/>
      <h1>Oasis</h1>
    </div>
  );
}
