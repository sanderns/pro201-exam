import React from "react";
import { Button } from "./Button";
import { Typography } from "./Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export function StudentCard({ student, onClick }) {
  const { name, aboutMe } = student;

  return (
    <div className={`m-5 bg-white rounded-2xl drop-shadow p-5 grid gap-2.5`}>
      <div
        className={`bg-gradient-to-r from-gradient-left to-gradient-right rounded-xl h-24 flex justify-center items-center text-white`}
      >
        <PersonOutlineOutlinedIcon fontSize="large" />
      </div>
      <Typography element={"p2"} weight={"bold"}>
        {name}
      </Typography>
      <Typography element={"p2"} weight={"bold"}>
        About me
      </Typography>
      <Typography element={"p2"} weight={"regular"}>
        {aboutMe}
      </Typography>
      <Button type={"gradient"} onClick={() => onClick(student)}>
        View more
      </Button>
    </div>
  );
}
