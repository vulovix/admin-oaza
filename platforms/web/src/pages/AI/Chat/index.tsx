import { useEffect, useRef } from "react";
import { BiPaperPlane } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { Loader } from "@equilibrius/ui";

import { useSelector } from "@web/core";

import { selectLoading } from "../selectors";
import { ChatProps, Role } from "../types";
import "./style.scss";

export default function Chat(props: ChatProps): JSX.Element {
  const { messages, className = "" } = props;
  const messagesRefs = useRef<any>([]);
  const loading = useSelector(selectLoading);
  useEffect(() => {
    messagesRefs.current[messages.length - 1]?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className={`chat ${className}`}>
      {messages.map((msg, i) => {
        return (
          <div
            key={i}
            ref={(ref: HTMLDivElement): void => {
              messagesRefs.current[i] = ref;
            }}
            className={`message ${msg.role}`}
          >
            <div className="avatar">{msg.role === Role.User ? <BiPaperPlane /> : <BsStars />}</div>
            <div className={`content`}>{msg.content}</div>
          </div>
        );
      })}
      {loading && (
        <div className={`message loading`}>
          <div className="avatar">
            <BsStars />
          </div>
          <div className={`content`}>
            <Loader />
          </div>
        </div>
      )}
    </div>
  );
}
