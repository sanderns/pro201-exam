import React from "react";
import { Typography } from "./Typography";

export function NavCard({ href, element, children }) {
  return (
    <a
      href={href}
      className={`rounded p-10 m-2 bg-white drop-shadow rounded flex justify-center items-center`}
    >
      <Typography element={element}>{children}</Typography>
    </a>
  );
}
