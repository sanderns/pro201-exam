import React from "react";
import { Typography } from "./Typography";

export function NavCard({ element, children }) {
  return (
    <div
      className={`rounded p-10 m-2 bg-white drop-shadow rounded flex justify-center items-center`}
    >
      <Typography element={element}>{children}</Typography>
    </div>
  );
}
