import React from "react";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export function ConfirmationBox({ onCloseAll, displayText }) {
  return (
    <div
      className={`m-5 bg-white rounded-2xl drop-shadow p-5 grid gap-2.5 relative`}
    >
      <div className="w-72" />
      <Typography element={"p2"} weight={"bold"}>
        {displayText}
      </Typography>
      <div className={"flex justify-evenly pt-5"}>
        <Button type={"gradient"} onClick={onCloseAll}>
          OK
        </Button>
      </div>
    </div>
  );
}
