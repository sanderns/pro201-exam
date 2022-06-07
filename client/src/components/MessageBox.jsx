import React from "react";
import { Button } from "./ui/Button";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export function MessageBox({ onClose, displayText, onSend }) {
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
      <div className="w-64" />
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder={"To: "}
          className="p-2 bg-white rounded-full drop-shadow"
        />
        <input
          type="text"
          placeholder={"From: You"}
          className="p-2 bg-white rounded-full drop-shadow"
        />
        <input
          type="text"
          placeholder={"Subject: "}
          className="p-2 bg-white rounded-full drop-shadow"
        />
        <input
          type="text"
          placeholder={"Message: "}
          className="p-2 bg-white rounded-full drop-shadow"
        />
        <Button onClick={onSend} type={"gradient"}>
          {displayText}
        </Button>
      </div>
    </div>
  );
}
