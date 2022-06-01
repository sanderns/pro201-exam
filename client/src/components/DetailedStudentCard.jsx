import React from "react";
import { Typography } from "./Typography";
import { Button } from "./Button";

export function DetailedStudentCard({ student }) {
  const { image, name, study, subject, gradeGoal, studyTime, aboutMe } =
    student;

  return (
    <div
      className={`m-5 bg-white rounded-2xl drop-shadow p-5 grid gap-2.5 relative`}
    >
      <div
        className={
          "absolute top-5 right-5 w-24 h-24 bg-gradient-to-r from-gradient-left to-gradient-right rounded-xl flex justify-center items-center"
        }
      >
        <div>image</div>
      </div>
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
      <div className={"flex justify-around"}>
        <Button type={"gradient"} onClickFn={() => console.log("Clicked!")}>
          Send request
        </Button>
        <Button type={"gradient"} onClickFn={() => console.log("Clicked!")}>
          Send message
        </Button>
      </div>
    </div>
  );
}
