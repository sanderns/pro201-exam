import React, { useState } from "react";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { Typography } from "./Typography";
import { useNavigate } from "react-router-dom";

const navigation = [
  {
    href: "/",
    icon: <PersonSearchOutlinedIcon fontSize="large" />,
    text: "Search",
  },
  {
    href: "/Chat",
    icon: <ChatBubbleOutlineOutlinedIcon fontSize="large" />,
    text: "Chat",
  },
  {
    href: "/Contacts",
    icon: <PeopleAltOutlinedIcon fontSize="large" />,
    text: "Contacts",
  },
];

export function Navbar() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  function handleClick(index, href) {
    setActive(index);
    navigate(href);
  }

  return (
    <div className="flex justify-evenly bg-purple-500">
      {navigation.map(({ href, icon, text }, index) => (
        <button
          key={index}
          onClick={() => handleClick(index, href)}
          className={`${
            index === active &&
            "text-white bg-gradient-to-r from-gradient-left to-gradient-right"
          } flex flex-col items-center grow py-3`}
        >
          <div className="flex justify-center">{icon}</div>
          <div className="flex justify-center">
            <Typography element={"p2"} weight={"regular"}>
              {text}
            </Typography>
          </div>
        </button>
      ))}
    </div>
  );
}
