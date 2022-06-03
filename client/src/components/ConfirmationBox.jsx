import React from "react";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export function ConfirmationBox({
                              onClose,
                              displayText,
    onConfirm
}){
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
            <div className="w-72" />
            <Typography element={"p2"} weight={"bold"}>
                {displayText}
            </Typography>
            <div className={"flex justify-evenly pt-5"}>
                <Button
                    type={"gradient"}
                    onClick={onConfirm}
                >
                    Yes
                </Button>
            </div>
        </div>
    );


}