import React from "react";
import { Button } from "./ui/Button";
import { Typography } from "./ui/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Card } from "./wrappers/Card";

export function StudentCard({ student, onClick }) {
  const { name, aboutMe } = student;

  return (
    <Card>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2.5 pb-2.5">
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
        </div>
        <Button
          theme={"gradient"}
          type={"normal"}
          onClick={() => onClick(student)}
        >
          View more
        </Button>
      </div>
    </Card>
  );
}
