import React from "react";
import { Typography } from "./Typography";

export function Input({ label, type, value, onChange }) {
  // Handle no provided input
  if (type !== "text" && type !== "textarea") {
    console.log("Type is not defined! Value set to 'text'");
    type = "text";
  }

  // Handle provided input
  function getInputType() {
    switch (type) {
      case "text":
        return (
          <>
            <input
              value={value}
              onChange={(event) => onChange(event.target.value)}
              className="bg-white rounded-full grow shadow py-1 px-3"
            />
          </>
        );
      case "textarea":
        return (
          <>
            <textarea
              value={value}
              onChange={(event) => onChange(event.target.value)}
              className="bg-white rounded-2xl grow shadow py-1 px-3"
            />
          </>
        );
    }
  }

  const inputType = getInputType();

  return (
    <div className="flex">
      <div className="flex flex-col gap-2 grow">
        <Typography element={"h3"} weight={"regular"}>
          {label}
        </Typography>
        {inputType}
      </div>
    </div>
  );
}
