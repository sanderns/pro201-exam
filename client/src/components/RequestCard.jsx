import React from "react";
import { Typography } from "./ui/Typography";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export function RequestCard({ contact }) {
  return (
    <div className="p-2 pr-4 gap-2 flex bg-white rounded-r-md rounded-l-full items-center shadow-md z-10">
      <div className="w-16 h-16 bg-gradient-to-r from-gradient-left to-gradient-right rounded-full flex justify-center items-center text-white">
        <PersonOutlinedIcon fontSize="large" />
      </div>
      <div className="flex flex-col grow">
        <Typography element={"h3"} weight={"regular"}>
          {contact}
        </Typography>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-status-online rounded-full" />
          <Typography element={"p1"} weight={"regular"}>
            Online
          </Typography>
        </div>
      </div>
      <div className="flex gap-2 text-white">
        <button
          onClick={() => console.log("TODO: Make this button deny a request")} // TODO: Make this button deny a request
          className="w-8 h-8 rounded shadow bg-purple-200 flex justify-center items-center z-20"
        >
          <CloseOutlinedIcon />
        </button>
        <button
          onClick={() => console.log("TODO: Make this button accept a request")} // TODO: Make this button accept a request
          className="w-8 h-8 rounded shadow bg-purple-300 flex justify-center items-center z-20"
        >
          <CheckOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
