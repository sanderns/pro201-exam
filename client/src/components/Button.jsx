import React from "react";
import { Typography } from "./Typography";

export function Button({ type, children, onClickFn }) {
  // Handles no provided theme
  if (type !== "gradient" && type !== "flat") {
    console.log('Theme is not defined! Value set to "flat".');
    type = "flat";
  }

  // Handles provided theme
  function getBgColor() {
    switch (type) {
      case "gradient":
        return "bg-gradient-to-r from-gradient-left to-gradient-right hover:shadow-md hover:shadow-purple-200/50 active:to-purple-100/70";
      case "flat":
        return "bg-purple-100 hover:shadow-md hover:shadow-purple-200/50 active:bg-purple-100/70";
    }
  }

  const bgColor = getBgColor();

  // Handles empty children
  if (children == null || children === "") {
    console.log('Children not defined! Value set to "undefined".');
    children = "undefined";
  }

  // Handles onClickFn
  function handleClick(event) {
    // If no function is provided
    if (onClickFn == null) {
      console.log("onClickFn not defined!");
    }
    // If function is provided
    else {
      onClickFn(event);
    }
  }

  // Returns button
  return (
    <button
      onClick={handleClick}
      className={`px-4 p-2 text-md font-bold text-center rounded-standard text-white ${bgColor}`}
    >
      <Typography element={"b2"} weight={"bold"}>
        {children}
      </Typography>
    </button>
  );
}
