import { Typography } from "./ui/Typography";
import React from "react";

export function ContactStatus({ indicator, children }) {
  // Handles no provided indicator
  if (
    indicator !== "online" &&
    indicator !== "busy" &&
    indicator !== "away" &&
    indicator !== "offline"
  ) {
    console.log('Indicator is not defined! Value set to "online"');
    indicator = "online";
  }

  // Handles provided indicator
  function getIndicatorStyle() {
    switch (indicator) {
      case "online":
        return "bg-status-online";
      case "busy":
        return "bg-status-busy";
      case "away":
        return "bg-status-away";
      case "offline":
        return "bg-status-offline";
    }
  }

  const indicatorStyle = getIndicatorStyle();

  // Handles no provided children
  function getStatusText() {
    if (children) {
      return children;
    } else {
      switch (indicator) {
        case "online":
          return "Online";
        case "busy":
          return "Busy";
        case "away":
          return "Away";
        case "offline":
          return "Offline";
      }
    }
  }

  const statusText = getStatusText();

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full shadow ${indicatorStyle}`} />
      <Typography element={"p1"} weight={"regular"}>
        {statusText}
      </Typography>
    </div>
  );
}
