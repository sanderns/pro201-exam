import React, { useState } from "react";
import { Button } from "./Button";
import { Typography } from "./Typography";
import { DetailedStudentCard } from "./DetailedStudentCard";

export function StudentCard({ student }) {
  const [showDetailed, setShowDetailed] = useState(false);
  const { name, aboutMe } = student;

  function viewMore() {
    setShowDetailed(!showDetailed);
  }

  return (
    <div className={`m-5 bg-white rounded-2xl drop-shadow p-5 grid gap-2.5`}>
      <div
        className={`bg-gradient-to-r from-gradient-left to-gradient-right rounded-xl h-24 flex justify-center items-center `}
      >
        ICON
      </div>
      <Typography element={"p2"} weight={"bold"}>
        {name}
      </Typography>
      <Typography element={"p2"} weight={"bold"}>
        About me
      </Typography>
      <Typography element={"p2"}>{aboutMe}</Typography>
      <Button type={"gradient"} onClickFn={viewMore}>
        View more
      </Button>
      {showDetailed && <DetailedStudentCard student={student} />}
    </div>
  );
}
