import React, { useContext } from "react";
import DeviceContext from "../contexts/device-context";

export function Typography({ element, weight, children }) {
  const { isMobile } = useContext(DeviceContext);

  // Handles no provided element
  if (
    element !== "h1" &&
    element !== "h2" &&
    element !== "h3" &&
    element !== "p1" &&
    element !== "p2" &&
    element !== "b1" &&
    element !== "b2"
  ) {
    console.log('Element is not defined! Value set to "p1".');
    element = "p1";
  }

  // Handles provided element
  function getElementStyle() {
    switch (element) {
      case "h1":
        return isMobile ? "font-xl" : "font-2xl";
      case "h2":
        return isMobile ? "font-lg" : "font-xl";
      case "h3":
        return isMobile ? "font-md" : "font-lg";
      case "p1":
        return isMobile ? "font-sm" : "font-md";
      case "p2":
        return isMobile ? "font-xs" : "font-sm";
      case "b1":
        return isMobile ? "font-sm" : "font-lg";
      case "b2":
        return isMobile ? "font-sm" : "font-md";
    }
  }

  const elementStyle = getElementStyle();

  // Handles no provided weight
  if (
    weight !== "regular" &&
    weight !== "medium" &&
    weight !== "semibold" &&
    weight !== "bold"
  ) {
    console.log('Weight not defined! Value set to "regular".');
    weight = "regular";
  }

  // Handles provided weight
  function getWeightStyle() {
    switch (weight) {
      case "regular":
        return "font-regular";
      case "medium":
        return "font-medium";
      case "semibold":
        return "font-semibold";
      case "bold":
        return "font-bold";
    }
  }

  const weightStyle = getWeightStyle();

  // Handles empty children
  if (children == null || children === "") {
    console.log('Children not defined! Value set to "undefined".');
    children = "undefined";
  }

  // Returns desired type of typography
  switch (element) {
    case "h1":
      return <h1 className={`${elementStyle} ${weightStyle}`}>{children}</h1>;
    case "h2":
      return <h2 className={`${elementStyle} ${weightStyle}`}>{children}</h2>;
    case "h3":
      return <h3 className={`${elementStyle} ${weightStyle}`}>{children}</h3>;
    default:
      return <p className={`${elementStyle} ${weightStyle}`}>{children}</p>;
  }
}
