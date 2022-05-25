import React from "react";
import { Typography } from "../components/Typography";

export function FrontPage() {
  const elements = ["h1", "h2", "h3", "p1", "p2", "b1", "b2"];
  const weights = ["regular", "medium", "semibold", "bold"];

  const e = elements[0];
  const w = weights[0];

  return (
    <div>
      <Typography element={"h1"} weight={"bold"}>
        Welcome
      </Typography>
      <Typography element={e} weight={w}>
        This is a {e} {w}!
      </Typography>
      {elements.map((element) => {
        weights.map((weight) => (
          <Typography element={element} weight={weight}>
            This is a {weight} {element}!
          </Typography>
        ));
      })}
    </div>
  );
}
