import React from "react";
import { Button } from "./ui/Button";
import { Typography } from "./ui/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function GroupMemberCircle() {
  return (
    <div className="bg-gradient-to-r from-gradient-left to-gradient-right w-10 h-10 rounded-full flex justify-center items-center text-white shadow-lg">
      <PersonOutlineOutlinedIcon />
    </div>
  );
}

export function GroupCard({ group, onClick }) {
  const { name, aboutUs } = group;

  return (
    <div
      className={`bg-white rounded-2xl drop-shadow p-5 flex flex-col grow gap-2.5`}
    >
      <Typography element={"p2"} weight={"bold"}>
        {name}
      </Typography>
      <Typography element={"p2"} weight={"bold"}>
        About Us
      </Typography>
      <Typography element={"p2"} weight={"regular"}>
        {aboutUs}
      </Typography>
      <div className="flex">
        <GroupMemberCircle />
      </div>
      <Button type={"gradient"} onClick={() => onClick(group)}>
        View more
      </Button>
    </div>
  );
}
