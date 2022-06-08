import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Typography } from "./ui/Typography";
import React from "react";

export function Message({ activeUser, user, message, time }) {
  const { name } = user;

  if (!activeUser) {
    return (
      <div className="flex gap-2.5 justify-start">
        <div className="pt-7">
          <div className="w-10 h-10 bg-gradient-to-r from-gradient-left to-gradient-right rounded-full flex justify-center items-center text-white shrink-0">
            <PersonOutlinedIcon fontSize="large" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-end">
            <Typography element={"p1"} weight={"semibold"}>
              {name}
            </Typography>
            <Typography element={"p2"} weight={"regular"}>
              {time}
            </Typography>
          </div>
          <div className="bg-white rounded-lg shadow p-3 flex-wrap">
            <Typography element={"p1"} weight={"regular"}>
              {message}
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (activeUser) {
    return (
      <div className="flex gap-2.5 justify-end">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-end justify-end">
            <Typography element={"p2"} weight={"regular"}>
              {time}
            </Typography>
            <Typography element={"p1"} weight={"semibold"}>
              {name}
            </Typography>
          </div>
          <div className="bg-white rounded-lg shadow p-3 flex-wrap">
            <Typography element={"p1"} weight={"regular"}>
              {message}
            </Typography>
          </div>
        </div>
        <div className="pt-7">
          <div className="w-10 h-10 bg-gradient-to-r from-gradient-left to-gradient-right rounded-full flex justify-center items-center text-white shrink-0">
            <PersonOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>
    );
  }
}
