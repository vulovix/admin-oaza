import "./style.scss";

export default function Input(props: any): JSX.Element {
  const { label, labelComponent: Label, id, ...rest } = props;
  return (
    <div className="oasis-input">
      {Label ? <Label /> : label ? <label htmlFor={id}>{label}</label>: <></>}
      <input {...rest} id={id} />
    </div>
  );
}
