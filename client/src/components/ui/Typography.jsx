import React from "react";

export function Typography({ element, weight, clamp, children }) {
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
        return "text-xl lg:text-2xl";
      case "h2":
        return "text-lg lg:text-xl";
      case "h3":
        return "text-md lg:text-lg";
      case "p1":
        return "text-sm lg:text-md";
      case "p2":
        return "text-xs lg:text-sm";
      case "b1":
        return "text-sm lg:text-lg";
      case "b2":
        return "text-sm lg:text-md";
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

  // Handles no provided clamp
  if (clamp === undefined || clamp === null) {
    clamp = 0;
  }

  // Handles provided clamp
  function getLineClamp() {
    if (clamp !== 0) {
      return `w-full line-clamp-${clamp}`;
    }
  }

  const lineClamp = getLineClamp();

  // Handles empty children
  if (children == null || children === "") {
    console.log('Children not defined! Value set to "undefined".');
    children = "undefined";
  }

  // Returns desired type of typography
  switch (element) {
    case "h1":
      return (
        <h1 className={`${elementStyle} ${weightStyle} ${lineClamp}`}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`${elementStyle} ${weightStyle} ${lineClamp}`}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`${elementStyle} ${weightStyle} ${lineClamp}`}>
          {children}
        </h3>
      );
    default:
      return (
        <p className={`${elementStyle} ${weightStyle} ${lineClamp}`}>
          {children}
        </p>
      );
  }
}
