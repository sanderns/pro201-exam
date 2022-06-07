import React from "react";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";

export function Alert({ onOk, children }) {
  return (
    <div className="flex flex-col gap-5">
      <Typography element={"p1"} weight={"bold"}>
        {children}
      </Typography>
      <div className="flex justify-end">
        <Button type={"gradient"} onClick={onOk}>
          OK
        </Button>
      </div>
    </div>
  );
}
