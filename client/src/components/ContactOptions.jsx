import React from "react";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";

export function ContactOptions({ deleteConversation, onClose }) {
  const navigate = useNavigate();

  return (
    <>
      <Button type={"flat"} onClick={() => navigate("/chat/live")}>
        Open chat
      </Button>
      <Button type={"flat"} onClick={deleteConversation}>
        Delete conversation
      </Button>
      <Button type={"flat"} onClick={onClose}>
        Close
      </Button>
    </>
  );
}
