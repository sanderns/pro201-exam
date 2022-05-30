import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuIcon from "@mui/icons-material/Menu";

export function TopBar() {
  function handleClick() {
    console.log(""); // TODO: Fix this button
  }

  return (
    <div
      className={`flex justify-between items-center p-5 pt-10 bg-gradient-to-r from-gradient-left to-gradient-right text-white`}
    >
      <a href="/">
        <ArrowBackIosNewIcon />
      </a>
      <div>LOGO</div>
      <button onClick={handleClick}>
        <MenuIcon />
      </button>
    </div>
  );
}
