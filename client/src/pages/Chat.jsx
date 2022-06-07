import { CategoryHeader } from "../components/CategoryHeader";
import React from "react";
import { MessageCard } from "../components/MessageCard";

const dummyData = [
  {
    user: "Chad",
    message: "Oppe og klar for å jobbe!?",
    status: {
      indicator: "online",
      children: undefined,
    },
    timestamp: "12:00",
  },
  {
    user: "Bertha",
    message: "Er ferdig med det straksen",
    status: {
      indicator: "busy",
      children: undefined,
    },
    timestamp: "11:00",
  },
  {
    user: "Bob",
    message: "Eksamen snart as, stressa ell?",
    status: {
      indicator: "away",
      children: undefined,
    },
    timestamp: "10.00",
  },
  {
    user: "Karen",
    message: "Hvor skulle vi møtes i dag?",
    status: {
      indicator: "offline",
      children: undefined,
    },
    timestamp: "10:00",
  },
];

export function Chat() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <CategoryHeader name={"Recent messages"} canHide={false}>
        {dummyData.map(({ user, message, status, timestamp }, index) => (
          <MessageCard
            key={index}
            user={user}
            message={message}
            status={status}
            timestamp={timestamp}
          />
        ))}
      </CategoryHeader>
    </div>
  );
}
