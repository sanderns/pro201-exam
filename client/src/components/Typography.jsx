import React from "react";
import styles from "./Typography.module.css";

export function Typography({ element, weight, children }) {
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
        return styles.h1;
      case "h2":
        return styles.h2;
      case "h3":
        return styles.h3;
      case "p1":
        return styles.p1;
      case "p2":
        return styles.p2;
      case "b1":
        return styles.b1;
      case "b2":
        return styles.b2;
    }
  }

  const elementStyle = getElementStyle();

  // Handles no provided weight
  if (weight !== "light" && weight !== "regular" && weight !== "bold") {
    console.log('Weight not defined! Value set to "regular".');
    weight = "regular";
  }

  // Handles provided weight
  function getWeightStyle() {
    switch (weight) {
      case "light":
        return styles.light;
      case "regular":
        return styles.regular;
      case "bold":
        return styles.bold;
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
