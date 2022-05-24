import React from "react";
import styles from "./Button.module.css";
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
        return styles["bg-gradient"];
      case "flat":
        return styles["bg-flat"];
      case "dark":
        return styles["bg-dark"];
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
    <button onClick={handleClick} className={`${styles.container} ${bgColor}`}>
      <Typography element={"b2"} weight={"bold"}>
        {children}
      </Typography>
    </button>
  );
}
