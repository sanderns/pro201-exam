import React from "react";
import { Typography } from "./Typography";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

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
  return (
    <div className="flex justify-evenly">
      {navigation.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="flex flex-col justify-center grow"
        >
          <div className="flex justify-center">{item.icon}</div>
          <div className="flex justify-center">
            <Typography>{item.text}</Typography>
          </div>
        </a>
      ))}
    </div>
  );
}
