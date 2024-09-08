import React from "react";
import styles from "../styles/Display.module.css";

export const Display = ({calculation}) => {
  return (
    <React.Fragment>
      <div className={styles.display}>{calculation}</div>
    </React.Fragment>
  );
};
