import { useRef } from "react";
import { BiMessageDetail } from "react-icons/bi";

import Modal from "@web/components/Modal";
import useOutsideClick from "@web/hooks/useOutsideClick";

import { OptionProps } from "../types";

import Button from "./Button";
import ConversationOptions from "./Conversation";
import Footer from "./Footer";

export default function Options(props: OptionProps): JSX.Element {
  const { onClose } = props;
  const ref = useRef<any>();
  useOutsideClick(ref, onClose);

  return (
    <div>
      <Modal
        ref={ref}
        title="Conversations"
        icon={BiMessageDetail}
        footer={(): JSX.Element => (
          <Footer>
            {/* <Button title="Settings" icon={RiChatSettingsLine} /> */}
            <Button title="Conversations" icon={BiMessageDetail} />
          </Footer>
        )}
      >
        <ConversationOptions onClose={onClose} />
      </Modal>
    </div>
  );
}
