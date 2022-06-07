import React from "react";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export function DetailedGroupCard({ group, onClose, onRequest, onMessage }) {
  const { name, study, subject, gradeGoal, studyTime, aboutUs } = group;

  return (
    <div
      className={`m-5 bg-white rounded-2xl drop-shadow p-5 grid gap-2.5 relative`}
    >
      <button
        onClick={onClose}
        className={
          "absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-gradient-left to-gradient-right rounded-full flex justify-center items-center text-white"
        }
      >
        <CloseOutlinedIcon />
      </button>
      <div className="w-72" />
      <Typography element={"p2"} weight={"bold"}>
        {name}
      </Typography>
      <ul className={`list-disc mx-8`}>
        <li>
          <Typography element={"p2"} weight={"regular"}>
            {study}
          </Typography>
        </li>
        <li>
          <Typography element={"p2"} weight={"regular"}>
            {subject}
          </Typography>
        </li>
        <li>
          <Typography element={"p2"} weight={"regular"}>
            {gradeGoal}
          </Typography>
        </li>
        <li>
          <Typography element={"p2"} weight={"regular"}>
            {studyTime}
          </Typography>
        </li>
      </ul>
      <Typography element={"p2"} weight={"bold"}>
        About us
      </Typography>
      <Typography element={"p2"} weight={"regular"}>
        {aboutUs}
      </Typography>
      <div className={"flex justify-around"}>
        <Button type={"gradient"} onClick={onRequest}>
          Send request
        </Button>
        <Button type={"gradient"} onClick={onMessage}>
          Send message
        </Button>
      </div>
    </div>
  );
}
