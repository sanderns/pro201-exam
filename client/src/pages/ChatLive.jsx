import React, { useState } from "react";
import { Message } from "../components/Message";
import { MessageWriter } from "../components/MessageWriter";

const messages = [
  {
    user: {
      name: "Sander",
    },
    time: "12:44",
    message: "Hello Ola",
  },
  {
    user: {
      name: "Ola",
    },
    time: "12:44",
    message: "Hello Sander",
  },
  {
    user: {
      name: "Ola",
    },
    time: "12:44",
    message:
      "Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste ",
  },
  {
    user: {
      name: "Sander",
    },
    time: "12:44",
    message:
      "Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste Copy Paste ",
  },
];

export function ChatLive() {
  const [activeUser, setActiveUser] = useState("Sander");

  function handleClick() {
    console.log("TODO: Make this button push messages into list"); // TODO: Make this button push messages into list
  }

  return (
    <>
      <div className="flex flex-col p-5 gap-5">
        {messages.map(({ user, time, message }, index) =>
          activeUser !== user.name ? (
            <Message key={index} user={user} message={message} time={time} />
          ) : (
            <Message
              key={index}
              activeUser={true}
              user={user}
              message={message}
              time={time}
            />
          )
        )}
      </div>
      <MessageWriter onClick={handleClick} />{" "}
      {/* PERHAPS SUBMIT INSTEAD OF CLICK HERE? */}
    </>
  );
}
