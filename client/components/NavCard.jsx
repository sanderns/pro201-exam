import React from "react";
import styles from "./NavCard.module.css";
import { Typography } from "./Typography";

export function NavCard({ children }) {
  return (
    <div className={styles.container}>
      <Typography element={"h3"}>{children}</Typography>
    </div>
  );
}
