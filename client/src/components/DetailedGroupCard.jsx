import React from "react";
import { Typography } from "./Typography";
import { Button } from "./Button";

export function DetailedGroupCard({ group }) {
    const { name, study, subject, gradeGoal, studyTime, aboutUs } =
        group;

    return (
        <div
            className={`m-5 bg-white rounded-2xl drop-shadow p-5 grid gap-2.5 relative`}
        >
            <Typography element={"p2"} weight={"bold"}>
                {name}
            </Typography>
            <ul className={`list-disc mx-8`}>
                <li>
                    <Typography element={"p2"}>{study}</Typography>
                </li>
                <li>
                    <Typography element={"p2"}>{subject}</Typography>
                </li>
                <li>
                    <Typography element={"p2"}>{gradeGoal}</Typography>
                </li>
                <li>
                    <Typography element={"p2"}>{studyTime}</Typography>
                </li>
            </ul>
            <Typography element={"p2"} weight={"bold"}>
                About us
            </Typography>
            <Typography element={"p2"}>{aboutUs}</Typography>
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
