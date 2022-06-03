import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Typography } from "./ui/Typography";
import { OnlineStatus } from "./OnlineStatus";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import React from "react";

export function MessageCard({ user, status, message, timestamp }) {
  const { indicator, text } = status;

  function handleClick() {
    console.log("TODO: Make this button navigate user to live chat page"); // TODO: Make this button navigate user to live chat page
  }

  function toggleOptions(event) {
    event.stopPropagation();
    console.log("TODO: Make this button open more options"); // TODO: Make this button open more options
  }

  // cursor-pointer

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer relative bg-white rounded-tl-3xl rounded-md shadow flex flex-col p-2 gap-2"
    >
      <div className="flex gap-2">
        <div className="w-10 h-10 bg-gradient-to-r from-gradient-left to-gradient-right rounded-full flex justify-center items-center text-white">
          <PersonOutlinedIcon fontSize="large" />
        </div>
        <div className="flex flex-col w-48">
          <Typography element={"h3"} weight={"regular"}>
            {user}
          </Typography>
          {!text ? (
            <OnlineStatus indicator={indicator} />
          ) : (
            <OnlineStatus indicator={indicator}>{text}</OnlineStatus>
          )}
        </div>
        <button
          onClick={(event) => toggleOptions(event)}
          className="absolute top-2 right-2"
        >
          <MoreHorizOutlinedIcon fontSize="large" />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1">
          <Typography element={"p1"} weight={"semibold"}>
            Most recent:
          </Typography>
          <Typography element={"p1"} weight={"regular"}>
            {message}
          </Typography>
        </div>
        <Typography element={"p1"} weight={"regular"}>
          {timestamp}
        </Typography>
      </div>
    </div>
  );
}
