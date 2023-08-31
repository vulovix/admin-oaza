import "./style.scss";

interface ButtonProps {
  icon: React.FC;
  title: string;
}

export default function Button(props: ButtonProps): JSX.Element {
  const { title, icon: Icon } = props;
  return (
    <button className="options-button">
      <Icon />
      {title}
    </button>
  );
}
