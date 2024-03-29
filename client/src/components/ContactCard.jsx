import React from "react";
import { Typography } from "./ui/Typography";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { OnlineStatus } from "./OnlineStatus";
import { useNavigate } from "react-router-dom";

export function ContactCard({ contact, onClick }) {
  const navigate = useNavigate();

  function openDialog() {
    navigate("/chat/live");
  }

  function handleButton(event) {
    event.stopPropagation();
    onClick(contact);
  }

  return (
    <div
      onClick={openDialog}
      className="cursor-pointer p-2 pr-4 gap-2 flex bg-white rounded-r-md rounded-l-full items-center shadow-md"
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
        className="pr-2 w-8 h-8 flex justify-center items-center"
      >
        <MoreHorizOutlinedIcon fontSize="large" />
      </button>
    </div>
  );
}
