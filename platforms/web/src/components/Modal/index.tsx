import { PropsWithChildren, forwardRef } from "react";

import "./style.scss";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import { HeaderProps, ModalProps } from "./types";

export default forwardRef(function Modal(props: PropsWithChildren<ModalProps>, ref: any): JSX.Element {
  const { children, title, icon, header: Header = ModalHeader, footer: Footer = ModalFooter } = props;
  const headerProps: HeaderProps = { title, icon };

  return (
    <div className="modal">
      <div className="content" ref={ref}>
        <div className="header">
          <Header {...headerProps} />
        </div>
        <div className="body">{children}</div>
        <div className="footer">
          <Footer />
        </div>
        <div></div>
      </div>
    </div>
  );
});
