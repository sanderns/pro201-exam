import React from "react";

export function Card({ children }) {
  return (
    <div
      className={`bg-white rounded-2xl drop-shadow p-5 grid gap-2.5 relative`}
    >
      {children}
    </div>
  );
}
