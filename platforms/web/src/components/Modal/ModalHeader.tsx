import { HeaderProps } from "./types";

export default function ModalHeader(props: HeaderProps): JSX.Element {
  const { title, icon: Icon } = props;
  return (
    <div className="modal-header">
      <Icon /> {title}
    </div>
  );
}
