import React from "react";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";

export function Dialog({ onCancel, onSend, children }) {
  return (
    <div className={"flex flex-col gap-5"}>
      <Typography element={"p1"} weight={"bold"}>
        {children}
      </Typography>
      <textarea className="border rounded p-2" placeholder="Hello!" />
      <div className="flex gap-5 justify-end">
        <Button theme={"gradient"} type={"normal"} onClick={onCancel}>
          Cancel
        </Button>
        <Button theme={"gradient"} type={"normal"} onClick={onSend}>
          Send
        </Button>
      </div>
    </div>
  );
}