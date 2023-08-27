import "./style.scss";

export default function Checkbox(props: any): JSX.Element {
  const { label, id, ...rest } = props;
  return (
    <div className="oasis-checkbox">
      <label className="control control--checkbox" htmlFor={id}>{label}
        <input id={id} name={id} type="checkbox" {...rest} />
        <div className="control__indicator"></div>
      </label>
    </div>
  );
}
