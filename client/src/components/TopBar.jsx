import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Typography } from "./Typography";

export function TopBar() {
  const [canBack, setCanBack] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      setCanBack(true);
    }
  }, []);

  function handleBackClick(event) {
    navigate(-1);
  }

  function handleMenuClick() {
    console.log(""); // TODO: Fix this button and pop-up sidebar
  }

  return (
    <div
      className={`flex justify-between items-center p-5 pt-10 bg-gradient-to-r from-gradient-left to-gradient-right text-white`}
    >
      <button
        onClick={handleBackClick}
        className={!canBack ? "invisible" : undefined}
      >
        <ArrowBackIosNewIcon />
      </button>
      <Typography element={"h1"} weight={"regular"}>
        LOGO
      </Typography>
      <button onClick={handleMenuClick}>
        <MenuIcon />
      </button>
    </div>
  );
}
