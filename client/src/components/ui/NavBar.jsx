import React, { useEffect, useState } from "react";
import { Typography } from "./Typography";
import { useNavigate } from "react-router-dom";
import { navList } from "../../navigation-config";

export function NavBar() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    navList.map(
      (item) => {
        if (window.location.pathname.includes(item.path)) {
          if (item.navbar !== false) {
            setActive(item.navbar.id);
          }
        }
      },
      [window.location.pathname]
    );
  });

  return (
    <div className="flex justify-evenly bg-purple-500">
      {navList.map(
        ({ path, navbar }, index) =>
          navbar && (
            <button
              key={index}
              onClick={() => navigate(path)}
              className={`${
                navbar.id === active &&
                "text-white bg-gradient-to-r from-gradient-left to-gradient-right"
              } flex flex-col items-center grow py-2`}
            >
              <div className="flex justify-center">{navbar.icon}</div>
              <div className="flex justify-center">
                <Typography element={"p2"} weight={"regular"}>
                  {navbar.text}
                </Typography>
              </div>
            </button>
          )
      )}
    </div>
  );
}
