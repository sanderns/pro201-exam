import React from "react";
import { Button } from "./Button";
import { Typography } from "./Typography";

export function StudentCard({ name, bio }) {
  return (
    <div className={`m-5 bg-white rounded-2xl drop-shadow p-5 grid gap-2.5`}>
      {/* IMAGE */}
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
      <Typography element={"p2"}>{bio}</Typography>
      <Button type={"gradient"}>View more</Button>
    </div>
  );
}
