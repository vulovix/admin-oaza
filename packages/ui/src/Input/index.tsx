import "./style.scss";

export default function Input(props: any): JSX.Element {
  const { label, id, ...rest } = props;
  return (
    <div className="oasis-input">
      {label && <label htmlFor={id}>{label}</label>}
      <input {...rest} id={id} />
    </div>
  );
}
