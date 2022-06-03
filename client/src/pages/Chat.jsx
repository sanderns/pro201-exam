import { CategoryHeader } from "../components/CategoryHeader";
import React from "react";
import { MessageCard } from "../components/MessageCard";

const dummyData = [
  {
    user: "Chad",
    message: "Sup my dude",
    status: {
      indicator: "online",
      children: undefined,
    },
    timestamp: "06:59",
  },
  {
    user: "Sander",
    message: "Work work",
    status: {
      indicator: "busy",
      children: undefined,
    },
    timestamp: "05:55",
  },
  {
    user: "Bob",
    message: "Zzz",
    status: {
      indicator: "away",
      children: undefined,
    },
    timestamp: "03:33",
  },
  {
    user: "Karen",
    message: "**** off",
    status: {
      indicator: "offline",
      children: undefined,
    },
    timestamp: "02:22",
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
