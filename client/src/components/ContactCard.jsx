import React from "react";
import { Typography } from "./ui/Typography";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { OnlineStatus } from "./OnlineStatus";

export function ContactCard({ contact }) {
  function openDialog() {
    console.log("TODO: Make this button navigate to live chat"); // TODO: Make this button navigate to live chat
  }

  function handleButton(event) {
    event.stopPropagation();
    console.log("TODO: Make this button open more options"); // TODO: Make this button open more options
  }

  return (
    <div
      onClick={openDialog}
      className="cursor-pointer p-2 pr-4 gap-2 flex bg-white rounded-r-md rounded-l-full items-center shadow-md z-10"
    >
      <div className="w-16 h-16 bg-gradient-to-r from-gradient-left to-gradient-right rounded-full flex justify-center items-center text-white">
        <PersonOutlinedIcon fontSize="large" />
      </div>
      <div className="flex flex-col grow">
        <Typography element={"h3"} weight={"regular"}>
          {contact}
        </Typography>
        <OnlineStatus indicator={"online"} />
      </div>
      <button
        onClick={(event) => handleButton(event)}
        className="pr-2 w-8 h-8 flex justify-center items-center z-20"
      >
        <MoreHorizOutlinedIcon fontSize="large" />
      </button>
    </div>
  );
}
