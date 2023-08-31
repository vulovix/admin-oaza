import { PropsWithChildren } from "react";
import "./style.scss";

export default function Footer(props: PropsWithChildren<unknown>): JSX.Element {
  return <div className="options-footer">{props.children}</div>;
}
