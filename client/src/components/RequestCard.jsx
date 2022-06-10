import React from "react";
import { Typography } from "./ui/Typography";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { OnlineStatus } from "./OnlineStatus";

export function RequestCard({ contact, onDeny, onAccept }) {
  return (
    <div className="p-2 pr-4 gap-2 flex bg-white rounded-r-md rounded-l-full items-center shadow-md">
      <div className="w-16 h-16 bg-gradient-to-r from-gradient-left to-gradient-right rounded-full flex justify-center items-center text-white">
        <PersonOutlinedIcon fontSize="large" />
      </div>
      <div className="flex flex-col grow">
        <Typography element={"h3"} weight={"regular"}>
          {contact}
        </Typography>
        <OnlineStatus indicator={"online"} />
      </div>
      <div className="flex gap-2 text-white">
        <button
          onClick={onDeny}
          className="w-8 h-8 rounded shadow bg-purple-200 flex justify-center items-center"
        >
          <CloseOutlinedIcon />
        </button>
        <button
          onClick={onAccept}
          className="w-8 h-8 rounded shadow bg-purple-300 flex justify-center items-center"
        >
          <CheckOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
