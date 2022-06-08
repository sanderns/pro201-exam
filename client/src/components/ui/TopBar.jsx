import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { navList } from "../../navigation-config";

export function TopBar() {
  const [canBack, setCanBack] = useState(false);
  const [backsTo, setBacksTo] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    navList.map((item) => {
      if (item.path === window.location.pathname) {
        if (item.canBack !== false) {
          setCanBack(true);
          setBacksTo(item.canBack.path);
        } else {
          setCanBack(false);
        }
      }
    });
  }, [window.location.pathname]);

  function handleBackClick() {
    navigate(backsTo);
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
      {/* BUTTON IS HIDDEN SINCE ITS NOT FULLY DEVELOPED */}
      <button className="invisible">
        <MenuIcon />
      </button>
    </div>
  );
}
