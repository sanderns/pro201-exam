import React from "react";
import { Typography } from "./Typography";
import { useNavigate } from "react-router-dom";

export function NavCard({ href, element, children }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(href)}
      className={`rounded p-10 bg-white drop-shadow rounded flex justify-center items-center`}
    >
      <Typography element={element} weight={"regular"}>
        {children}
      </Typography>
    </button>
  );
}
