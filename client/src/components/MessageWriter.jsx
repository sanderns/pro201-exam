import { Button } from "./ui/Button";
import { NavBar } from "./ui/NavBar";
import React from "react";

export function MessageWriter({ onClick }) {
  return (
    <div className="fixed left-0 bottom-0 right-0">
      <div className="flex justify-between p-5 bg-white shadow p-2 gap-2">
        <input
          type="text"
          placeholder="Message..."
          className="bg-purple-500 p-2 rounded-lg grow flex flex-wrap"
        />
        <Button theme={"flat"} type={"normal"} onClick={onClick}>
          Send
        </Button>
      </div>
      <div className="invisible">
        <NavBar />
      </div>
    </div>
  );
}
