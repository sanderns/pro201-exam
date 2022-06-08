import React from "react";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";

export function ContactOptions({ deleteConversation, onClose }) {
  const navigate = useNavigate();

  return (
    <div className="w-48 flex flex-col gap-2.5">
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
