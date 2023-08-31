import { useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

import { useDispatch, useSelector } from "@web/core/redux";
import { actions as persistedActions } from "@web/slices/persisted";
import { selectConversations } from "@web/slices/persisted/selectors";

import { selectMessages } from "../../selectors";
import { actions } from "../../slice";
import { OptionProps } from "../../types";
import "./style.scss";
import { Input } from "@equilibrius/ui";

export default function ConversationOptions(props: OptionProps): JSX.Element {
  const { onClose } = props;
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  const conversations = useSelector(selectConversations);
  const [name, setName] = useState("");

  const onConversationRemove = (id: string): void => {
    dispatch(persistedActions.removeConversation({ id }));
  };
  const onConversationSelect = (e: any) => {
    dispatch(actions.setMessages(conversations.find((c) => c.id === e.target.id)?.messages || []));
    onClose();
  };
  const onConversationStore = (conversation: { name: string }): void => {
    dispatch(
      persistedActions.storeConversation({
        id: Math.random().toString(36),
        name: conversation.name,
        messages: messages,
      }),
    );
  };

  const onSubmit = (e: any): void => {
    e.preventDefault();
    if (name) {
      onConversationStore({ name });
      onClose();
    }
  };

  const handleChange = (e: any): void => {
    setName(e.target.value);
  };

  return (
    <div className="conversation-options">
      <h2>Save conversation:</h2>
      <form onSubmit={onSubmit}>
        <Input type="text" onChange={handleChange} value={name} name="name" placeholder="Enter conversation title..." autoComplete="off" />
      </form>

      <h2>Saved conversations:</h2>
      <div className="conversation-list">
        {conversations.length === 0 ? (
          <div className="conversation">
            <div className="conversation-name">Nemate sačuvanih konverzacija.</div>
          </div>
        ) : (
          conversations.map(({ id, name }) => (
            <div className="conversation" key={id}>
              <div className="conversation-name clickable" role="presentation" onClick={onConversationSelect} id={id}>
                {name}
              </div>
              <button onClick={(): void => onConversationRemove(id)}>
                <RiDeleteBin7Line />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
