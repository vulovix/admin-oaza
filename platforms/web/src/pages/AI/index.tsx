import { useEffect, useMemo, useState } from "react";

import { useDispatch, useReducer, useSaga, useSelector } from "@web/core";
import { selectDeviceId } from "@web/slices/persisted/selectors";

import Chat from "./Chat";
import { CHAT_SCOPE } from "./constants";
import Form from "./Form";
import Options from "./Options";
import saga from "./saga";
import { selectMessages } from "./selectors";
import { actions, reducer } from "./slice";
import { Message } from "./types";

import "./style.scss";

export default function AIPage(): JSX.Element {
  useReducer({ key: CHAT_SCOPE, reducer });
  useSaga({ key: CHAT_SCOPE, saga: saga });

  const deviceId = useSelector(selectDeviceId);

  const [showOptions, setShowOptions] = useState(false);

  const aiStream = useMemo(
    () =>
      new EventSource("/api/stream", {
        withCredentials: true,
      }),
    [],
  );

  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const handleSubmit = (message: Message): void => {
    dispatch(actions.prompt(message));
  };

  useEffect(() => {
    aiStream.addEventListener(deviceId, (e) => {
      dispatch(actions.onStreamMessage(JSON.parse(e.data)));
    });
    return () => {
      aiStream.close();
    };
  }, []);

  const onOpenOptions = (): void => setShowOptions(true);

  const onCloseOptions = (): void => {
    setShowOptions(false);
  };

  return (
    <div className="ai-page">
      <Chat messages={messages} className={showOptions ? "zoom" : ""} />
      {showOptions && <Options onClose={onCloseOptions} />}
      <div className={`${showOptions ? "zoom" : ""}`}>
        <Form handleOpenOptions={onOpenOptions} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
