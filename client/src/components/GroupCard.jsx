import React, { useState } from "react";
import { Button } from "./Button";
import { Typography } from "./Typography";
import { DetailedGroupCard } from "./DetailedGroupCard";

export function GroupCard({ group, onClick }) {
  const { name, aboutUs } = group;

  return (
    <div className={`m-5 bg-white rounded-2xl drop-shadow p-5 grid gap-2.5`}>
      <Typography element={"p2"} weight={"bold"}>
        {name}
      </Typography>
      <Typography element={"p2"} weight={"bold"}>
        About Us
      </Typography>
      <Typography element={"p2"} weight={"regular"}>
        {aboutUs}
      </Typography>
      <Button type={"gradient"} onClick={() => onClick(group)}>
        View more
      </Button>
    </div>
  );
}
