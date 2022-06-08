import React from "react";
import { Typography } from "./Typography";

export function SearchBar({ onChange, onClick }) {
  return (
    <div className="flex items-center bg-white rounded-full shadow h-10">
      <input
        type="text"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search"
        className="grow h-full rounded-l-full px-4 py-2 overflow-hidden text-sm lg:text-md"
      />
      <button
        onClick={onClick}
        className="h-full px-4 p-2 rounded-r-full flex justify-center items-center bg-gradient-to-r from-gradient-left to-gradient-right text-white"
      >
        <Typography element={"b2"} weight={"bold"}>
          Filter
        </Typography>
      </button>
    </div>
  );
}
