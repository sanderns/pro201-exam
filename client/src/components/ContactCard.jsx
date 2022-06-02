import React from "react";
import { Typography } from "./ui/Typography";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

export function ContactCard({ contact }) {
  function openDialog() {
    console.log("TODO: Make this button navigate to live chat"); // TODO: Make this button navigate to live chat
  }

  return (
    <div className="p-2 pr-4 gap-2 flex bg-white rounded-r-md rounded-l-full items-center shadow-md z-10">
      <div
        onClick={openDialog}
        className="cursor-pointer w-16 h-16 bg-gradient-to-r from-gradient-left to-gradient-right rounded-full flex justify-center items-center text-white"
      >
        <PersonOutlinedIcon fontSize="large" />
      </div>
      <div onClick={openDialog} className="cursor-pointer flex flex-col grow">
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
      <button
        onClick={() => console.log("TODO: Make this button open more options")} // TODO: Make this button open more options
        className="pr-2 w-8 h-8 flex justify-center items-center z-20"
      >
        <MoreHorizOutlinedIcon fontSize="large" />
      </button>
    </div>
  );
}
