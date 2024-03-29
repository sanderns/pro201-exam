import React from "react";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export function StudentDetailed({ student, onClose, onRequest }) {
  const { name, study, subject, gradeGoal, studyTime, aboutMe } = student;

  return (
    <>
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
      <div className={"flex justify-end pt-5"}>
        <Button theme={"gradient"} type={"normal"} onClick={onRequest}>
          Send request
        </Button>
      </div>
    </>
  );
}
