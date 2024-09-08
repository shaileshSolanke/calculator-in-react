import React from "react";
import styles from"../styles/Container.module.css";

export const Container = ({ children }) => {
  return (
    <React.Fragment>
      <div className={styles.container}>{children}</div>
    </React.Fragment>
  );
};
