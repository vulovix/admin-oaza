import { PropsWithChildren } from "react";

import "./style.scss";

export default function BlankLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className="blank-layout">
      <div className="page-content">{children}</div>
    </div>
  );
}
