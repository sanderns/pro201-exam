import React, { useState } from "react";
import { Typography } from "./ui/Typography";

export function CategoryHeader({ name, canHide, children }) {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <Typography element={"h2"} weight={"bold"}>
          {name}
        </Typography>
        {canHide && (
          <button onClick={() => setHidden(!hidden)}>
            <Typography element={"p1"} weight={"regular"}>
              {hidden ? "Show" : "Hide"}
            </Typography>
          </button>
        )}
      </div>
      {!hidden && children}
    </div>
  );
}
