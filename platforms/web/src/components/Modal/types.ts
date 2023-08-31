import { FC, RefObject } from "react";

export interface HeaderProps {
  title: string;
  icon: FC;
}
export interface ModalProps extends HeaderProps {
  ref: RefObject<HTMLElement>;
  header?: FC;
  footer?: FC;
}
