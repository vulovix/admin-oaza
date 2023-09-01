import { ChangeEvent, useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

import { FormProps, Message, Role } from "../types";
import "./style.scss";
import { Input } from "@equilibrius/ui";


export default function Form(props: FormProps): JSX.Element {
  const inputRef = useRef<any>();
  const getInitialState = (): Message => ({
    id: Math.random().toString(36),
    content: "",
    role: Role.User,
  });
  useEffect(() => {
    // make this part of settings
    // inputRef.current?.focus();
  }, []);

  const [state, setState] = useState(getInitialState());

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (state.content?.trim().length) {
      props.onSubmit(state);
      setState(getInitialState());
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-inner">
        <Input
          // rows={1}
          type="text"
          ref={inputRef}
          autoComplete="off"
          value={state.content}
          placeholder="Ask anything..."
          className="text-input"
          name="content"
          onChange={handleChange}
        />
        <button type="button" className="options-button" onClick={props.handleOpenOptions}>
          <BsThreeDots />
        </button>
      </div>
    </form>
  );
}
