import React from "react";
import { Typography } from "./Typography";
import { Button } from "./Button";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export function DetailedStudentCard({
  student,
  onClose,
  onRequest,
  onMessage,
}) {
  const { image, name, study, subject, gradeGoal, studyTime, aboutMe } =
    student;

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
      <div
        className={
          "absolute top-5 right-5 w-24 h-24 bg-gradient-to-r from-gradient-left to-gradient-right rounded-xl flex justify-center items-center text-white"
        }
      >
        <PersonOutlineOutlinedIcon fontSize="large" />
      </div>
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
        About me
      </Typography>
      <Typography element={"p2"} weight={"regular"}>
        {aboutMe}
      </Typography>
      <div className={"flex justify-evenly pt-5"}>
        <Button type={"gradient"} onClickFn={onRequest}>
          Send request
        </Button>
        <Button type={"gradient"} onClickFn={onMessage}>
          Send message
        </Button>
      </div>
    </div>
  );
}
