import React from "react";
import { Typography } from "./Typography";

export function Button({ theme, type, onClick, children }) {
  // Handles no provided theme
  if (theme !== "gradient" && theme !== "flat") {
    console.log('Theme is not defined! Value set to "flat".');
    theme = "flat";
  }

  // Handles provided theme
  function getBgColor() {
    switch (theme) {
      case "gradient":
        return "bg-gradient-to-r from-gradient-left to-gradient-right hover:shadow-md hover:shadow-purple-200/50 active:to-purple-100/70";
      case "flat":
        return "bg-purple-100 hover:shadow-md hover:shadow-purple-200/50 active:bg-purple-100/70";
    }
  }

  const bgColor = getBgColor();

  // Handles no provided type
  if (type !== "hyperlink" && type !== "normal") {
    console.log('Type is not defined! Value set to "normal".');
    type = "normal";
  }

  // Handles provided type
  function getBtnStyle() {
    switch (type) {
      case "hyperlink":
        return "b1";
      case "normal":
        return "b2";
    }
  }

  const btnStyle = getBtnStyle();

  // Handles onClickFn
  function handleClick(event) {
    // If no function is provided
    if (onClick == null) {
      console.log("onClickFn not defined!");
    }
    // If function is provided
    else {
      onClick(event);
    }
  }

  // Handles empty children
  if (children == null || children === "") {
    console.log('Children not defined! Value set to "undefined".');
    children = "undefined";
  }

  // Returns button
  return (
    <button
      onClick={handleClick}
      className={`px-4 p-2 text-md font-bold text-center rounded-standard text-white ${bgColor}`}
    >
      <Typography element={btnStyle} weight={"bold"}>
        {children}
      </Typography>
    </button>
  );
}
