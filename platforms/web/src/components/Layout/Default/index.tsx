import { PropsWithChildren } from "react";

import Header from "@web/components/Header";
import Nav from "@web/components/Nav";

export default function DefaultLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div>
      <Header />
      {/* <Nav /> */}
      {children}
    </div>
  );
}
