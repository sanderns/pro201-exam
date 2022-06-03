import React from "react";
import { Button } from "./ui/Button";
import { Typography } from "./ui/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export function MessageBox({
    onClose,
    displayText,
    onMessage,

}) {

    return (
        <div
            className={`bg-white rounded-2xl drop-shadow p-5 flex flex-col grow gap-2.5`}
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
                className={`bg-gradient-to-r from-gradient-left to-gradient-right rounded-xl h-24 flex justify-center items-center text-white`}
            >
                <PersonOutlineOutlinedIcon fontSize="large" />
            </div>

            <textarea placeholder={"HEi"}></textarea>
            <Button onClick={onMessage}
                    type={"gradient"}
            >
                <Typography element={"p2"} weight={"bold"}>
                    {displayText}
                </Typography>
            </Button>
        </div>
    );
}
