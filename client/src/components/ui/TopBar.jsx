import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export function TopBar() {
  const [canBack, setCanBack] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      setCanBack(true);
    }
  }, []);

  function handleBackClick() {
    navigate(-1); // TODO: Make it so this button works everywhere
  }

  function handleMenuClick() {
    console.log("TODO: Fix this button to show sidebar"); // TODO: Fix this button to show sidebar
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
      <div>LOGO</div>
      <button onClick={handleMenuClick}>
        <MenuIcon />
      </button>
    </div>
  );
}
