import React from "react";
import { Typography } from "./Typography";
import { Button } from "./Button";

export function Alert({ onOk, children }) {
  return (
    <div className="flex flex-col gap-5">
      <Typography element={"p1"} weight={"bold"}>
        {children}
      </Typography>
      <div className="flex justify-end">
        <Button theme={"gradient"} type={"normal"} onClick={onOk}>
          OK
        </Button>
      </div>
    </div>
  );
}
