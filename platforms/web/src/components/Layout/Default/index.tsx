import { PropsWithChildren } from "react";

import Header from "@web/components/Header";
import Nav from "@web/components/Nav";
import { selectIsLoggedIn } from "@web/providers/Auth/selectors";
import { useSelector } from "@web/core";
import Footer from "@web/components/Footer";
import "./style.scss";

export default function DefaultLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="default-layout">
      <Header />
      {isLoggedIn ? <Nav /> : <></>}
      {children}
      <Footer />
    </div>
  );
}
