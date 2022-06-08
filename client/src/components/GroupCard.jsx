import React from "react";
import { Button } from "./ui/Button";
import { Typography } from "./ui/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Card } from "./wrappers/Card";

function GroupMemberCircle() {
  return (
    <div className="bg-gradient-to-r from-gradient-left to-gradient-right w-10 h-10 rounded-full flex justify-center items-center text-white shadow-md">
      <PersonOutlineOutlinedIcon />
    </div>
  );
}

export function GroupCard({ group, onClick }) {
  const { name, aboutUs } = group;

  return (
    <Card>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2.5 pb-2.5">
          <Typography element={"p2"} weight={"bold"}>
            {name}
          </Typography>
          <Typography element={"p2"} weight={"bold"}>
            About Us
          </Typography>
          <Typography element={"p2"} weight={"regular"} clamp={"3"}>
            {aboutUs}
          </Typography>
        </div>
        <div>
          <div className="relative h-12">
            {/* Should be functionality to map users in group to show the most recently active users */}
            <div className="absolute left-16">
              <GroupMemberCircle />
            </div>
            <div className="absolute left-8">
              <GroupMemberCircle />
            </div>
            <div className="absolute left-0">
              <GroupMemberCircle />
            </div>
          </div>
          <Button
            theme={"gradient"}
            type={"normal"}
            onClick={() => onClick(group)}
          >
            View more
          </Button>
        </div>
      </div>
    </Card>
  );
}
