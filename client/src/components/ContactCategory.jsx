import React, { useState } from "react";
import { Typography } from "./ui/Typography";
import { ContactCard } from "./ContactCard";
import { RequestCard } from "./RequestCard";

export function ContactCategory({ name, contacts }) {
  const [hidden, setHidden] = useState(false);
  const { requests, uncategorized } = contacts;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <Typography element={"h2"} weight={"bold"}>
          {name}
        </Typography>
        <button onClick={() => setHidden(!hidden)}>
          <Typography element={"p1"} weight={"regular"}>
            {hidden ? "Show" : "Hide"}
          </Typography>
        </button>
      </div>

      {!hidden &&
        (name === "Requests"
          ? requests.map((contact, index) => (
              <RequestCard key={index} contact={contact} />
            ))
          : uncategorized.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            )))}
    </div>
  );
}
