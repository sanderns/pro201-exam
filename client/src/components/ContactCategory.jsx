import React from "react";
import { Typography } from "./ui/Typography";
import { ContactCard } from "./ContactCard";

export function ContactCategory() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <Typography element={"h2"} weight={"bold"}>
          Category name
        </Typography>
        <button>
          <Typography element={"p1"} weight={"regular"}>
            Hide
          </Typography>
        </button>
      </div>
      <ContactCard />
    </div>
  );
}
