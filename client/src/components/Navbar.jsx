import React, { useState } from "react";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { Typography } from "./Typography";

const navigation = [
  {
    href: "", // TODO: Assign href
    icon: <PersonSearchOutlinedIcon fontSize="large" />,
    text: "Search",
  },
  {
    href: "", // TODO: Assign href
    icon: <ChatBubbleOutlineOutlinedIcon fontSize="large" />,
    text: "Chat",
  },
  {
    href: "", // TODO: Assign href
    icon: <PeopleAltOutlinedIcon fontSize="large" />,
    text: "Contacts",
  },
];

export function Navbar() {
  const [active, setActive] = useState(0);

  function handleClick(event, index) {
    event.preventDefault();
    setActive(index);
  }

  return (
    <div className="flex justify-evenly bg-purple-500">
      {navigation.map((item, index) => (
        <a
          key={index}
          href={item.href}
          onClick={(event) => handleClick(event, index)}
          className={`${
            index === active &&
            "text-white bg-gradient-to-r from-gradient-left to-gradient-right"
          } flex flex-col justify-center grow py-3`}
        >
          <div className="flex justify-center">{item.icon}</div>
          <div className="flex justify-center">
            <Typography element={"p2"} weight={"regular"}>
              {item.text}
            </Typography>
          </div>
        </a>
      ))}
    </div>
  );
}
