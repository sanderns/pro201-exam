import React from "react";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";

export function ContactOptions({ deleteConversation, onClose }) {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-white rounded-2xl drop-shadow p-5 grid gap-2.5 relative`}
    >
      <Button type={"flat"} onClick={() => navigate("/chat/live")}>
        Open chat
      </Button>
      <Button type={"flat"} onClick={deleteConversation}>
        Delete conversation
      </Button>
      <Button type={"flat"} onClick={onClose}>
        Close
      </Button>
    </div>
  );
}
